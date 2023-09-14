const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/collage");
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required:true
  },
  email: {
    type: String,
    required:true,
    unique:[true,"please enter unique email"]
  },
  age: {
    type: Number,
    required:true
  },
});
const User = mongoose.model("User",UserSchema)

const user1 = new User({name:"tony",email:"tony@gmail.com",age:"17"})
//user1.save().then(()=>{console.log("user created")}).catch((err)=>console.log(err))

const users = User.find({age:{$lt:18}})
 users.then((res)=>console.log(res)).catch((err)=>console.log(err))

 //User.updateOne({_id:"6502a8a36fa6f2b82ae57267"},{age:16}).then((res)=>console.log(res)).catch((err)=>console.log(err))
// User.updateOne({age:{$gt:18}},{age:16}).then((res)=>console.log(res)).catch((err)=>console.log(err))

User.findOneAndUpdate({name:"mahak"},{age:20},{new:true}).then((res)=>console.log(res)).catch((err)=>console.log(err))
User.findOneAndDelete({_id:"6502a52d1366d20a63d7a052"}).then((res)=>console.log(res)).catch((err)=>console.log(err))

  
 
connectToDB(); 
  