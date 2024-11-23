// 1.importing
const express = require("express")

// 2.initialize
const app = new express()
app.use(express.json());

const dbArray = [
    {name: "Tiya", age: 14 },
    {name: "Maya", age: 34 },
];

// 3.api creation

app.get('/trial',(req,res)=>{
    res.send(" Trial Message from the server")
})

app.get('/',(req,res)=>{
    res.send("Message from the server")
})

app.get('/path',(req,res)=>{
    res.send(dbArray)
})

app.post('/add',(req,res)=>{
    console.log(req.body)
    dbArray.push(req.body)
    res.send("data added");
})

// update method
app.put("/edit",(req,res)=>{
dbArray.splice(1,1,req.body);
res.send("updated successfully!!");
});

// delete method
app.delete("/remove",(req,res)=>{
    dbArray.pop();
    res.send("deleted successfully!!")
})




// 4.por
app.listen(8080,()=>{
    console.log("port is running")
})
