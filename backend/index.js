const express = require('express');
const connect = require('./configs/db');

const cors = require('cors');
const usercontroller=require('./controllers/user.controller.js')
const studentcontroller=require('./controllers/student.controller.js')

const app = express();
app.use(cors())

app.use(express.json())
app.use("",usercontroller)
app.use("",studentcontroller)

app.listen(process.env.PORT || 8080,async ()=>{
   
    try{
    await connect()
    
        console.log("8080")
    }catch(e){
        console.log(e.message)
    }
})