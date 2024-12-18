const mongoose = require('mongoose');


mongoose.set('strictQuery', false);

mongoose.connect('mongodb+srv://aprilash04:Krishna.mourya8995@cluster0.t9b5v.mongodb.net/')
.then(()=> console.log("Connected mongo db"))
.catch((e) => console.log(e));