<template>
  <div class="section">
    <p class="has-text-centered">
      Your room name is <strong>{{ roomName }}</strong>.
    </p>
    <p class="has-text-centered" v-if="newPlayerJoined">
      <strong>{{ opponentName }}</strong> has joined!
    </p>
    <p class="has-text-centered" v-else>
      Waiting for another player to join...
    </p>

  </div>
</template>

<script>
  export default {
    name: 'createRoom',
    props: {
      userName: {
        default: "",
        type: String
      }
    },
    data () {
      return {
        roomName: "...",
        newPlayerJoined: false,
        opponentName: "",
        buildings: []
      }
    },
    created () {
      this.$socket.sendObj({newRoom: 'true', username: this.userName})
      this.$options.sockets.onmessage = (data) => {
        var response = JSON.parse(data.data)
        if (response.hasOwnProperty("roomName")) {
          this.roomName = response.roomName
        } else if (response.hasOwnProperty("newPlayerJoined")) {
          this.newPlayerJoined = true
          this.opponentName = response.playerName
          this.building = response.building
          var self = this
          setTimeout(function(){
            self.$emit('gameReady', {opponentName: self.opponentName, building: self.building, roomName: self.roomName})
          }, 200)
        }
      }
    }
  }
</script>

<style lang="sass">
</style>