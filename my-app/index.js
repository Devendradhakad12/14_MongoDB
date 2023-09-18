const express = require("express");
const app = express();
const Chats = require('./models/chat.js')
const connectDB = require("./init.js")

//? method override setup
const methodoverrid = require("method-override")
app.use(methodoverrid("_method"))

//? view setup
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//? styling setup
app.use(express.static(path.join(__dirname,"public")))

//? routes

//* get chats
app.get("/" , async (req,res) =>{
  const chats = await Chats.find({})
  res.render("index.ejs",{chats})
})

//* create new chat's
app.get("/chats/new" , async (req,res) =>{
  res.render("new.ejs")
})
app.post("/chats" , async (req,res) =>{
try {
  let {from,to,msg} = req.body;
  let newChat = new Chats({
   from,to,msg,created_at : new Date()
  })
  await newChat.save()
   res.redirect("/")
   
} catch (error) {
  res.status(400).json(error)
  console.log(error)
}
})

//* Edit chats
app.get("/chats/:id/edit" , async (req,res) =>{
  let id = req.params.id;
  let chat = await Chats.findById(id)
  res.render("edit.ejs",{chat})
})
app.put("/chats/:id" , async (req,res) =>{
  let id = req.params.id
  let {msg} = req.body;
  try {
   await Chats.findByIdAndUpdate(id,{msg},{runValidators:true,new:true})
     res.redirect("/")
     
  } catch (error) {
    res.status(400).json(error)
    console.log(error)
  }
  })

//? listen app
app.listen(8080, () => {
  connectDB();
  console.log("Server is Listning on port http://localhost:8080");
});
