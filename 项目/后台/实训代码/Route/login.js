const express = require('express');
const pool = require('./pg');
const app = express.Router();
const showdata = require('./showdata')
// let selsql = 'select * from manager';
// let inssql = 'INSERT into manager(id,username,name,password,sex,work,phone,email) VALUES($1,$2,$3,$4,$5,$6,$7,$8)';
//管理员信息页面接口
app.get('/',(req,res)=>{
    let  sql = 'SELECT * FROM manager';
    showdata(res,sql);
});
//管理员登录
let  sql = 'SELECT * FROM manager';
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
                console.log(results.rows[i].nicheng);
                console.log(results.rows[i].sphone);
                // console.log(data.userid);
                // console.log(user.pwd);
                if(results.rows[i].nicheng == jsonstr.user && results.rows[i].sphone == jsonstr.password){
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
//管理员删除
app.get('/delete',(req,res)=>{
    var data = [];
    for(let i in req.query){
        data.push(req.query[i]);
    }
    pool.query('DELETE FROM manager WHERE sphone=$1',data)
    .catch(err=>{
        console.error(err)
    });
})

//管理员添加
var isregister = false;
var db={};

let selsql = 'SELECT * FROM manager';
let inssql = 'INSERT into manager(nicheng,sname,qqcom,sphone,ssex) VALUES($1,$2,$3,$4,$5)';
let hphone;
app.post('/register',(req,res)=>{
    var data = '';
    req.on('data',(chunk)=>{
      data += chunk;
    });
    req.on('end',()=>{
        var jsonstr=JSON.parse(data);
        var arr = [];
        for(let i in jsonstr){
            arr.push(jsonstr[i]);
        }
        hphone=arr[0]
        // console.log(user);
        pool.query(selsql, (error,results,fields)=> {
        //error,results,fields:错误对象，json数组，数据信息数组
            console.log(results);
            // console.log(results[1].userid);
            isregister = true;
            if (error) console.log(error.message);
            for(let i=0;i<results.rows.length;i++){
                console.log(results.rows[i].sphone);
                console.log(results.rows[i].sclass);
                if(results.rows[i].sphone === hphone){
                    isregister = false;
                    break;
                }
            }
            if(!isregister){
                console.log("Landing failed");
                db = { state: 200, message: '注册失败', content: isregister };
            }else{
                console.log("Landing successfully");
                db = { state: 200, message: '注册成功', content: isregister };
                console.log(jsonstr)
                // user = {
                //     nicheng:jsonstr.nicheng,
                //     sname:'用户'+jsonstr.phoneNumber,
                //     sphone:jsonstr.phoneNumber,
                //     sclass:'7',
                //     spwd:jsonstr.pws
                // }
                // console.log(user)
                pool.query(inssql,arr);
            };
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.json(db);
        });
    });
});
module.exports=app;
