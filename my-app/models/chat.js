const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema({
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  msg: {
    type: String,
    maxLength:50
  },
  created_at: {
    type: Date,
    required: true,
  },
});

 const Chats = mongoose.model("Chats", ChatSchema);
 module.exports = Chats
