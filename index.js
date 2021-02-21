
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const  app = express();
app.use(cookieParser());
var user='';
var key = '';
app.get('/',(req,res) =>{
    if (req.cookies.user == 'hONBMRfJJl1YyLptN8oRzg=='){
        res.sendFile(path.join(__dirname,'public','sol.html'));
        user = 'admin';
        res.cookie(user,key,{httpOnly: true});
    }
    else{
        user = 'user';
        key = 'lWITX3UWWjh505HkmkptIQ==';
        res.cookie(user,key,{httpOnly: true});
        res.sendFile(path.join(__dirname,'index.html'));
    }

});
app.get('/robots.txt',(req,res) =>{
    res.sendFile(path.join(__dirname,'public','robots.txt'));
});
app.use(express.static(path.join()));
var PORT = process.env.PORT || 8080;
app.listen(PORT,() => console.log(`Server started at ${PORT}`));