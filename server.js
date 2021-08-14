const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
app.use(express.json());
app.use(cors());

const todos = [];

app.get("/todos", function(req,res){
    res.send({todos});
})

app.post("/todos",function(req,res){
    const todo = req.body.todo
    console.log(todo);
    todos.push(todo)
    res.send({todo});
})

app.listen(port,()=>{
    console.log(`todo app is listinging on port${port}`);
})