


import mongoose from "mongoose";

export const connectDb = async () =>{
    await mongoose.connect('mongodb+srv://indrasena1827:Rama0799@todo.0ybkv.mongodb.net/todo')
    console.log("dbconnented");
}