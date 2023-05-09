const path = require("path");
const router = require("express").Router();

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

// Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);
module.exports = router;