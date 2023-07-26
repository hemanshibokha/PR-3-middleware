const express = require('express');
let port = 8080;
const app = express();
const path = require('path');
const checkpost = (req,res,next)=> {
    let value = req.query.value; //(value = 2477);
    if(value == 2477){
        return next();
    }
        return res.render('index');
}
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'/public')));
app.get('/',(req,res)=>{
    return res.render('index');
})
app.get('/chart',checkpost,(req,res)=> {
    return res.render('chart'); 
})
app.get('/form',checkpost,(req,res)=> {
    return res.render('form'); 
})
app.get('/table',checkpost,(req,res)=> {
    return res.render('table'); 
})
app.get('/ui',checkpost,(req,res)=> {
    return res.render('ui'); 
})
app.set(checkpost);
app.listen(port,(error)=>{
    if(error){
        console.log("not Done");
    }
    else{
        console.log("Done "+ port);
    }
})