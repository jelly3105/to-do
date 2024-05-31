import express from "express";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.post('/todo', (req,res) => {});

app.get('/todos', (req,res) => {});

app.put('/completed', (req,res) => {});

app.listen(PORT, () => {
    console.log(`Server started on PORT : ${PORT}`);
    
})