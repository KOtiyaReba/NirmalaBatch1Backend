var mongoose = require('mongoose');

// mongoose.connect("url").then(()=>{}).catch(()=>{})
mongoose.
connect(process.env.mongodb_url)
.then(()=>{
    console.log("CONNECTED TO DB")
})
.catch((err)=>{console.log(err)})

