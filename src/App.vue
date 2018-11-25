<template>
  <div id="app">
    <div class="container">
      <welcomeScreen 
        v-on:newGame="$event ? promptName(true) : proceedToRoom(false)" 
        v-if="showWelcomeScreen" />
      <namePrompt 
        :newGame="newGame"
        :roomName="roomName"
        v-on:nameChosen="proceedToRoom($event)" 
        v-on:gameReady="play($event)" 
        v-if="showNamePrompt" />
      <joinRoom 
        v-if="showjoinRoom"
        v-on:roomChosen="promptName($event)"/>
      <createRoom  
        v-if="showCreateRoom" 
        :userName="userName" 
        v-on:gameReady="play($event)"/>
      <game 
        v-if="showGame" 
        :userName="userName" 
        :opponentName="opponentName" 
        :building="building" 
        :roomName="roomName"/>
    </div>
  </div>
</template>

<script>

import welcomeScreen from './components/welcomeScreen.vue'
import namePrompt from './components/namePrompt.vue'
import joinRoom from './components/joinRoom.vue'
import createRoom from './components/createRoom.vue'
import game from './components/game.vue'

export default {
  components: {
    welcomeScreen,
    namePrompt,
    joinRoom,
    createRoom,
    game
  },
  data () {
    return {
      showWelcomeScreen: true,
      showNamePrompt: false,
      showjoinRoom: false,
      showCreateRoom: false,
      showGame: false,
      newGame: true,
      userName: "",
      opponentName: "",
      roomName: "",
      building: {}
    }
  },
  name: 'app',
  methods: {
    promptName(newGame) {
      if (newGame === true){
        this.newGame = true
      } else {
        this.newGame = false
        this.roomName = newGame
      }
      this.showWelcomeScreen = false
      this.showNamePrompt = true
      this.showjoinRoom = false
    },
    proceedToRoom(userName) {
      if (userName !== false) {
        // Creates room
        this.userName = userName
        this.showNamePrompt = false
        if (this.newGame) this.createRoom()
      } else {
        // Joins room
        this.newGame = false
        this.showWelcomeScreen = false
        this.showjoinRoom = true
      }
    },
    createRoom() {
      this.showjoinRoom = false
      this.showCreateRoom = true
    },
    play(gameStart) {
      this.opponentName = gameStart.opponentName
      this.building = gameStart.building
      this.roomName = gameStart.roomName
      this.showjoinRoom = false
      this.showCreateRoom = false
      this.showNamePrompt = false
      this.showGame = true
    }
  }

}
</script>

<style lang="sass">
@import "~bulma/bulma"
</style>
