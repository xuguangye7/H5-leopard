const express = require('express');
const pool = require('./pg');
const app = express.Router();
const showdata = require('./showdata')
// let selsql = 'select * from manager';
// let inssql = 'INSERT into manager(id,username,name,password,sex,work,phone,email) VALUES($1,$2,$3,$4,$5,$6,$7,$8)';
//管理员信息页面接口
app.get('/',(req,res)=>{
    let  sql = 'SELECT * FROM essay';
    showdata(res,sql);
});
app.get('/delete',(req,res)=>{
    var data = [];
    for(let i in req.query){
        data.push(req.query[i]);
    }
    pool.query('DELETE FROM essay WHERE sno=$1',data)
    .catch(err=>{
        console.error(err)
    });
})
module.exports=app;
