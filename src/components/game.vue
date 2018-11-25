<template>
  <div>
    <roundSummary 
      v-if="show_roundSummary" 
      :correctAnswer="correctAnswer" 
      :scores="scores" 
      :opponent="opponent"
      :round="round"
      v-on:engage="resumeGame()"
      v-on:newGame="newGame()"/>
    <section class="hero is-fullheight">
      <div class="hero-head header-score">
        <div class="columns is-mobile is-size-7">
          <div class="column">
            You <strong>{{ scores.total.user }}</strong>
          </div>
          <div class="column has-text-centered">
            <span class="tag" v-if="countdown >= 0" v-bind:class="{ 'is-warning': countdown <= 6, 'is-danger': countdown <= 3 }">{{ countdown }}</span>
          </div>
          <div class="column has-text-right">
            <strong>{{ scores.total.opponent }}</strong> {{ opponentName }}
          </div>
        </div>
      </div>
      <img class="main-img" :src="imageSrc"/>
      <div class="hero-footer footer-question">
        <div class="container content" v-if="answerSubmitted">
          <p>Waiting for {{ opponentName }}'s answer...</p>
        </div>
        <div class="container content" v-else>
          <p class="is-size-7"><strong>{{ currentBuilding.name }}</strong> ({{ currentBuilding.city }}, {{ currentBuilding.country }}). When was it build?</p>
          <div class="field has-addons">
            <div class="control">
              <input class="input" type="number" placeholder="Date here" v-model="answer">
            </div>
            <div class="control">
              <a class="button is-info" @click="submitAnswer()">
                Next
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import roundSummary from './roundSummary.vue'
export default {
  name: 'game',
  components: {
    roundSummary
  },
  data () {
    return {
      scores: {
        round: {
          "user": 0,
          "opponent": 0
        },
        total: {
          "user": 0,
          "opponent": 0
        }
      },
      currentBuilding: {},
      correctAnswer: [],
      show_roundSummary: false,
      answerSubmitted: false,
      countdown: 15,
      answer: 2002,
      round: 1
    }
  },
  computed: {
    imageSrc () {
      return `https://digitalcollections.lib.washington.edu/digital/api/singleitem/image/buildings/${this.currentBuilding.photos.split(",")[0]}/default.jpg?highlightTerms=`
    },
    opponent () {
      return { name: this.opponentName, score: this.scores.round.opponent }
    }
  },
  methods: {
    submitAnswer() {
      this.$socket.sendObj({username: this.userName, roomName: this.roomName, answer: this.answer, building_id: this.currentBuilding.id, round: this.round})
      this.answerSubmitted = true
    },
    resumeGame() {
      this.show_roundSummary = false
      this.countdown = 15
    },
    newGame() {
      this.resumeGame()
      this.round = 1
      this.scores.round.user = 0
      this.scores.round.opponent = 0
      this.scores.total.user = 0
      this.scores.total.opponent = 0
    }
  },
  mounted () {
      var self = this
      setInterval(function(){
        self.countdown -= 1
        if (self.countdown == 0) {
            // Sends answer if time is over
            self.submitAnswer()
        }
      }, 1000)
  },
  created () {
    this.currentBuilding = this.building
    this.$options.sockets.onmessage = (data) => {
      var response = JSON.parse(data.data)
        if (response.hasOwnProperty("round_summary")) {
          // updates the scores
          this.scores.round.user = response.round_summary[this.userName].points
          this.scores.round.opponent = response.round_summary[this.opponentName].points
          this.scores.total.user += this.scores.round.user
          this.scores.total.opponent += this.scores.round.opponent
          // Loads the correct answer
          this.correctAnswer = response.round_summary.correct_answer
          // Display the scores for 3 seconds
          this.show_roundSummary = true
          // Loads the next question
          this.currentBuilding = response.building
          this.answerSubmitted = false
          // Increments round
          this.round++
        }
    }
  },
  props: {
    userName: {
      default: "",
      type: String
    },
    roomName: {
      default: "",
      type: String
    },
    opponentName: {
      default: "",
      type: String
    },
    building: {
      default () {
        return {}
      },
      type: Object
    }
  }
}
</script>

<style lang="sass">
.main-img
  min-width: 100%
  min-height: 100%
  z-index: -1
  top: 0
  left: 0
  position: fixed

.header-score
  background: #FFF
  font-variant: small-caps
  padding: .6em

.footer-question
  background: #FFF
  padding: .6em

</style>