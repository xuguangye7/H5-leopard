// const express = require('express');
// var formidable = require('formidable');
// const pool = require('./pg');
// const app = express.Router();
// const showdata = require('./showdata')
// // let selsql = 'select * from manager';
// // let inssql = 'INSERT into manager(id,username,name,password,sex,work,phone,email) VALUES($1,$2,$3,$4,$5,$6,$7,$8)';
// //管理员信息页面接口
// var uid,unicheng;
// app.get('/',(req,res)=>{
//     let  sql = 'SELECT * FROM sqlstudent';
//     showdata(res,sql);
// });
// let  sql = 'SELECT * FROM sqlstudent';
// var islogin = false;
// let isregister;
// app.post('/',(req,res)=>{
//     let user = {
//         userid:'',
//         pwd:''
//     }
//     var data = '';
//     req.on('data',(chunk)=>{
//       data += chunk;
//     });
//     req.on('end',()=>{
//         // console.log(data);
//         var jsonstr =JSON.parse(data);
//         console.log(jsonstr)
//         console.log(typeof(data))
//         // data = data.split('&');//转化为object
//         // console.log("1"+data);
//         // console.log("2"+data);
//         console.log(typeof(data))
//         // console.log(data);
//         // console.log(data);
//         // for(let i= 0 ;i<data.length;i++){
//         //     data[i]=data[i].split('=');
//         //     user[data[i][0]]=data[i][1];
//         // }
        
//         console.log('user',user);
//         pool.query(sql, (error,results,fields)=> {
//         //error,results,fields:错误对象，json数组，数据信息数组
//             console.log(results);
//             // console.log(results[1].userid);
//             islogin = false;
//             if (error) console.log(error.message);
//             for(let i=0;i<results.rows.length;i++){
//                 // console.log(results.rows[i].sname);
//                 // console.log(results.rows[i].spwd);
//                 // console.log(data.userid);
//                 // console.log(user.pwd);
//                 if(results.rows[i].sphone == jsonstr.user && results.rows[i].spwd == jsonstr.password){
//                     islogin = true;
//                     uid=results.rows[i].sphone;
//                     unicheng=results.rows[i].nicheng
//                     break;
//                 }
//             }
//             if(!islogin){
//                 console.log("Landing failed");
//                 db = { state: 200, message: '登陆失败', content: islogin };
//             }else{
//                 console.log("Landing successfully");
//                 db = { state: 200, message: '登陆成功', content: islogin };
//                 console.log('uid',uid);
//             };
//             res.setHeader('Access-Control-Allow-Origin', '*');
//             res.json(db);
//         });
//     });
// });

// //登录获取信息
// app.get('/get',(req,res)=>{
//     let  sql = `SELECT * FROM sqlstudent WHERE sphone='${uid}'`;
//     showdata(res,sql);
    
// })

// //修改密码和昵称
// let chsql="UPDATE sqlstudent SET spwd=$1 WHERE sphone=$2"
// let chsql1="UPDATE sqlstudent SET nicheng=$1 WHERE sphone=$2"
// app.post('/change',(req,res)=>{
//     let user = {
//         userid:'',
//         pwd:''
//     }
//     var data = '';
//     req.on('data',(chunk)=>{
//       data += chunk;
//     });
//     req.on('end',()=>{
//         // console.log(data);
//         var jsonstr =JSON.parse(data);
//         console.log('jsonstr',jsonstr);
//         pool.query(sql, (error,results,fields)=> {
//             console.log(results);
//             islogin = false;
//             if (error) console.log(error.message);
//             for(let i=0;i<results.rows.length;i++){
//                 if(results.rows[i].sphone==uid){
//                     var j=i;
//                     console.log(j);
//                     console.log('jsonstr.pws',jsonstr.pws);
//                     pool.query(chsql,[jsonstr.pws,uid]);
//                     pool.query(chsql1,[jsonstr.nicheng,uid]);
//                     break;
//                 }
//             }
//             if(islogin){
//                 console.log("Landing failed");
//                 db = { state: 200, message: '修改失败', content: islogin };
//             }else{
//                 console.log("Landing successfully");
//                 db = { state: 200, message: '修改成功', content: islogin };
//             };
//             res.setHeader('Access-Control-Allow-Origin', '*');
//             res.json(db);
//             // pool.query(chsql,[uid]);
//         });
//     });
// });

