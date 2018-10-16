const mongoose = require('./connection.js')
const Schema = mongoose.Schema

const ListItem = new Schema({
  title: String,
  description: String,
  url: String,
  completed: Boolean
})

module.exports = mongoose.model("ListItem", ListItem)
