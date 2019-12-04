const express = require('express');
const {connectPg} = require('./connectpg');
const pg = require('pg');
const app = express();

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
// 接口
app.get('/', function (req, res) {
    connectPg().then(response => {
        res.json(response);
    })
})
app.get('/delete',(req,res)=>{
    var data = [];
    for(let i in req.query){
        data.push(req.query[i]);
    }
    const pgConfig = {
        user: 'ningyuan',           // 数据库用户名
        database: 'sqlmath',       // 数据库
        password: 'ningyuan123',       // 数据库密码
        host: '127.0.0.1',      // 数据库所在IP
        port: '5432'                // 连接端口
    };
    const pool = new pg.Pool(pgConfig);
    console.log(data);
    pool.query('DELETE FROM sqlstudent WHERE sphone=$1',data)
    .catch(err=>{
        console.error(err)
    });
})
// app.listen(8080, function () {
//     console.log(`接口已运行`)
// })
module.exports=app;
