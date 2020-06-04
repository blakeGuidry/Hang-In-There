const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/hangboard', {useNewUrlParser: true})
  .then(() => {
    console.log('Connected to Mongo')
  })
  .catch(err => {
    console.error('Error connecting to Mongo')
  });

const sessionSchema = mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  jug: {
    time: Number,
    weight: Number
  },
  imr: {
    time: Number,
    weight: Number
  },
  medEdge: {
    time: Number,
    weight: Number
  },
  leftWidePinch: {
    time: Number,
    weight: Number
  },
  rightWidePinch: {
    time: Number,
    weight: Number
  },
  mr: {
    time: Number,
    weight: Number
  },
  lgOpen: {
    time: Number,
    weight: Number
  },
  leftMedPinch: {
    time: Number,
    weight: Number
  },
  rightMedPinch: {
    time: Number,
    weight: Number
  },
  sloper: {
    time: Number,
    weight: Number
  },
  mrp: {
    time: Number,
    weight: Number
  }
})

const bestSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  }
})

const session = mongoose.model('session', sessionSchema);
const best = mongoose.model('best', bestSchema);

module.exports = { session, best };