// //上传头像
// let selsql = 'SELECT * FROM sqlstudent';
// let updatesql = 'UPDATE sqlstudent SET sclass=$1 WHERE sphone=$2'
// let updatesql1 = 'UPDATE essay SET touxiang=$1 WHERE sphone=$2'
// app.post('/information',(req,res)=>{
//     console.log(12345)
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By",' 3.2.1');
//     res.header("Content-Type", "application/json;charset=utf-8");
//     console.log(12345)
//     var form = new formidable.IncomingForm();   //创建上传表单
//     form.encoding = 'utf-8';        //设置编辑
//     form.uploadDir = './img';     //设置上传目录
//     form.keepExtensions = true;     //保留后缀
//     form.maxFieldsSize = 2 * 1024 * 1024;   //文件大小
//     form.parse(req, function(err, fields, files) {
//         var arr =[];
//         console.log(fields);
//         console.log(files);
//         if (err) {
//           res.locals.error = err;
//         //   res.render('index', { title: TITLE });
//           return;
//         }
//         var extName = 'png';  //后缀名
//         switch (files.pic.type) {
//           case 'imagepeg':
//             extName = 'jpg';
//             break;
//           case 'image/jpeg':
//             extName = 'jpg';
//             break;
//           case 'image/png':
//             extName = 'png';
//             break;
//           case 'image/x-png':
//             extName = 'png';
//             break;
//         }
 
//         if(extName.length == 0){
//           res.locals.error = '只支持png和jpg格式图片';
//           res.render('index', { title: TITLE });
//           return;
//         }
//         //显示地址；
//         showUrl = files.pic.path;
//         console.log('showUrl',showUrl);
        
//         for(let i in fields){
//             arr.push(fields[i]);
//         }
//         arr.push(files.pic.path);
//         // arr.push(phone);
//         console.log(arr);
//         pool.query(selsql, (error,results,fields)=> {
//             isregister = false;
//             if (error) console.log(error.message);
//             for(let i=0;i<results.rows.length;i++){
//                 if(results.rows[i].sphone == uid){
//                     isregister = true;
//                     break;
//                 }
//             }
//             if(isregister){
//                 console.log("Modify successfully");
//                 db =  {state: 200, message: '修改成功', content: isregister }; 
//                 pool.query(updatesql,[files.pic.path,uid])
//                 pool.query(updatesql1,[files.pic.path,uid])
//                 .catch(err=>{
//                     console.error(err)
//                 }); 
//                 res.send(db);
//             }else{
//                 console.log("Modify failed");
//                 db = { state: 200, message: '修改失败', content: isregister }; 
//                 res.send(db);
//             };
//         })
//     });
// });

// app.get('/information',(req,res)=>{
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By",' 3.2.1');
//     res.header("Content-Type", "application/json;charset=utf-8");
//     // console.log(req.url);
//     if(isregister){
//         console.log("Modify successfully");
//         db =  {state: 200, message: '修改成功', content: isregister }; 
//         res.send(db);
//     }else{
//         console.log("Modify failed");
//         db = { state: 200, message: '修改失败', content: isregister }; 
//         res.send(db);
//     };
// })
// app.get('/images', function (req, res) {
//     let sel = `SELECT sclass FROM sqlstudent WHERE sphone='${uid}'`;
//     pool.query(sel, (error,result,fields)=> {
//         var file = '/home/guangye/minpapi/math/';
//         res.sendFile(file  + result.rows[0].sclass);
//     })
    
// })

// app.get('/delete',(req,res)=>{
//     var data = [];
//     for(let i in req.query){
//         data.push(req.query[i]);
//     }
//     pool.query('DELETE FROM sqlstudent WHERE sphone=$1',data)
//     .catch(err=>{
//         console.error(err)
//     });
// })
// module.exports=app;

const express = require('express');
var formidable = require('formidable');
const pool = require('./pg');
const app = express.Router();
const showdata = require('./showdata')
const fs=require('fs');
// let selsql = 'select * from manager';
// let inssql = 'INSERT into manager(id,username,name,password,sex,work,phone,email) VALUES($1,$2,$3,$4,$5,$6,$7,$8)';
//管理员信息页面接口
app.get('/',(req,res)=>{
    let  sql = 'SELECT * FROM sqlstudent';
    showdata(res,sql);
});
//登录
let  sql = 'SELECT * FROM sqlstudent';
let isregister;
var uid,nicheng;
app.post('/',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    console.log("sphone",req.query.sphone);
    var data = '';
    req.on('data',(chunk)=>{
      data += chunk;
    });
    req.on('end',()=>{
        // console.log(data);
        var jsonstr =JSON.parse(data);
        var arr = [];
        for(let i in jsonstr){
            arr.push(jsonstr[i])
        }
        uid=arr[0];
        pool.query(sql, (error,results,fields)=> {
        //error,results,fields:错误对象，json数组，数据信息数组
            console.log(results);
            // console.log(results[1].userid);
            isregister = false;
            if (error) console.log(error.message);
            for(let i=0;i<results.rows.length;i++){
                // console.log(results.rows[i].sname);
                // console.log(results.rows[i].spwd);
                // console.log(data.userid);
                // console.log(user.pwd);
                if(results.rows[i].sphone == arr[0] && results.rows[i].spwd ==arr[1]){
                    isregister = true;
                    break;
                }
            }
            if(isregister){
                let str;
                console.log("Landing successfully");
                pool.query(`select * from sqlstudent where sphone='${uid}'`, (error,results,fields)=> {
                    if (error) console.log(error.message);
                    //对象解析为json字符串// results = JSON.stringify(results);
                    str = results.rows;
                    console.log(str)
                    var data = JSON.stringify(str);
                    db =  {state: 200, message: isregister, content: data};  
                    res.send(db);
                });
            }else{
                console.log("Landing failed");
                db = { state: 200, message: isregister, content: isregister }; 
                res.send(db);
            };
        });
    });
});
app.get('/login',(req,res)=>{
    db = { state: 200, message: '登录成功', content: phone }; 
    res.send(db);
});

