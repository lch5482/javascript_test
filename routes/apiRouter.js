var express = require('express')
var router = express.Router()

router.get('/main', (req, res)=>{
    res.render('index')
})

router.get('/Daejeon',(req, res)=>{
    res.render('main',{data:"잘들어온 데이터"})
})

module.exports = router;
