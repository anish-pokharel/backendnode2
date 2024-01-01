const mongoose = require("mongoose");
const mongodb = require("mongodb");

mongoose.set("strictQuery", true);



// const dburl = "mongodb+srv://anish:anish@cluster0.xuf0z19.mongodb.net/employee_db"


//  module.exports=()=>{
//     return mongoose.connect(dburl)
//  }

mongoose
.connect("mongodb+srv://anish:anish@cluster0.xuf0z19.mongodb.net/employee_db", {
   useNewUrlParser: true, //handle the parsing of the MongoDB connection string used in Mongodb Node.js Driver
   useUnifiedTopology: true, //topology engine used in Mongodb Node.js Driver
   family: 4,
 })
 .then(() => {
   console.log("Connected to the database");
 })
 .catch((error) => {
   console.error("Error connecting to the database: ", error);
 });

module.exports = mongoose;