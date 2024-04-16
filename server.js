const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
const path = require('path');

// ...

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'form.html')); // Replace 'form.html' with the name of your HTML file
});

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/ethnovision', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

const userSchema = new mongoose.Schema({
  name: String,
  feedback: String,
  favouritePlace: String
});

const User = mongoose.model('User', userSchema);

app.post('/post', (req, res) => {
  const newUser = new User({
    name: req.body.name,
    feedback: req.body.feedback,
    favouritePlace: req.body.dropdown
  });
  app.post('/post', (req, res) => {
    const { name, email, feedback } = req.body;
    const newUser = new User({
      name,  // This is where the name gets stored
      email,
      feedback
    });
  
    // ...
  });
  
  newUser.save()
    .then(item => res.send('item saved to database'))
    .catch(err => {
      res.status(400).send('unable to save to database');
    });
});

app.listen(port, () => console.log(`Server started on port ${port}`));
