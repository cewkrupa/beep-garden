<template>
  <div
   class="full-width background"
   @click.prevent="beepOnClick"
   >
    <h1 id="title">Beep Garden</h1>
    <img id="foreground" :src="foregrounds[0].src" :alt="foregrounds[0].alt" :height="height" :width="width" />
  </div>
</template>

<script>
import GardenGates from './assets/garden-gates-entrance.png'
import Pizzicato from 'pizzicato'

export default {
  name: 'App',
  data: function () {
    return {
      height: 0,
      width: 0,
      x: 0,
      y: 0,
      gMinorPentatonic: [98, 116.54, 130.81, 146.83, 174.61, 196, 233.08, 261.63, 293.66, 349.23, 392, 466.16, 523.25, 587.33, 698.46, 783.99, 932.33, 1046.5, 1174.66, 1396.91, 1567.98],
      gMajorPentatonic: [98, 110, 123.47, 146.83, 164.81, 196, 220, 246.94, 293.66, 329.63, 392, 440, 493.88, 587.33, 659.25, 783.99, 880, 987.77, 1174.66, 1318.51, 1567.98],
      foregrounds: [
        {
          src: GardenGates,
          alt: 'A blackened sillhouette of wrought iron gates'
        }
      ]
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
    resize (event) {
      this.saveWindowSize()
    },
    beepOnClick (event) {
      this.x = event.clientX
      this.y = event.clientY

      const myBeep = new Pizzicato.Sound({
        source: 'wave',
        options: {
          release: 0.1,
          frequency: this.gMinorPentatonic[(this.x + this.y) % this.gMinorPentatonic.length]
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
#title {
  text-align: center;
  position: fixed;
  top: 3em;
  margin: auto auto;
  width: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-family: "Dosis", sans-serif;
}
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
