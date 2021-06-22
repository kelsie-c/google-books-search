const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Book
            .find(req.query)
            .sort({ date: -1 })
            .then(bookModel => res.json(bookModel))
            .catch(err => res.status(400).json(err));
    },

    findById: function(req, res) {
        db.Book
            .findById(req.params.id)
            .then(bookModel => res.json(bookModel))
            .catch(err => res.status(400).json(err));
    },

    create: function(req, res) {
        db.Book
            .create(req.body)
            .then(bookModel => res.json(bookModel))
            .catch(err => res.status(400).json(err));
    },

    update: function(req, res) {
        db.Book
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(bookModel => res.json(bookModel))
            .catch(err => res.status(400).json(err));
    },

    delete: function(req, res) {
        db.Book
            .findById({ _id: req.params.id })
            .then(bookModel => bookModel.remove())
            .then(bookModel => res.json(bookModel))
            .catch(err => res.status(400).json(err));
    }
};