const express = require('express');
var app = express();
const hbs = require('hbs');


hbs.registerPartials(__dirname+'/views/partials')
app.use(function (req,res,next) {
  res.render('maintenance')
});
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));

app.use(function(req,res,next){
  var now = new Date().toString();
  console.log(now+' '+req.method+'\n'+req.url);
  next();
});


hbs.registerHelper('getCurrentYear',function(){
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt',function(str){
  return str.toUpperCase();
});

app.get('/',function (req,res) {
  res.render('home',{pageTitle:'Home Pagessss',});

});

app.get('/about',function(req,res){
  res.render('about',{pageTitle:'About page',});

});

app.listen(process.env.PORT||3000,process.env.IP,function(){
  console.log('SERVER IS LITENING');
})
