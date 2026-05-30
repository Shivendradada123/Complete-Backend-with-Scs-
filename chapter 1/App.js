const express = require('express');

const app = express()


app.get('/', (req,res)=>{
res.send("hey Sc ")

})

app.get('sctech', (req,res)=>{
  res.send('hey Shivendra')
})




app.listen(3000);