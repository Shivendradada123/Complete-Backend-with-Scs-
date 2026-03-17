const express = require('express');

const app = express();



app.get('/', (req,res,next)=>{
res.send('Hello Shivendra')

});

app.get('/me', (req,res,next)=>{
res.send('Hello Kanishka')

});

app.listen(3000);