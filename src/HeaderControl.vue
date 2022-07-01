<template>
  <div class="flex fixed" id="wrapper">
    <div id="headerControl" class="flex fixed" @click.stop>
      <h1 @click="showSelect = !showSelect">Beep Garden</h1>

      <div class="header-selects flex " v-if="showSelect">
        <select :value="startNote" @change.stop="emitChangeStartNote($event.target.value)" name="Select start note">
          <option v-for="note in startNotes" :value="note" :key="note">{{note}}</option>
        </select>

        <select :value="scale" @change.stop="emitChangeScale($event.target.value)" name="Select scale">
          <option v-for="scale in scales" :value="scale" :key="scale">{{scale}}</option>
        </select>

        <select :value="floorOctave" @change.stop="emitChangeFloorOctave($event.target.value)" name="Select floor octave">
          <option v-for="octave in octaves" :value="octave" :key="octave">{{octave}}</option>
        </select>
        <select :value="ceilingOctave" @change.stop="emitChangeCeilingOctave($event.target.value)" name="Select ceiling octave">
          <option v-for="octave in octaves" :value="octave" :key="octave">{{octave}}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderControl',
  props: {
    preset: {
      type: String,
      default: 'Major pentatonic scale'
    },
    presets: Array,
    startNote: {
      type: String,
      default: 'C'
    },
    startNotes: Array,
    scale: {
      type: String,
      default: 'Major'
    },
    scales: Array,
    floorOctave: {
      type: Number,
      default: 4
    },
    ceilingOctave: {
      type: Number,
      default: 4
    },
    octaves: Array
  },
  data () {
    return {
      showSelect: false
    }
  },
  methods: {
    emitChangeScale (value) {
      this.$emit('change:scale', value)
    },
    emitChangeStartNote (value) {
      this.$emit('change:startNote', value)
    },
    emitChangeFloorOctave (value) {
      this.$emit('change:floorOctave', value)
    },
    emitChangeCeilingOctave (value) {
      this.$emit('change:ceilingOctave', value)
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

.header-selects {
  flex-direction: column;
}

.header-selects select{
  flex-shrink: 1;
}
</style>
