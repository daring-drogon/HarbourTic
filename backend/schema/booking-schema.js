const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const travelSchema = new Schema({
    bookingid: String,
    name: String,
    phone: String,
    date: String,
    time: String,
    from: String,
    destination: String,
    ferry_name: String
});

const Book = mongoose.model("Book", travelSchema);
module.exports.Book = Book;