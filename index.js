const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const http= require('http') 


// //local import
const connectDb = require('./db')
const employeeRoutes= require('./controller/employee.controller')

app.use(bodyParser.json())
app.use('/api/employee',employeeRoutes)




http.createServer(function (req, res) {
    

    // res.end();
        res.end('server is started hai');
    }).listen(8080);




// connectDb().then(()=>{
//     console.log('Database is connected');
//     http.createServer(function (req, res) {
    

//         // res.end();
//             res.end('server is started hai');
//         }).listen(8080);
// })
// .catch(err=>console.log(err))

