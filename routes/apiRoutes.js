const router = require('express').Router();
const express = require('express');
const dbTools = require('../db/dbTools');

router.get('/notes', (req, res) => {
  dbTools.getNote()
  .then((notes) =>{
    return res.json(notes);
  })
});

router.post('/notes', (req, res) => {
  dbTools.getNote()
  .then((notes) =>{
    return res.json(notes);
  })
});

router.delete('/notes/:id', (req, res) => {
  dbTools.getNote()
  .then((notes) =>{
    return res.json(notes);
  })
});

module.exports = router;