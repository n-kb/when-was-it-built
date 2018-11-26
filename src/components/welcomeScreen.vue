<template>
  <section class="hero is-success is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered content">
          <h1 class="title">
            When was it built?
          </h1>
          <h2 class="subtitle">
            A game for two nerds of architecture history.
          </h2>
            <p class="has-text-centered">
              <a class="button" @click="$emit('newGame', false)">Join game</a>
            </p>
            <p class="has-text-centered">
              <a class="button" @click="$emit('newGame', true)">New game</a>
            </p>
        </div>
      </div>

      <div class="hero-foot">
        <p class="has-text-centered is-size-7">
            Made with 💙 by <a href="http://nkb.fr" target="_blank">Nicolas Kayser-Bril</a> with data from the University of Washington's <a href="https://content.lib.washington.edu/buildingsweb/index.html" target="_blank">Cities and Buildings Database</a>.
        </p>
      </div>
    </section>
</template>

<script>
export default {
  name: 'welcomeScreen'
}
</script>

<style lang="sass">
</style>