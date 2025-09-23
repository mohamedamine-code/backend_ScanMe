const mongoose = require('mongoose');
const ComponentSchema = new mongoose.Schema({
  _id:String,
  Society_Name: String,
  Number_of_Floors: String,
  Technical_Room_Number: String,
  Cabinet_Number: String,
  Switcher: String,
  Port: String,
  State_Port: Boolean,
});  // force exact collection name

module.exports = mongoose.model('Component', ComponentSchema);