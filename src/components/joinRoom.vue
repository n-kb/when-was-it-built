<template>
  <div class="section">
    <div class="field">
      <label class="label">Enter the name of the room you want to join</label>
      <div class="control">
        <input class="input" type="text" placeholder="Room name" v-model="roomName">
      </div>
    </div>
    <p class="has-text-centered">
      <a class="button" @click="$emit('roomChosen', roomName.toLowerCase().trim())">Join room</a>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'joinRoom',
    data () {
      return {
        roomName: ""
      }
    }
  }
</script>

<style lang="sass">
</style>