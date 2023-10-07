const express = require("express");
require("dotenv").config();
const DatabaseConnection = require("./src/db/config");
const User = require('./src/models/user')
const Task = require('./src/models/tasks')
//const bodyParser = require('body-parser');
//const routers = require("./src/routes/indexRoute");
//const cors = require('cors')

const app = express();

//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json())
app.use(express.json())


//app.use(cors())
//app.use("/api/v1", routers);
 
DatabaseConnection.connectDB();
const PORT = process.env.PORT || 9000;

app.post('/users', async(req,res) => {
    const user = new User(req.body);
    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
    
})

app.get('/users', async(req,res) =>{
    try {
        const user = await User.find({})
        res.send(user)
    } catch (e) {
        res.status(500).send()
    }

})

app.get('/users/:id', async(req,res) => {
   const _id = req.params.id
   try {
       const user = await User.findById(_id)
       if (!user){
        return res.status(404).send()
     }
 
     res.send(user)
       
   } catch (e) {
    res.status(500).send() 
   }
})
app.post('/tasks', async(req,res) => {
    const task = new Task(req.body);
    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})
app.get('/tasks/', async(req,res) => {
    try {
        const task = await Task.find({})
        res.send(task)
    } catch (e) {
        res.status(500).send()
    }
})

app.get('/tasks/:id', async(req,res) =>{
    const _id =  req.params.id
    try {
        const task = await Task.findById(_id)
        if (!task){
            return res.status(404).send()
        }
        res.send(task)
    } catch (e) {
        res.status(500).send()
    }
})

app.listen(PORT, () => {
    console.log(`The server is runinnig at ${PORT}`);
})

module.exports = app;