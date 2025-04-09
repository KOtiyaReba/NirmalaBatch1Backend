var express = require('express');
require('./db');
var userRoutes = require('./routes/userRoute')
var app = express();

app.use(express.json());
var port = 4000;
// changes
app.use('/api',userRoutes)
app.listen(port,(req,res)=>{
    console.log(`Server is up and running in ${port}`)
})
