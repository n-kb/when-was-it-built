<template>
<div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
        <section class="modal-card-body content">
          <h3 class="has-text-centered">
            Round {{ roundDisplayed }} of {{ MAX_ROUNDS }}
          </h3>
            <div class="has-text-centered">
                {{ correctAnswer[2] }} was built between <strong>{{ correctAnswer[0] }}</strong> and <strong>{{ correctAnswer[1] }}</strong>.
            </div>
            <div class="columns is-mobile section">
                <div class="column has-text-centered">
                    You guessed {{ answer }} and scored <br/><strong>{{ scores.round.user }}</strong> points!
                </div>
                <div class="column has-text-centered">
                    {{ opponent.name }} scored <br/><strong>{{ opponent.score }}</strong> points!
                </div>
            </div>
            <div class="has-text-centered resultSentence" v-if="round == MAX_ROUNDS + 1">
                <p><span class="tag is-info is-size-6">{{ resultSentence }}</span></p>
            </div>
            <div class="has-text-centered" v-if="round < MAX_ROUNDS + 1">
                <span class="tag is-link is-size-6">Next question in {{ countdown }} seconds!</span>
            </div>
            <div class="has-text-centered" v-else>
                <p><span class="tag is-link is-size-7">New game starts in {{ countdown_newGame }} seconds!</span></p>
            </div>
        </section>
    </div>
</div>
</template>

<script>
export default {
  name: 'roundSummary',
  data () {
      return {
          countdown: 8,
          countdown_newGame: process.env.NODE_ENV === 'production' ? 10 : 5,
          MAX_ROUNDS: process.env.NODE_ENV === 'production' ? 10 : 2
      }
  },
  methods: {
  	newGame() {
		var self = this
		setInterval(function(){
		self.countdown_newGame -= 1
			if (self.countdown_newGame == 0) {
				self.$emit('newGame')
			}
		}, 1000)
  	}
  },
  mounted () {
      if (this.round == this.MAX_ROUNDS + 1) {
        this.newGame()
      } else {
	      var self = this
	      setInterval(function(){
	        self.countdown -= 1
	        if (self.countdown == 0 && self.round < self.MAX_ROUNDS + 1) {
	            // Resume game after countdown is over
	            self.$emit('engage')
	        }
	      }, 1000)
      }
  },
  computed: {
      resultSentence() {
          return (this.scores.total.user >= this.scores.total.opponent) ? "🏆 Congratulations, you won! 🏆" : "😭 You lost, try harder! 😭"
      },
      roundDisplayed() {
      	return this.round - 1 <= this.MAX_ROUNDS ? this.round - 1 : this.MAX_ROUNDS
      }
  },
  props: {
    correctAnswer: {
      default () { return [0,0, ""] },
      type: Array
    },
    scores: {
      default() {
          return {
            round: {
              "user": 0,
              "opponent": 0
            },
            total: {
              "user": 0,
              "opponent": 0
            }
        }
      },
      type: Object
    },
    answer: {
      default: 0,
      type: Number
    },
    round: {
      default: 0,
      type: Number
    },
    opponent: {
      default () { return {name: "", score: 0} },
      type: Object
    }
  }
}
</script>

<style lang="sass">
.resultSentence
	margin-bottom: 1em
</style>