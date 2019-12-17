const express = require('express');
const showdata = require('./showdata');
const router = express.Router();
const pool = require('./pg');

var isregister = false;
var db={};

let selsql = 'SELECT * FROM sqlstudent';
let inssql = 'INSERT into sqlstudent(nicheng,sname,qqcom,sphone,spwd,sclass) VALUES($1,$2,$3,$4,$5,$6)';
let hphone;
router.post('/',(req,res)=>{
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
module.exports = router;