const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    _id: String,
    title: String,
    authors: Array,
    description: String,
    img: String,
    link: String,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;