//修改密码和昵称
let chsql="UPDATE sqlstudent SET spwd=$1 WHERE sphone=$2"
let chsql1="UPDATE sqlstudent SET nicheng=$1 WHERE sphone=$2"
app.post('/change',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    console.log(req.query.sphone);
    var data = '';
    req.on('data',(chunk)=>{
      data += chunk;
    });
    req.on('end',()=>{
        // console.log(data);
        var jsonstr =JSON.parse(data);
        let Data = [];
        for(let i in jsonstr){
            Data.push(jsonstr[i])
        }
        console.log('jsonstr',jsonstr);
        pool.query(sql, (error,results,fields)=> {
            console.log(results);
            isregister = false;
            if (error) console.log(error.message);
            for(let i=0;i<results.rows.length;i++){
                if(results.rows[i].sphone==jsonstr.sphone){
                    isregister=true;
                    break;
                }
            }
            if(isregister){
                let updatesql = `UPDATE sqlstudent SET nicheng=$1,spwd=$2 WHERE sphone=$3`
                pool.query(updatesql,Data,()=>{
                    pool.query(`select * from sqlstudent where sphone='${jsonstr.sphone}'`, (error,results,fields)=> {
                        if (error) console.log(error.message);
                        //对象解析为json字符串// results = JSON.stringify(results);
                        str = results.rows;
                        console.log(str)
                        var data = JSON.stringify(str);
                        console.log(data);
                        db =  {state: 200, message: isregister, content: data};  
                        res.send(db);
                    })
                })
            }
        });
    });
});

//上传头像
let selsql = 'SELECT * FROM sqlstudent';
app.post('/information',(req,res)=>{
    console.log(12345)
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    var obj=''
    req.on('data',function(data){
        obj += data;//data就是传过来的数据
    });
    req.on('end',function(){
        var item = JSON.parse(obj);//解析
        var path = 'img/'+item.nicheng+'.jpg';
        let Data = [];
        for(let i in item){
            Data.push(item[i])
        }
        var base64 = item.pic.replace(/^data:image\/\w+;base64,/, "");
        var dataBuffer = new Buffer(base64, 'base64'); 
        fs.writeFile(path,dataBuffer,function(err){
            if(err){console.log(err);
            }else{console.log('写入成功！');}
        })
        pool.query(selsql, (error,results,fields)=> {
            isregister = false;
            if (error) console.log(error.message);
            for(let i=0;i<results.rows.length;i++){
                if(results.rows[i].sphone === item.sphone){
                    isregister = true;
                    break;
                }
            }
            if(isregister){
                let updatesql = `UPDATE sqlstudent SET sclass=$1 WHERE sphone=$2`;
                let updatesql1 = `UPDATE essay SET touxiang=$1 WHERE sphone=$2`
                pool.query(updatesql,[path,item.sphone],()=>{
                    pool.query(`select * from sqlstudent where sphone='${item.sphone}'`, (error,results,fields)=> {
                        if (error) console.log(error.message);
                        //对象解析为json字符串// results = JSON.stringify(results);
                        str = results.rows;
                        var data = JSON.stringify(str);
                        db =  {state: 200, message: isregister, content: data};  
                        res.send(db);
                    })
                })
                pool.query(updatesql1,[path,item.sphone])
            }
        })
    })
})
app.get('/images', function (req, res) {
    let sel = `SELECT sclass FROM sqlstudent WHERE sphone='${uid}'`;
    pool.query(sel, (error,result,fields)=> {
        var file = '/home/guangye/minpapi/math/';
        res.sendFile(file  + result.rows[0].sclass);
    })
    
})

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