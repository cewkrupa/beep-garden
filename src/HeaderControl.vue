<template>
  <div class="flex fixed" id="wrapper">
    <div id="headerControl" class="flex fixed" @click.stop>
      <h1 @click="showSelect = !showSelect">Beep Garden</h1>

      <div class="header-selects flex " v-if="showSelect">
        <select :value="newStartNote" @change.stop="newStartNote = $event.target.value" name="Select start note">
          <option v-for="note in startNotes" :value="note" :key="note">{{note}}</option>
        </select>

        <select :value="newScale" @change.stop="newScale = $event.target.value" name="Select scale">
          <option v-for="scale in scales" :value="scale" :key="scale">{{scale}}</option>
        </select>

        <select :value="newFloor" @change.stop="newFloor = parseInt($event.target.value)" name="Select floor octave">
          <option v-for="octave in constrainedFloorOctaves" :value="octave" :key="octave">{{octave}}</option>
        </select>
        <select :value="newCeil" @change.stop="newCeil = parseInt($event.target.value)" name="Select ceiling octave">
          <option v-for="octave in constrainedCeilingOctaves" :value="octave" :key="octave">{{octave}}</option>
        </select>
        <div class="flex buttons">
          <button @click.stop="resetState">cancel changes</button>
          <button @click.stop="emitConfigChange">apply changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderControl',
  props: {
    presets: Array,
    startNote: String,
    startNotes: Array,
    scale: String,
    scales: Array,
    floorOctave: Number,
    ceilingOctave: Number,
    octaves: Array
  },
  data () {
    return {
      showSelect: false,
      newStartNote: this.startNote,
      newScale: this.scale,
      newFloor: this.floorOctave,
      newCeil: this.ceilingOctave
    }
  },
  computed: {
    constrainedFloorOctaves () {
      return this.octaves.filter(octave => octave <= this.newCeil)
    },
    constrainedCeilingOctaves () {
      return this.octaves.filter(octave => octave >= this.newFloor)
    }
  },
  methods: {
    resetState () {
      this.showSelect = false
      this.resetValues()
    },
    resetValues () {
      this.newStartNote = this.startNote
      this.newScale = this.scale
      this.newFloor = this.floorOctave
      this.newCeil = this.ceilingOctave
    },
    emitConfigChange () {
      this.emitChangeScale(this.newScale)
      this.emitChangeStartNote(this.newStartNote)
      this.emitChangeFloorOctave(this.newFloor)
      this.emitChangeCeilingOctave(this.newCeil)

      this.resetState()
    },
    emitChangeScale (value) {
      this.$emit('change:scale', value)
    },
    emitChangeStartNote (value) {
      this.$emit('change:startNote', value)
    },
    emitChangeFloorOctave (value) {
      this.$emit('change:floorOctave', parseInt(value))
    },
    emitChangeCeilingOctave (value) {
      this.$emit('change:ceilingOctave', parseInt(value))
    }
  },
  watch: {
    showSelect: function (val) {
      if (val) {
        this.resetValues()
      }
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
  margin-top: .5em;
  margin-bottom: .5em;
}

.buttons {
  justify-content: space-evenly;
  padding-top: .5em;
}

h1 {
  text-align: center;
}
</style>
