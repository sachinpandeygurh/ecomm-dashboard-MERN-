const express = require('express');

const app = express();

app.get('/',(req, res)=>{
    res.send('appis working')
})

app.listen(5000)