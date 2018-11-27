<template>
  <div>
    <roundSummary 
      v-if="show_roundSummary" 
      :correctAnswer="correctAnswer" 
      :scores="scores" 
      :opponent="opponent"
      :round="round"
      :answer="answer"
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
      <div class="hero-body main-img" :style="{'background-image': `url(${imageSrc})`}">

      </div>
      <div class="hero-footer footer-question">
        <div class="container content" v-if="answerSubmitted">
          <p>Waiting for {{ opponentName }}'s answer...</p>
        </div>
        <div class="container content" v-else>
          <p class="is-size-7"><strong>{{ currentBuilding.name }}</strong> ({{ currentBuilding.city }}, {{ currentBuilding.country }}). When was it build?</p>
          
          <vue-slider 
            class="slider"
            ref="slider" 
            v-bind="slider_options"
            v-model="answer" >
          </vue-slider>
          <!-- <div class="field has-addons">
            <p class="control">
              <a class="button" :class="{ 'is-info': !isCurrentEra }" @click="isCurrentEra=false">
                <span class="is-size-7">BCE</span>
              </a>
            </p>
            <p class="control">
              <a class="button" :class="{ 'is-info': isCurrentEra }" @click="isCurrentEra=true">
                <span class="is-size-7">CE</span>
              </a>
            </p>
            <div class="control">
              <input class="input" type="number" placeholder="Date here" v-model="typed_answer" min="1" max="5000">
            </div>
            <div class="control">
              <a class="button is-primary" @click="submitAnswer()">
                Next
              </a>
            </div>
          </div> -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import roundSummary from './roundSummary.vue'
import vueSlider from 'vue-slider-component'
// 25 seconds per question
const COUNTDOWN = process.env.NODE_ENV === 'production' ? 25 : 6

export default {
  name: 'game',
  components: {
    roundSummary, vueSlider
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
      countdown: COUNTDOWN,
      isCurrentEra: true,
      typed_answer: 2002,
      answer: 2000,
      round: 1,
      slider_options: {
        formatter:this.formatter,
        min: -600,
        max:2020,
        interval: 10,
        'tooltip-style':{'background-color': '#2d616f', 'border-color': '#2d616f'},
        'process-style':{'background-color': '#2d616f'}
      }
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
    formatter(v) {
      return v > 0 ? v + " CE" : (v * -1) + " BCE"
    },
    submitAnswer() {
      if (this.answerSubmitted == false) {
        this.$socket.sendObj({username: this.userName, roomName: this.roomName, answer: this.answer, building_id: this.currentBuilding.id, round: this.round})
        this.answerSubmitted = true
      }
    },
    resumeGame() {
      this.show_roundSummary = false
      this.answerSubmitted = false
      this.countdown = COUNTDOWN
    },
    newGame() {
      // Tells server to empty the rounds
      this.$socket.sendObj({newGame: true, roomName: this.roomName})
      this.round = 1
      this.scores.round.user = 0
      this.scores.round.opponent = 0
      this.scores.total.user = 0
      this.scores.total.opponent = 0
      this.resumeGame()
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
  background-position: center
  background-repeat: no-repeat

.header-score
  background: #FFF
  font-variant: small-caps
  padding: .6em

.footer-question
  background: #FFF
  padding: .6em

</style>