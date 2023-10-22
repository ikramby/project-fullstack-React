const express = require('express');
const cors =require('cors');
const port = 5000;
const app = express();
//uncomment to use mongodb
const db = require('./mongoDb')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true}));


const rout = require('./route/route')



app.use('/api/products',rout);





app.listen(port, ()=>{
console.log(`listening on ${port}`);
})