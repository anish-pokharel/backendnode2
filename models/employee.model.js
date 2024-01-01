const { Decimal128, Int32 } = require('mongodb');
const mongoose = require('mongoose')

const Employees= mongoose.model('Employees',{
    fullName:{ type:String},
    position: {type:String},
    location: {type:String},
    salary: {type:Number},
},{collection:'employees'})

module.exports=Employees;