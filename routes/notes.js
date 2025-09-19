const express = require('express');
const router = express.Router();
const Note = require('../models/Note');
const auth = require('../middleware/auth');

// Get all notes for user
router.get('/', auth, async (req, res) => {
    const notes = await Note.find({ userId: req.user.id });
    res.json(notes);
});

// Create note
router.post('/', auth, async (req, res) => {
    const note = new Note({ ...req.body, userId: req.user.id });
    await note.save();
    res.status(201).json(note);
});

// Update note
router.put('/:id', auth, async (req, res) => {
    const note = await Note.findOneAndUpdate(
        { _id: req.params.id, userId: req.user.id },
        req.body,
        { new: true }
    );
    res.json(note);
});

// Delete note
router.delete('/:id', auth, async (req, res) => {
    await Note.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    res.json({ message: 'Note deleted' });
});

module.exports = router;
