const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/hangboard', {useNewUrlParser: true})
  .then(() => {
    console.log('Connected to Mongo')
  })
  .catch(err => {
    console.error('Error connecting to Mongo')
  });

const sessionSchema = mongoose.Schema({
  Date: {
    type: Date,
    required: true
  },
  Jug: {
    Time: Number,
    Weight: Number
  },
  IMR: {
    Time: Number,
    Weight: Number
  },
  'Medium Edge': {
    Time: Number,
    Weight: Number
  },
  'Wide Pinch (L)': {
    Time: Number,
    Weight: Number
  },
  'Wide Pinch (R)': {
    Time: Number,
    Weight: Number
  },
  MR: {
    Time: Number,
    Weight: Number
  },
  'Lg Open-Hand': {
    Time: Number,
    Weight: Number
  },
  'Medium Pinch (L)': {
    Time: Number,
    Weight: Number
  },
  'Medium Pinch (R)': {
    Time: Number,
    Weight: Number
  },
  Sloper: {
    Time: Number,
    Weight: Number
  },
  MRP: {
    Time: Number,
    Weight: Number
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