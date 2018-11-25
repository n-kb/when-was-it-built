<template>
  <div class="section">
    <div class="field">
      <label class="label">What's your name?</label>
      <div class="control">
        <input class="input" type="text" placeholder="Your name" v-model="userName">
      </div>
    </div>
    <p class="has-text-centered">
      <a class="button" @click="clickedPlay()">{{ playMessage }}</a>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'namePrompt',
    data () {
      return {

      }
    },
    props: {
      newGame: {
        default: true,
        type: Boolean
      },
      roomName: {
        default: "",
        type: String
      }
    },
    computed: {
      playMessage() {
        return this.newGame ? "Create game" : "Start game"
      },
      userName () {
      	return this.makeName()
      }
    },
    methods: {
        makeName () {
          var adjectives = ["pretty", "funny", "sweet", "magic"]
          var animals = ["unicorn", "puppy", "panda", "lion", "cat"]
          return adjectives[Math.floor(Math.random()*adjectives.length)] + " " + animals[Math.floor(Math.random()*animals.length)]
        },
      clickedPlay () {
        this.newGame ? this.$emit('nameChosen', this.userName) : this.startGame()
      },
      startGame () {
        this.$socket.sendObj({joinRoom: this.roomName, username: this.userName})
        this.$options.sockets.onmessage = (data) => {
          var response = JSON.parse(data.data)
          if (response.hasOwnProperty("playerName")) {
            var opponentName = response.playerName
            this.$emit('gameReady', {userName: this.userName, opponentName: opponentName, building: response.building, roomName: this.roomName})
          }
        }
      }
    }
  }
</script>

<style lang="sass">
</style>