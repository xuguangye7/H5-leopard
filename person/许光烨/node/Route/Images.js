const express = require('express');
const pool = require('./pg');
const app = express.Router();
const showdata = require('./showdata');
const fs=require('fs');
let sql='select * from sqlstudent';

app.get('/img',(req,res)=>{
    let name=req.query.name;
    console.log(name);
    var file = '/home/guangye/minpapi/math/img/';
    console.log(file+name);
    res.sendFile(file+name);
})

module.exports=app;