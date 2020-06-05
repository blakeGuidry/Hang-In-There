const express = require('express');
const app = express();
const PORT = 8000;
const db = require('./database/queries');

app.use(express.json());

app.get('/stats', (req, res) => {
  const hang = req.body.hang;
  db.find(hang, (err, stats) => {
    if (err) {
      res.status(500).send('Error retreiving stats');
    } else {
      res.send(stats);
    }
  })
})

app.get('/bests', (req, res) => {
  db.findBest((err, bests) => {
    if (err) {
      res.status(500).send('Error retreiving bests');
    } else {
      res.send(bests);
    }
  })
})

app.get('/prev', (req, res) => {
  db.findMostRecent((err, prev) => {
    if (err) {
      res.status(500).send('Error retreiving prev');
    } else {
      res.send(prev);
    }
  })
})

app.post('/stats', (req, res) => {
  const session = req.body;
  db.save(session, (err, stats) => {
    if (err) {
      res.status(500).send('Error saving stats');
    } else {
      res.send(stats);
    }
  })
})

app.put('/best', (req, res) => {
  const hang = req.body;
  db.newBest(hang, (err, best) => {
    if (err) {
      res.send(500).send('Error updating best');
    } else {
      res.send(best);
    }
  })
})

app.listen(PORT, () => {
  console.log(`Hanging at port ${PORT}`);
})