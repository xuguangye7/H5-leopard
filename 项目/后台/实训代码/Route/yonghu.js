const express = require('express');
const pool = require('./pg');
const app = express.Router();
const showdata = require('./showdata')
// let selsql = 'select * from manager';
// let inssql = 'INSERT into manager(id,username,name,password,sex,work,phone,email) VALUES($1,$2,$3,$4,$5,$6,$7,$8)';
//管理员信息页面接口
app.get('/',(req,res)=>{
    let  sql = 'SELECT * FROM sqlstudent';
    showdata(res,sql);
});
let  sql = 'SELECT * FROM sqlstudent';
var islogin = false;
app.post('/',(req,res)=>{
    let user = {
        userid:'',
        pwd:''
    }
    var data = '';
    req.on('data',(chunk)=>{
      data += chunk;
    });
    req.on('end',()=>{
        // console.log(data);
        var jsonstr =JSON.parse(data);
        console.log(jsonstr)
        console.log(typeof(data))
        // data = data.split('&');//转化为object
        // console.log("1"+data);
        // console.log("2"+data);
        console.log(typeof(data))
        // console.log(data);
        // console.log(data);
        // for(let i= 0 ;i<data.length;i++){
        //     data[i]=data[i].split('=');
        //     user[data[i][0]]=data[i][1];
        // }
        
        console.log('user',user);
        pool.query(sql, (error,results,fields)=> {
        //error,results,fields:错误对象，json数组，数据信息数组
            console.log(results);
            // console.log(results[1].userid);
            islogin = false;
            if (error) console.log(error.message);
            for(let i=0;i<results.rows.length;i++){
                // console.log(results.rows[i].sname);
                // console.log(results.rows[i].spwd);
                // console.log(data.userid);
                // console.log(user.pwd);
                if(results.rows[i].sphone == jsonstr.user && results.rows[i].spwd == jsonstr.password){
                    islogin = true;
                    break;
                }
            }
            if(!islogin){
                console.log("Landing failed");
                db = { state: 200, message: '登陆失败', content: islogin };
            }else{
                console.log("Landing successfully");
                db = { state: 200, message: '登陆成功', content: islogin };
            };
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.json(db);
        });
    });
});

app.get('/delete',(req,res)=>{
        var data = [];
        for(let i in req.query){
            data.push(req.query[i]);
        }
        pool.query('DELETE FROM sqlstudent WHERE sphone=$1',data)
        .catch(err=>{
            console.error(err)
        });
    })
module.exports=app;