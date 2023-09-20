// Create web server 
var express = require('express');
var router = express.Router();

// Import comments model
var Comments = require('../models/comments.js');

// GET all comments
router.get('/', function(req, res) {
    Comments.find({}, function(err, comments) {
        if (err) {
            console.log(err);
            res.status(500).send();
        } else {
            res.json(comments);
        }
    });
});

// POST a new comment
router.post('/', function(req, res) {
    var comment = new Comments({
        name: req.body.name,
        comment: req.body.comment
    });
    comment.save(function(err, comment) {
        if (err) {
            console.log(err);
            res.status(500).send();
        } else {
            res.json(comment);
        }
    });
});

// GET a specific comment
router.get('/:id', function(req, res) {
    Comments.findById(req.params.id, function(err, comment) {
        if (err) {
            console.log(err);
            res.status(500).send();
        } else {
            res.json(comment);
        }
    });
});

// PUT (update) a specific comment
router.put('/:id', function(req, res) {
    Comments.findById(req.params.id, function(err, comment) {
        if (err) {
            console.log(err);
            res.status(500).send();
        } else {
            comment.name = req.body.name;
            comment.comment = req.body.comment;
            comment.save(function(err, comment) {
                if (err) {
                    console.log(err);
                    res.status(500).send();
                } else {
                    res.json(comment);
                }
            });
        }
    });
});

// DELETE a specific comment
router.delete('/:id', function(req, res) {
    Comments.findByIdAndRemove(req.params.id, function(err, comment) {
        if (err) {
            console.log(err);
            res.status(500).send();
        } else {
            res.json(comment);
        }
    });
});

module.exports = router;