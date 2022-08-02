const express= require('express')
const router= express.Router()
const Student=require('../models/student.model.js')


router.post("/Studentdetails",async (req,res)=>{

    try{
        const student = await Student.create(req.body)
        return res.status(201).send(student)
    }catch(e){
        res.status(400).send(e.message)
    }
})
router.get("/Studentdetails",async (req,res)=>{

    try{
        const student = await Student.find().lean().exec()
        return res.status(201).send(student)
    }catch(e){
        res.status(400).send(e.message)
    }
})
router.get("/getfilter",async (req, res) => {

    try {
        var sortObject = {};
        var stype = req.query.sorttype;
        var sdir = req.query.sortdirection;
        sortObject[stype] = sdir;
        // console.log(sortObject)
        const studentcontrollers = await Student.find(sortObject).lean().exec()
        return res.status(200).send(studentcontrollers);

    } catch (err) {
        return res.status(500).send(err)
    }
})

module.exports=router
