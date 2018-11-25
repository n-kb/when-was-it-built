<template>
<div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
        <section class="modal-card-body content">
            <div class="has-text-centered">
                {{ correctAnswer[2] }} was built between <strong>{{ correctAnswer[0] }}</strong> and <strong>{{ correctAnswer[1] }}</strong>.
            </div>
            <div class="columns is-mobile section">
                <div class="column has-text-centered">
                    You scored <br/><strong>{{ scores.round.user }}</strong> points!
                </div>
                <div class="column has-text-centered">
                    {{ opponent.name }} scored <br/><strong>{{ opponent.score }}</strong> points!
                </div>
            </div>
            <div class="has-text-centered" v-if="round == MAX_ROUNDS">
                <p>{{ resultSentence }}</p>
            </div>
            <div class="has-text-centered" v-if="round < MAX_ROUNDS">
                <span class="tag is-info is-size-6">Next question in {{ countdown }} seconds!</span>
            </div>
            <div class="has-text-centered" v-else>
                <a class="button is-info" @click="$emit('newGame')">Start new game</a>
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
          countdown: 5,
          MAX_ROUNDS: 11
      }
  },
  mounted () {
      var self = this
      setInterval(function(){
        self.countdown -= 1
        if (self.countdown == 0 && self.round < self.MAX_ROUNDS) {
            // Resume game after countdown is over
            self.$emit('engage')
        }
      }, 1000)
  },
  computed: {
      resultSentence() {
          return (this.scores.total.user > this.scores.total.opponent) ? "Congratulations, you won!" : "You lost, try harder!"
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
</style>