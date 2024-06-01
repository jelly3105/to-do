import mongoose from "mongoose";
const connectionUrl = process.env.MONGODB_URL;

await mongoose.connect(connectionUrl as string);

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}