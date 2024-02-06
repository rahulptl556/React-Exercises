const express = require('express');
const { addTodo, updateTodo } = require('./types');
const { todo } = require('./databse');
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());


app.get('/todos',async (req,res)=>{
    const todos = await todo.find();
    res.json({
        todos
    })
}) 

//Will use zod to post todos on db - Format check
app.post('/todo',async (req,res)=>{
    const addPayLoad = req.body;
    const parsed = addTodo.safeParse(addPayLoad);
    if(!parsed.success){
        res.status(411).json({
            msg : "Invalid Input"
        })
    }
    //If parsed -> push to mongoDB -> use await for db
    await todo.create({
        title : addPayLoad.title,
        description : addPayLoad.description,
        completed : false
    })

    res.json({
        msg : 'Todo added'
    })
})

// Check id - use ZOD 
app.put('/completed',(req,res)=>{
    const updatePayLoad = req.body;
    const parsed = updateTodo.safeParse(updatePayLoad);
    if(!parsed.success){
        res.status(411).json({
            msg : 'Invalid Input'
        })
        return;
    }

    todo.update({
        _id : req.body.id
    },{
        completed : true
    })

    res.json({
        msg : 'Todo marked as completed'
    })
})


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});