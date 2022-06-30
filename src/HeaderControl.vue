<template>
  <div class="flex fixed" id="wrapper">
    <div id="headerControl" class="flex fixed" @click.stop>
      <h1 @click="showSelect = !showSelect">Beep Garden</h1>
      <select v-if="showSelect" :value="value" @change.stop="emitChange($event.target.value)">
        <option v-for="option in options" :value="option" :key="option">{{option}}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderControl',
  props: {
    value: {
      type: String,
      default: 'gMinorPentatonic'
    },
    options: Array
  },
  data () {
    return {
      showSelect: false
    }
  },
  methods: {
    emitChange (value) {
      this.$emit('change', value)
      this.showSelect = false
    }
  }

}
</script>

<style lang="css" scoped>
.flex {
  display: flex;
}
.fixed {
  position: fixed;
}
#wrapper {
  width: 100%;
  align-items: center;
  flex-direction: column;
}
#headerControl {
  top: 3em;
  margin: auto auto;
  flex-direction: column;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-family: "Dosis", sans-serif;
}
</style>
