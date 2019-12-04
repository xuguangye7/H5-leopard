const express = require('express');
var app = express();
var api = require('./api-test');
var login = require('./login');
var essay = require('./essay');
app.use('/login',login);
app.use('/api',api);
app.use('/essay',essay);
app.listen(8080);