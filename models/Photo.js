// Using Node.js `require()`
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* // Connnect DB
mongoose.connect('mongodb://127.0.0.1/ndog-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}); */

// Create schema
const PhotoSchema = new Schema({
  title: String,
  description: String,
  image: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Photo = mongoose.model('Photo', PhotoSchema);

module.exports = Photo;
