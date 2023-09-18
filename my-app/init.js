const mongoose = require("mongoose");
const Chats = require('./models/chat.js')
//? Database connection
   const connectDB = async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
    console.log("mongoDB connected!");
  };
  mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected!");
  });
  mongoose.connection.on("connected", () => {
    console.log("MongoDB connected!");
  });
  module.exports = connectDB


/*   //? insert data in wp database
let chat1 = new Chats({
    from:"ajay",
    to:"dev",
    msg:"Send me your exam sheets",
    created_at: new Date()
})
//chat1.save().then(res=>{console.log(res)}) */