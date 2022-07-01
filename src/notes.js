const notes = [
  {
    noteName: 'C',
    octave: '0',
    frequencyHz: '16.351',
    wavelengthM: '20.812m',
    comment: 'MIDI note # 12'
  },
  {
    noteName: 'C#/Db',
    octave: '0',
    frequencyHz: '17.324',
    wavelengthM: '19.643m',
    comment: ''
  },
  {
    noteName: 'D',
    octave: '0',
    frequencyHz: '18.354',
    wavelengthM: '18.54m',
    comment: ''
  },
  {
    noteName: 'D#/Eb',
    octave: '0',
    frequencyHz: '19.445',
    wavelengthM: '17.5m',
    comment: ''
  },
  {
    noteName: 'E',
    octave: '0',
    frequencyHz: '20.601',
    wavelengthM: '16.518m',
    comment: ''
  },
  {
    noteName: 'F',
    octave: '0',
    frequencyHz: '21.827',
    wavelengthM: '15.59m',
    comment: ''
  },
  {
    noteName: 'F#/Gb',
    octave: '0',
    frequencyHz: '23.124',
    wavelengthM: '14.716m',
    comment: ''
  },
  {
    noteName: 'G',
    octave: '0',
    frequencyHz: '24.499',
    wavelengthM: '13.89m',
    comment: ''
  },
  {
    noteName: 'G#/Ab',
    octave: '0',
    frequencyHz: '25.956',
    wavelengthM: '13.11m',
    comment: ''
  },
  {
    noteName: 'A',
    octave: '0',
    frequencyHz: '27.5',
    wavelengthM: '12.374m',
    comment: 'Lowest Note of Piano'
  },
  {
    noteName: 'A#/Bb',
    octave: '0',
    frequencyHz: '29.135',
    wavelengthM: '11.68m',
    comment: ''
  },
  {
    noteName: 'B',
    octave: '0',
    frequencyHz: '30.868',
    wavelengthM: '11.024m',
    comment: 'Lowest Note of 5 string bass'
  },
  {
    noteName: 'C',
    octave: '1',
    frequencyHz: '32.703',
    wavelengthM: '10.405m',
    comment: 'Lowest Note of double bass with C extension'
  },
  {
    noteName: 'C#/Db',
    octave: '1',
    frequencyHz: '34.648',
    wavelengthM: '9.821m',
    comment: ''
  },
  {
    noteName: 'D',
    octave: '1',
    frequencyHz: '36.708',
    wavelengthM: '9.27m',
    comment: ''
  },
  {
    noteName: 'D#/Eb',
    octave: '1',
    frequencyHz: '38.891',
    wavelengthM: '8.75m',
    comment: ''
  },
  {
    noteName: 'E',
    octave: '1',
    frequencyHz: '41.203',
    wavelengthM: '8.259m',
    comment: 'Lowest Note of Bass'
  },
  {
    noteName: 'F',
    octave: '1',
    frequencyHz: '43.654',
    wavelengthM: '7.795m',
    comment: ''
  },
  {
    noteName: 'F#/Gb',
    octave: '1',
    frequencyHz: '46.249',
    wavelengthM: '7.358m',
    comment: ''
  },
  {
    noteName: 'G',
    octave: '1',
    frequencyHz: '48.999',
    wavelengthM: '6.945m',
    comment: ''
  },
  {
    noteName: 'G#/Ab',
    octave: '1',
    frequencyHz: '51.913',
    wavelengthM: '6.555m',
    comment: ''
  },
  {
    noteName: 'A',
    octave: '1',
    frequencyHz: '55',
    wavelengthM: '6.187m',
    comment: ''
  },
  {
    noteName: 'A#/Bb',
    octave: '1',
    frequencyHz: '58.27',
    wavelengthM: '5.84m',
    comment: ''
  },
  {
    noteName: 'B',
    octave: '1',
    frequencyHz: '61.735',
    wavelengthM: '5.512m',
    comment: ''
  },
  {
    noteName: 'C',
    octave: '2',
    frequencyHz: '65.406',
    wavelengthM: '5.203m',
    comment: ''
  },
  {
    noteName: 'C#/Db',
    octave: '2',
    frequencyHz: '69.296',
    wavelengthM: '4.911m',
    comment: ''
  },
  {
    noteName: 'D',
    octave: '2',
    frequencyHz: '73.416',
    wavelengthM: '4.635m',
    comment: ''
  },
  {
    noteName: 'D#/Eb',
    octave: '2',
    frequencyHz: '77.782',
    wavelengthM: '4.375m',
    comment: ''
  },
  {
    noteName: 'E',
    octave: '2',
    frequencyHz: '82.407',
    wavelengthM: '4.129m',
    comment: 'Lowest Note of Guitar'
  },
  {
    noteName: 'F',
    octave: '2',
    frequencyHz: '87.307',
    wavelengthM: '3.898m',
    comment: ''
  },
  {
    noteName: 'F#/Gb',
    octave: '2',
    frequencyHz: '92.499',
    wavelengthM: '3.679m',
    comment: ''
  },
  {
    noteName: 'G',
    octave: '2',
    frequencyHz: '97.999',
    wavelengthM: '3.472m',
    comment: ''
  },
  {
    noteName: 'G#/Ab',
    octave: '2',
    frequencyHz: '103.826',
    wavelengthM: '3.278m',
    comment: ''
  },
  {
    noteName: 'A',
    octave: '2',
    frequencyHz: '110',
    wavelengthM: '3.094m',
    comment: ''
  },
  {
    noteName: 'A#/Bb',
    octave: '2',
    frequencyHz: '116.541',
    wavelengthM: '2.92m',
    comment: ''
  },
  {
    noteName: 'B',
    octave: '2',
    frequencyHz: '123.471',
    wavelengthM: '2.756m',
    comment: ''
  },
  {
    noteName: 'C',
    octave: '3',
    frequencyHz: '130.813',
    wavelengthM: '2.601m',
    comment: ''
  },
  {
    noteName: 'C#/Db',
    octave: '3',
    frequencyHz: '138.591',
    wavelengthM: '2.455m',
    comment: ''
  },
  {
    noteName: 'D',
    octave: '3',
    frequencyHz: '146.832',
    wavelengthM: '2.318m',
    comment: ''
  },
  {
    noteName: 'D#/Eb',
    octave: '3',
    frequencyHz: '155.563',
    wavelengthM: '2.187m',
    comment: ''
  },
  {
    noteName: 'E',
    octave: '3',
    frequencyHz: '164.814',
    wavelengthM: '2.065m',
    comment: ''
  },
  {
    noteName: 'F',
    octave: '3',
    frequencyHz: '174.614',
    wavelengthM: '1.949m',
    comment: ''
  },
  {
    noteName: 'F#/Gb',
    octave: '3',
    frequencyHz: '184.997',
    wavelengthM: '1.839m',
    comment: ''
  },
  {
    noteName: 'G',
    octave: '3',
    frequencyHz: '195.998',
    wavelengthM: '1.736m',
    comment: 'Lowest note of violin'
  },
  {
    noteName: 'G#/Ab',
    octave: '3',
    frequencyHz: '207.652',
    wavelengthM: '1.639m',
    comment: ''
  },
  {
    noteName: 'A',
    octave: '3',
    frequencyHz: '220',
    wavelengthM: '1.547m',
    comment: ''
  },
  {
    noteName: 'A#/Bb',
    octave: '3',
    frequencyHz: '233.082',
    wavelengthM: '1.46m',
    comment: ''
  },
  {
    noteName: 'B',
    octave: '3',
    frequencyHz: '246.942',
    wavelengthM: '1.378m',
    comment: ''
  },
  {
    noteName: 'C',
    octave: '4',
    frequencyHz: '261.626',
    wavelengthM: '1.301m',
    comment: 'Middle C'
  },
  {
    noteName: 'C#/Db',
    octave: '4',
    frequencyHz: '277.183',
    wavelengthM: '1.228m',
    comment: ''
  },
  {
    noteName: 'D',
    octave: '4',
    frequencyHz: '293.665',
    wavelengthM: '1.159m',
    comment: ''
  },
  {
    noteName: 'D#/Eb',
    octave: '4',
    frequencyHz: '311.127',
    wavelengthM: '1.094m',
    comment: ''
  },
  {
    noteName: 'E',
    octave: '4',
    frequencyHz: '329.628',
    wavelengthM: '1.032m',
    comment: ''
  },
  {
    noteName: 'F',
    octave: '4',
    frequencyHz: '349.228',
    wavelengthM: '0.974m',
    comment: ''
  },
  {
    noteName: 'F#/Gb',
    octave: '4',
    frequencyHz: '369.994',
    wavelengthM: '0.92m',
    comment: ''
  },
  {
    noteName: 'G',
    octave: '4',
    frequencyHz: '391.995',
    wavelengthM: '0.868m',
    comment: ''
  },
  {
    noteName: 'G#/Ab',
    octave: '4',
    frequencyHz: '415.305',
    wavelengthM: '0.819m',
    comment: ''
  },
  {
    noteName: 'A',
    octave: '4',
    frequencyHz: '440',
    wavelengthM: '0.773m',
    comment: 'Tuning reference note'
  },
  {
    noteName: 'A#/Bb',
    octave: '4',
    frequencyHz: '466.164',
    wavelengthM: '0.73m',
    comment: ''
  },
  {
    noteName: 'B',
    octave: '4',
    frequencyHz: '493.883',
    wavelengthM: '0.689m',
    comment: ''
  },
  {
    noteName: 'C',
    octave: '5',
    frequencyHz: '523.251',
    wavelengthM: '0.65m',
    comment: ''
  },
  {
    noteName: 'C#/Db',
    octave: '5',
    frequencyHz: '554.365',
    wavelengthM: '0.614m',
    comment: ''
  },
  {
    noteName: 'D',
    octave: '5',
    frequencyHz: '587.33',
    wavelengthM: '0.579m',
    comment: ''
  },
  {
    noteName: 'D#/Eb',
    octave: '5',
    frequencyHz: '622.254',
    wavelengthM: '0.547m',
    comment: ''
  },
  {
    noteName: 'E',
    octave: '5',
    frequencyHz: '659.255',
    wavelengthM: '0.516m',
    comment: ''
  },
  {
    noteName: 'F',
    octave: '5',
    frequencyHz: '698.456',
    wavelengthM: '0.487m',
    comment: ''
  },
  {
    noteName: 'F#/Gb',
    octave: '5',
    frequencyHz: '739.989',
    wavelengthM: '0.46m',
    comment: ''
  },
  {
    noteName: 'G',
    octave: '5',
    frequencyHz: '783.991',
    wavelengthM: '0.434m',
    comment: ''
  },
  {
    noteName: 'G#/Ab',
    octave: '5',
    frequencyHz: '830.609',
    wavelengthM: '0.41m',
    comment: ''
  },
  {
    noteName: 'A',
    octave: '5',
    frequencyHz: '880',
    wavelengthM: '0.387m',
    comment: ''
  },
  {
    noteName: 'A#/Bb',
    octave: '5',
    frequencyHz: '932.328',
    wavelengthM: '0.365m',
    comment: ''
  },
  {
    noteName: 'B',
    octave: '5',
    frequencyHz: '987.767',
    wavelengthM: '0.345m',
    comment: ''
  },
  {
    noteName: 'C',
    octave: '6',
    frequencyHz: '1046.502',
    wavelengthM: '0.325m',
    comment: ''
  },
  {
    noteName: 'C#/Db',
    octave: '6',
    frequencyHz: '1108.731',
    wavelengthM: '0.307m',
    comment: ''
  },
  {
    noteName: 'D',
    octave: '6',
    frequencyHz: '1174.659',
    wavelengthM: '0.29m',
    comment: ''
  },
  {
    noteName: 'D#/Eb',
    octave: '6',
    frequencyHz: '1244.508',
    wavelengthM: '0.273m',
    comment: ''
  },
  {
    noteName: 'E',
    octave: '6',
    frequencyHz: '1318.51',
    wavelengthM: '0.258m',
    comment: ''
  },
  {
    noteName: 'F',
    octave: '6',
    frequencyHz: '1396.913',
    wavelengthM: '0.244m',
    comment: ''
  },
  {
    noteName: 'F#/Gb',
    octave: '6',
    frequencyHz: '1479.978',
    wavelengthM: '0.23m',
    comment: ''
  },
  {
    noteName: 'G',
    octave: '6',
    frequencyHz: '1567.982',
    wavelengthM: '0.217m',
    comment: ''
  },
  {
    noteName: 'G#/Ab',
    octave: '6',
    frequencyHz: '1661.219',
    wavelengthM: '0.205m',
    comment: ''
  },
  {
    noteName: 'A',
    octave: '6',
    frequencyHz: '1760',
    wavelengthM: '0.193m',
    comment: ''
  },
  {
    noteName: 'A#/Bb',
    octave: '6',
    frequencyHz: '1864.655',
    wavelengthM: '0.182m',
    comment: ''
  },
  {
    noteName: 'B',
    octave: '6',
    frequencyHz: '1975.533',
    wavelengthM: '0.172m',
    comment: ''
  },
  {
    noteName: 'C',
    octave: '7',
    frequencyHz: '2093.005',
    wavelengthM: '0.163m',
    comment: ''
  },
  {
    noteName: 'C#/Db',
    octave: '7',
    frequencyHz: '2217.461',
    wavelengthM: '0.153m',
    comment: ''
  },
  {
    noteName: 'D',
    octave: '7',
    frequencyHz: '2349.318',
    wavelengthM: '0.145m',
    comment: ''
  },
  {
    noteName: 'D#/Eb',
    octave: '7',
    frequencyHz: '2489.016',
    wavelengthM: '0.137m',
    comment: ''
  },
  {
    noteName: 'E',
    octave: '7',
    frequencyHz: '2637.021',
    wavelengthM: '0.129m',
    comment: ''
  },
  {
    noteName: 'F',
    octave: '7',
    frequencyHz: '2793.826',
    wavelengthM: '0.122m',
    comment: ''
  },
  {
    noteName: 'F#/Gb',
    octave: '7',
    frequencyHz: '2959.955',
    wavelengthM: '0.115m',
    comment: ''
  },
  {
    noteName: 'G',
    octave: '7',
    frequencyHz: '3135.964',
    wavelengthM: '0.109m',
    comment: ''
  },
  {
    noteName: 'G#/Ab',
    octave: '7',
    frequencyHz: '3322.438',
    wavelengthM: '0.102m',
    comment: ''
  },
  {
    noteName: 'A',
    octave: '7',
    frequencyHz: '3520',
    wavelengthM: '0.097m',
    comment: ''
  },
  {
    noteName: 'A#/Bb',
    octave: '7',
    frequencyHz: '3729.31',
    wavelengthM: '0.091m',
    comment: ''
  },
  {
    noteName: 'B',
    octave: '7',
    frequencyHz: '3951.066',
    wavelengthM: '0.086m',
    comment: ''
  },
  {
    noteName: 'C',
    octave: '8',
    frequencyHz: '4186.009',
    wavelengthM: '0.081m',
    comment: 'Highest note of piano'
  },
  {
    noteName: 'C#/Db',
    octave: '8',
    frequencyHz: '4434.922',
    wavelengthM: '0.077m',
    comment: ''
  },
  {
    noteName: 'D',
    octave: '8',
    frequencyHz: '4698.636',
    wavelengthM: '0.072m',
    comment: ''
  },
  {
    noteName: 'D#/Eb',
    octave: '8',
    frequencyHz: '4978.032',
    wavelengthM: '0.068m',
    comment: ''
  },
  {
    noteName: 'E',
    octave: '8',
    frequencyHz: '5274.042',
    wavelengthM: '0.065m',
    comment: ''
  },
  {
    noteName: 'F',
    octave: '8',
    frequencyHz: '5587.652',
    wavelengthM: '0.061m',
    comment: ''
  },
  {
    noteName: 'F#/Gb',
    octave: '8',
    frequencyHz: '5919.91',
    wavelengthM: '0.057m',
    comment: ''
  },
  {
    noteName: 'G',
    octave: '8',
    frequencyHz: '6271.928',
    wavelengthM: '0.054m',
    comment: ''
  },
  {
    noteName: 'G#/Ab',
    octave: '8',
    frequencyHz: '6644.876',
    wavelengthM: '0.051m',
    comment: ''
  },
  {
    noteName: 'A',
    octave: '8',
    frequencyHz: '7040',
    wavelengthM: '0.048m',
    comment: ''
  },
  {
    noteName: 'A#/Bb',
    octave: '8',
    frequencyHz: '7458.62',
    wavelengthM: '0.046m',
    comment: ''
  },
  {
    noteName: 'B',
    octave: '8',
    frequencyHz: '7902.132',
    wavelengthM: '0.043m',
    comment: ''
  },
  {
    noteName: 'C',
    octave: '9',
    frequencyHz: '8372.018',
    wavelengthM: '0.041m',
    comment: ''
  },
  {
    noteName: 'C#/Db',
    octave: '9',
    frequencyHz: '8869.844',
    wavelengthM: '0.038m',
    comment: ''
  },
  {
    noteName: 'D',
    octave: '9',
    frequencyHz: '9397.272',
    wavelengthM: '0.036m',
    comment: ''
  },
  {
    noteName: 'D#/Eb',
    octave: '9',
    frequencyHz: '9956.064',
    wavelengthM: '0.034m',
    comment: ''
  },
  {
    noteName: 'E',
    octave: '9',
    frequencyHz: '10548.084',
    wavelengthM: '0.032m',
    comment: ''
  },
  {
    noteName: 'F',
    octave: '9',
    frequencyHz: '11175.304',
    wavelengthM: '0.03m',
    comment: ''
  },
  {
    noteName: 'F#/Gb',
    octave: '9',
    frequencyHz: '11839.82',
    wavelengthM: '0.029m',
    comment: ''
  },
  {
    noteName: 'G',
    octave: '9',
    frequencyHz: '12543.856',
    wavelengthM: '0.027m',
    comment: ''
  },
  {
    noteName: 'G#/Ab',
    octave: '9',
    frequencyHz: '13289.752',
    wavelengthM: '0.026m',
    comment: ''
  },
  {
    noteName: 'A',
    octave: '9',
    frequencyHz: '14080',
    wavelengthM: '0.024m',
    comment: ''
  },
  {
    noteName: 'A#/Bb',
    octave: '9',
    frequencyHz: '14917.24',
    wavelengthM: '0.023m',
    comment: ''
  },
  {
    noteName: 'B',
    octave: '9',
    frequencyHz: '15804.264',
    wavelengthM: '0.022m',
    comment: ''
  }
]

