const { session, best } = require('./schema');

const save = (sesh, cb) => {
  let doc = new session(sesh);
  
  doc.save((err, results) => {
    if (err) {
      console.error(err, 'Error with save query');
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
}
  
const find = (hang, cb) => {
  session.find({}, hang, (err, results) => {
    if (err) {
      console.log('Error with find query');
      cb(err, null);
    } else {
      cb(null, results);
    }
  })
}

const findMostRecent = (cb) => {
  session.find({}).sort({Date: -1}).limit(1).exec((err, results) => {
    if (err) {
      console.log('Error with findMostRecent query');
      cb(err, null);
    } else {
      cb(null, results);
    }
  })
}

const newBest = (hang, cb) => {
  best.findOneAndUpdate({name: hang.name}, hang, {upsert: true}, (err, results) => {
    if (err) {
      console.log('Error with newBest query');
      cb(err, null);
    } else {
      cb(null, results);
    }
  })
}

const findBest = (cb) => {
  best.find({}, (err, results) => {
    if (err) {
      console.log('Error with findBest query');
      cb(err, null);
    } else {
      cb(null, results);
    }
  })
}

module.exports = {
  save,
  find,
  newBest,
  findBest,
  findMostRecent
}