import express from "express";
import { createTodo, completeTodo } from "./types";
import { validateInput } from "./validateInput";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.post('/todo', (req,res) => {
    // Validate input
    if(!validateInput(createTodo, req.body)) {
        return res.status(400).json({msg: "Input is invalid"})
    }

    // Store in database
    const title = req.body.title;
    const description = req.body.description;
});

app.get('/todos', (req,res) => {});

app.put('/completed', (req,res) => {
    // Validate input
    if(!validateInput(completeTodo, req.body)) {
        return res.status(400).json({msg: "Input is invalid"})
    }

    // Update db
});

app.listen(PORT, () => {
    console.log(`Server started on PORT : ${PORT}`);
    
})