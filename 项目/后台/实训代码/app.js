const express = require('express');
var app = express();
var api = require('./Route/yonghu');
var login = require('./Route/login');
var essay = require('./Route/essay');
var register=require('./Route/register')
app.use('/login',login);
app.use('/api',api);
app.use('/essay',essay);
app.use('/register',register)
app.listen(8080);