export const nameAndOctaveToFreqMap = notes.reduce((acc, note) => {
  const freqToSave = parseFloat(note.frequencyHz)

  acc[`${note.noteName}${note.octave}`] = freqToSave
  return acc
}, {})

export const getFrequencyForNames = (...names) => {
  return names.map(name => nameAndOctaveToFreqMap[name])
}

export const getOctaveFreqArray = (floor, ceiling, ...names) => {
  const namesWithOctaves = []

  for (let octave = floor; octave <= ceiling; octave++) {
    const scaleOctave = names.map(name => {
      return `${name}${octave}`
    })
    namesWithOctaves.push(...scaleOctave)
  }
  return getFrequencyForNames(...namesWithOctaves)
}

export const generateScale = (startNote, integerNotationArray, floor, ceiling) => {
  const loopPoint = noteLetterArray.length - 1 // should be 11
  const startPoint = noteLetterArray.indexOf(startNote) // if given A, should b 0. If G, 10

  if (startPoint === -1) return [] // it's not a note we know about, so return

  const noteNamesForScale = integerNotationArray.map(step => {
    const targetIndex = step + startPoint // if given A, then a step of 5, should be D. Step should be 0 indexed.
    let actualIndex = targetIndex % loopPoint
    if (targetIndex > loopPoint) {
      actualIndex = actualIndex - 1
    }

    const result = noteLetterArray[actualIndex]

    console.log({
      step,
      startPoint,
      loopPoint,
      targetIndex,
      actualIndex,
      result
    })

    return result
  })

  return getOctaveFreqArray(floor, ceiling, ...noteNamesForScale)
}

