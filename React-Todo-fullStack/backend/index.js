const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());


app.get('/todos',(req,res)=>{
    res.json({
        msg : 'Fetch todos here'
    })
}) 

//Will use zod to post todos on db - Format check
app.post('/todo',addTodo,(req,res)=>{
    res.json({
        msg : 'Add Todos here'
    })
})

// Check id - use ZOD 
app.put('/completed',updateTodo,(req,res)=>{
    res.json({
        msg : 'Update Todos here'
    })
})


app.listen(PORT,(req,res)=>{
    res.send(`Live on port - ${PORT}`)
})