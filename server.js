var  exp1=require('express');
var app=exp1();
const PORT=process.env.PORT||4000;

app.use(function(req,res,next){
  if(req.headers['x-forwarded-proto'] === 'https'){
    res.redirect('http://'+req.hostname+req.url);
  }else{
     next();
  }
});
app.use(exp1.static('public'));
app.listen(PORT,function(){
  console.log('hello my first app is up on port'+PORT);
})
