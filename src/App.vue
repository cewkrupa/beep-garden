<template>
  <div
   class="full-width background"
   @click.prevent="beepOnClick"
   >
    <img id="foreground" :src="foregrounds[0].src" :alt="foregrounds[0].alt" :height="height" :width="width" />
    <HeaderControl

      :startNote="selectedStartNote"
      :startNotes="availableNotes"
      @change:startNote="onChangeStartNote"

      :scale="selectedScaleName"
      :scales="availableScales"
      @change:scale="onChangeScale"

      :floorOctave="selectedFloorOctave"
      :ceilingOctave="selectedCeilingOctave"
      :octaves="availableOctaves"
      @change:floorOctave="onChangeFloorOctave"
      @change:ceilingOctave="onChangeCeilingOctave"

    />
  </div>
</template>

<script>
import GardenGates from './assets/garden-gates-entrance.png'
import Pizzicato from 'pizzicato'
import HeaderControl from './HeaderControl'
import { getFrequencyForNames as n, generateScale as g, scaleDefinitions, noteLetterArray } from './notes'
export default {
  name: 'App',
  components: {
    HeaderControl
  },
  data: function () {
    return {
      n,
      height: 0,
      width: 0,
      x: 0,
      y: 0,
      availableNotes: noteLetterArray,
      availableScales: Object.keys(scaleDefinitions),
      availableOctaves: [2, 3, 4, 5, 6, 7, 8, 9],
      selectedStartNote: 'E',
      selectedScaleName: 'Major pentatonic scale',
      selectedFloorOctave: 4,
      selectedCeilingOctave: 6,
      foregrounds: [
        {
          src: GardenGates,
          alt: 'A blackened sillhouette of wrought iron gates'
        }
      ]
    }
  },
  computed: {
    currentScale: function () {
      const scaleDefinition = scaleDefinitions[this.selectedScaleName].integerNotation

      console.log(scaleDefinition)
      return g(
        this.selectedStartNote,
        scaleDefinition,
        this.selectedFloorOctave,
        this.selectedCeilingOctave
      )
    }
  },
  created () {
    window.addEventListener('resize', this.resize)
    this.saveWindowSize()
  },
  unmounted () {
    window.removeEventListener('resize', this.resize)
  },
  methods: {
    onChangePreset (event) {
      this.selectedScalePreset = event
    },
    onChangeScale (event) {
      this.selectedScaleName = event
    },
    onChangeStartNote (event) {
      this.selectedStartNote = event
    },
    onChangeFloorOctave (event) {
      this.selectedFloorOctave = event
    },
    onChangeCeilingOctave (event) {
      this.selectedCeilingOctave = event
    },
    resize (event) {
      this.saveWindowSize()
    },
    beepOnClick (event) {
      this.x = event.clientX
      this.y = event.clientY

      const freq = this.currentScale[(this.x + this.y) % this.currentScale.length]
      console.log(freq)

      const myBeep = new Pizzicato.Sound({
        source: 'wave',
        options: {
          release: 0.1,
          frequency: freq
        }
      })

      var pingPongDelay = new Pizzicato.Effects.PingPongDelay({
        feedback: 0.3,
        time: 0.2,
        mix: 0.68
      })
      myBeep.addEffect(pingPongDelay)
      myBeep.play()
      setTimeout(function () {
        myBeep.stop()
      }, 500)
      this.changeBackgroundColor(this.x, this.y)
    },
    saveWindowSize () {
      this.height = window.innerHeight
      this.width = window.innerWidth
      console.log(`height: ${this.height}`)
      console.log(`width: ${this.width}`)
    },
    changeBackgroundColor () {
      var r = this.normalize(this.x, 255)
      var g = this.normalize(this.y, 255)
      var b = this.normalize(this.x + this.y, 255)

      document.body.style.backgroundColor = 'rgb(' + [r, g, b].join(',') + ')'
    },
    normalize (v, n) {
      return v % n
    }
  }
}
</script>

<style>
body,
html,
.full-width {
  height: 100%;
  width: 100%;
}
body {
  margin: 0;
}
</style>
