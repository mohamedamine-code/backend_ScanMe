const mongoose = require('mongoose');
const ComponentSchema = new mongoose.Schema({
  _id: String,
  name: String,
  type: String,
  quantity: Number,
  location: String,
  datasheet_url: String
}, { collection: 'Component' });  // force exact collection name

module.exports = mongoose.model('Component', ComponentSchema);