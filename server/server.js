const express = require('express');
const app = express();
const PORT = 8000;
const db = require('./database/queries');

app.use(express.json());

app.get('/stats', (req, res) => {
  console.log(req.body)
  const hang = req.body.hang;
  db.find(hang, (err, stats) => {
    if (err) {
      res.status(500).send('Error retreiving stats');
    } else {
      res.send(stats);
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

app.listen(PORT, () => {
  console.log(`Hanging at port ${PORT}`);
})