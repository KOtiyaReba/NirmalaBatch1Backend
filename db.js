var mongoose = require('mongoose');

// mongoose.connect("url").then(()=>{}).catch(()=>{})
mongoose.
connect("mongodb+srv://user1:SHGxhrdz7VZVWYx6@cluster0.1qg89hd.mongodb.net/nIRbATCH1?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("CONNECTED TO DB")
})
.catch((err)=>{console.log(err)})

