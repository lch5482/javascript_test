var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var app = express()
var apiRouter = require('./routes/apiRouter')


app.set('views', path.join(__dirname+'/views'))

app.set('view engine','ejs')

//bodyparser를 이용해 json파일 처리
app.use(bodyParser.json())
//인코딩 잘하게 해줌
app.use(bodyParser.urlencoded({extended:false}))

app.use('/',apiRouter)
// app.use('/',(req, res)=>{

// }))

//get방식으로 라우팅처리 
app.get('/', function(request,response){
    console.log(request.body)
    response.render('index')
})

//linsten(포트, url, backlog, callback)
app.listen(8080,function(){
    console.log("Server is Starting at http://localhost:8080")
})