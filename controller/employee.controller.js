const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");

const Employee = require('../models/employee.model');
const { json } = require('body-parser');

router.get('/',(req,res)=>{

    Employee.find().then(
        data=>res.send(data)
    )
    .catch(err=>{
        console.log(err)
    })

})
router.post('/',async (req,res)=>{
//     Employee.create(req,res)
//     .then(data=> res.send(data))
//     .catch(err=>console.log(err))
// }
try{
    // const newEmployee =new Employee(req.body);
    const newEmployee =new Employee({
        fullName:req.body.fullName,
        position:req.body.position,
        location:req.body.location,
        salary:req.body.salary
    });
    await newEmployee.save();
    res.status(200).json({message:'Message sent'})
    // const savedEmployee=await newEmployee.save()
    // res.json(savedEmployee)
}catch(error){
    res.statusCode(500).json({error:error.message});
}


})


module.exports= router;


// this is for api creat and response 