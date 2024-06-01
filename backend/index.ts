import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { createTodo, completeTodo } from "./types";
import { validateInput } from "./validateInput";
import { todo } from "./schema/todo";

dotenv.config();
const PORT = process.env.PORT || 3000;
const connectionUrl = process.env.MONGODB_URL;

const app = express();
app.use(express.json());
app.use(cors());

app.post('/todo', async (req,res) => {
    // Validate input
    if(!validateInput(createTodo, req.body)) {
        return res.status(400).json({msg: "Input is invalid"})
    }

    // Store in database
    try{
        await todo.create({
            title: req.body.title,
            description: req.body.description,
            completed: false
        })

        return res.json({
            "msg": "Todo created"
        })
    }catch(e) {
        return res.status(500).json({
            "msg": "Server is down"
        })
    }
});

app.get('/todos', async (req,res) => {
    try{
        const todos = await todo.find({});

        return res.json({
            todos
        })
    }catch(e) {
        return res.status(500).json({
            "msg": "Server is down"
        })
    }
});

app.put('/completed', async (req,res) => {
    // Validate input
    if(!validateInput(completeTodo, req.body)) {
        return res.status(400).json({msg: "Input is invalid"})
    }

    // Update db
    try{
        await todo.findByIdAndUpdate(req.body.id, {
            completed: true  
        });

        res.json({
            msg: "Todo marked as completed"
        })
    }catch(e) {
        return res.status(500).json({
            "msg": "Server is down"
        })
    }
});

app.listen(PORT, async () => {
    try{
        await mongoose.connect(connectionUrl as string);
        console.log(`Server started on PORT : ${PORT} and connected to mongodb`);
    }catch(e) {
        console.log(e);
    }
    
})