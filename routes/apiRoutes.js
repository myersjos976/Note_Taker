const path = require("path");
const router = require("express").Router();

// GET request for notes
app.get('/api/db', (req, res) => {
    console.info(`GET /api/db`);
    res.status(200).json(db);
  });
  
  // GET a single note
  app.get('/db/db.json/:title', (req, res) => {
    if (req.params.title) {
      console.info(`${req.method} request received to get a single a note`);
      const noteTitle = req.params.title;
      fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
        } 
        else {
          // Convert string into JSON object
          const parsedNotes = JSON.parse(data);
          for (let i = 0; i < parsedNotes.length; i++)
          {
            const currentNote = parsedNotes[i];
            if (currentNote.title === noteTitle) {
              res.json(currentNote);
              return;
            }
          }
          res.status(404).send('Note not found');
        }
      });
    } 
    else {
      res.status(400).send('Note title not provided');
    }
  });
  
  // POST request to add a note
  app.post('/api/db', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to add a note`);
  
    // Destructuring assignment for the items in req.body
    const {title, text} = req.body;
  
    // If all the required properties are present
    if (title && text) {
      // Variable for the object we will save
      const newNote = {title, text};
  
      // Obtain existing notes
      fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
        } 
        else {
          // Convert string into JSON object
          const parsedNotes = JSON.parse(data);
  
          // Add a new note
          parsedNotes.push(newNote);
  
          // Write updated notes back to the file
          fs.writeFile(
            './db/db.json',
            JSON.stringify(parsedNotes, null, 4),
            (writeErr) =>
              writeErr
                ? console.error(writeErr)
                : console.info('Successfully updated notes!')
          );
        }
      });
  
      const response = {
        status: 'success',
        body: newNote,
      };
  
      console.log(response);
      res.status(201).json(response);
    } else {
      res.status(500).json('Error in posting note');
    }
  });
  
  // POST request to delete a note
  app.get('/db/db.json/:title', (req, res) => {
    if (req.params.title) {
      console.info(`${req.method} request received to delete a single a note`);
      const noteTitle = req.params.title;
      fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
        } 
        else {
          // Convert string into JSON object
          const parsedNotes = JSON.parse(data);
          for (let i = 0; i < parsedNotes.length; i++)
          {
            const currentNote = parsedNotes[i];
            if (currentNote.title === noteTitle) {
              parsedNotes[i].splice;
              // Write updated notes back to the file
              fs.writeFile(
                './db/db.json',
                JSON.stringify(parsedNotes, null, 4),
                (writeErr) =>
                  writeErr
                    ? console.error(writeErr)
                    : console.info('Successfully updated notes!')
              );
            }
          }
          res.status(404).send('Note not found');
        }
      });
    } 
    else {
      res.status(400).send('Note title not provided');
    }
  });

  module.exports = router;