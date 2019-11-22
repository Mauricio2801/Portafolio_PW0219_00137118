var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

let database = 'RegistroAPI';
let port = '27017';
let host = 'localhost';
let uri =  `mongodb://${host}:${port}/${database}`;

const connectDB = ()=>{
    mongoose.connect(uri,{useNewUrlParser:true})
        .then(()=>{console.log("La conexion fue exitosa")})
        .catch(()=>{console.log("WRONG")})
}

module.exports ={
    connectDB,
}