export const noteLetterArray = [
  'A',
  'A#/Bb',
  'B',
  'C',
  'C#/Db',
  'D',
  'D#/Eb',
  'E',
  'F',
  'F#/Gb',
  'G',
  'G#/Ab'
]

export const scaleDefinitions = {
  'Acoustic scale': {
    name: 'Acoustic scale',
    integerNotation: [0, 2, 4, 6, 7, 9, 10]
  },
  'Aeolian mode or natural minor scale': {
    name: 'Aeolian mode or natural minor scale',
    integerNotation: [0, 2, 3, 5, 7, 8, 10]
  },
  'Algerian scale': {
    name: 'Algerian scale',
    integerNotation: [0, 2, 3, 6, 7, 9, 11, 12, 14, 15, 17]
  },
  'Altered scale or Super Locrian scale': {
    name: 'Altered scale or Super Locrian scale',
    integerNotation: [0, 1, 3, 4, 6, 8, 10]
  },
  'Augmented scale': {
    name: 'Augmented scale',
    integerNotation: [0, 3, 4, 7, 8, 11]
  },
  'Bebop dominant scale': {
    name: 'Bebop dominant scale',
    integerNotation: [0, 2, 4, 5, 7, 9, 10, 11]
  },
  'Blues scale': {
    name: 'Blues scale',
    integerNotation: [0, 3, 5, 6, 7, 10]
  },
  'Chromatic scale': {
    name: 'Chromatic scale',
    integerNotation: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  },
  'Dorian mode': {
    name: 'Dorian mode',
    integerNotation: [0, 2, 3, 5, 7, 9, 10]
  },
  'Double harmonic scale': {
    name: 'Double harmonic scale',
    integerNotation: [0, 1, 4, 5, 7, 8, 11]
  },
  'Enigmatic scale': {
    name: 'Enigmatic scale',
    integerNotation: [0, 1, 4, 6, 8, 10, 11]
  },
  'Flamenco mode': {
    name: 'Flamenco mode',
    integerNotation: [0, 1, 4, 5, 7, 8, 11]
  },
  '"Gypsy" scale': {
    name: '"Gypsy" scale',
    integerNotation: [0, 2, 3, 6, 7, 8, 10]
  },
  'Half diminished scale': {
    name: 'Half diminished scale',
    integerNotation: [0, 2, 3, 5, 6, 8, 10]
  },
  'Harmonic major scale': {
    name: 'Harmonic major scale',
    integerNotation: [0, 2, 4, 5, 7, 8, 11]
  },
  'Harmonic minor scale': {
    name: 'Harmonic minor scale',
    integerNotation: [0, 2, 3, 5, 7, 8, 11]
  },
  'Hirajoshi scale': {
    name: 'Hirajoshi scale',
    integerNotation: [0, 4, 6, 7, 11]
  },
  'Hungarian "Gypsy" scale/Hungarian minor scale': {
    name: 'Hungarian "Gypsy" scale/Hungarian minor scale',
    integerNotation: [0, 2, 3, 6, 7, 8, 11]
  },
  'Hungarian major scale': {
    name: 'Hungarian major scale',
    integerNotation: [0, 3, 4, 6, 7, 9, 10]
  },
  'In scale': {
    name: 'In scale',
    integerNotation: [0, 1, 5, 7, 8]
  },
  'Insen scale': {
    name: 'Insen scale',
    integerNotation: [0, 1, 5, 7, 10]
  },
  'Istrian scale': {
    name: 'Istrian scale',
    integerNotation: [0, 1, 3, 4, 6, 7]
  },
  'Iwato scale': {
    name: 'Iwato scale',
    integerNotation: [0, 1, 5, 6, 10]
  },
  'Locrian mode': {
    name: 'Locrian mode',
    integerNotation: [0, 1, 3, 5, 6, 8, 10]
  },
  'Lydian augmented scale': {
    name: 'Lydian augmented scale',
    integerNotation: [0, 2, 4, 6, 8, 9, 11]
  },
  'Lydian mode': {
    name: 'Lydian mode',
    integerNotation: [0, 2, 4, 6, 7, 9, 11]
  },
  'Major scale / Ionian': {
    name: 'Ionian mode or major scale',
    integerNotation: [0, 2, 4, 5, 7, 9, 11]
  },
  'Major bebop scale': {
    name: 'Major bebop scale',
    integerNotation: [0, 2, 4, 5, 7, 8, 9, 11]
  },
  'Major Locrian scale': {
    name: 'Major Locrian scale',
    integerNotation: [0, 2, 4, 5, 6, 8, 10]
  },
  'Major pentatonic scale': {
    name: 'Major pentatonic scale',
    integerNotation: [0, 2, 4, 7, 9]
  },
  // Can't do the melodic minor right now because I don't have a concept of ascending or descending
  // 'Melodic minor scale': {
  //   name: 'Melodic minor scale',
  //   integerNotation: [0, 2, 3, 5, 7, 9, 11) (ascending) \n(12, 10, 8, 7, 5, 3, 2](descending)'
  // },
  'Melodic minor scale (ascending)': {
    name: 'Melodic minor scale (ascending)',
    integerNotation: [0, 2, 3, 5, 7, 9, 11]
  },
  'Minor pentatonic scale': {
    name: 'Minor pentatonic scale',
    integerNotation: [0, 3, 5, 7, 10]
  },
  'Mixolydian mode or Adonai malakh mode': {
    name: 'Mixolydian mode or Adonai malakh mode',
    integerNotation: [0, 2, 4, 5, 7, 9, 10]
  },
  'Neapolitan major scale': {
    name: 'Neapolitan major scale',
    integerNotation: [0, 1, 3, 5, 7, 9, 11]
  },
  'Neapolitan minor scale': {
    name: 'Neapolitan minor scale',
    integerNotation: [0, 1, 3, 5, 7, 8, 11]
  },
  // 'Octatonic scale': {
  //   name: 'Octatonic scale',
  //   integerNotation: [0, 2, 3, 5, 6, 8, 9, 11) \n(0, 1, 3, 4, 6, 7, 9, 10]
  // },
  'Persian scale': {
    name: 'Persian scale',
    integerNotation: [0, 1, 4, 5, 6, 8, 11]
  },
  'Phrygian dominant scale': {
    name: 'Phrygian dominant scale',
    integerNotation: [0, 1, 4, 5, 7, 8, 10]
  },
  'Phrygian mode': {
    name: 'Phrygian mode',
    integerNotation: [0, 1, 3, 5, 7, 8, 10]
  },
  'Prometheus scale': {
    name: 'Prometheus scale',
    integerNotation: [0, 2, 4, 6, 9, 10]
  },
  // Can't do quarter tones here
  // 'Quarter tone scale': {
  //   name: 'Quarter tone scale',
  //   integerNotation: [0, 1 / 2, 1, 3 / 2, 2, 5 / 2, \n3, 7 / 2, 4, 9 / 2, 5, 11 / 2, \n6, 13 / 2, 7, 1]2, 8, 17/2,\n9,19/2, 10, 21/2,11,23/2) '
  // },
  'Scale of harmonics': {
    name: 'Scale of harmonics',
    integerNotation: [0, 3, 4, 5, 7, 9]
  },
  'Tritone scale': {
    name: 'Tritone scale',
    integerNotation: [0, 1, 4, 6, 7, 10]
  },
  'Two-semitone tritone scale': {
    name: 'Two-semitone tritone scale',
    integerNotation: [0, 1, 2, 6, 7, 8]
  },
  'Ukrainian Dorian scale': {
    name: 'Ukrainian Dorian scale',
    integerNotation: [0, 2, 3, 6, 7, 9, 10]
  },
  'Vietnamese scale of harmonics': {
    name: 'Vietnamese scale of harmonics',
    integerNotation: [0, 5 / 2, 3, 4, 5, 7]
  },
  'Whole tone scale': {
    name: 'Whole tone scale',
    integerNotation: [0, 2, 4, 6, 8, 10]
  },
  'Yo scale': {
    name: 'Yo scale',
    integerNotation: [0, 3, 5, 7, 10]
  }
}

export default notes
