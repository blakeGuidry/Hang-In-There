const { session, best } = require('./schema');

const save = (sesh, cb) => {
  let doc = new session(sesh);
  
  doc.save((err, results) => {
    if (err) {
      console.log('Error with save query');
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

const newBest = (cb) => {
  
}

const findBest = () => {
  
}

module.exports = {
  save,
  find
}