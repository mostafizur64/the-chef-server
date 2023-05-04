const express = require('express');
const app = express();
const port =process.env.PORT || 5000;
var cors = require('cors')
const chefs = require('./data/chefs-list.json');
app.use(cors())
app.get('/',(req,res)=>{
    res.send('Chefs project is running!');
});
app.get('/chef',(req,res)=>{
    res.send(chefs)
})
app.get('/chef/:id',(req,res)=>{
   const id = req.params.id;
   const selectedChef= chefs.find(n=>n.id===id);
   res.send(selectedChef);
})
app.listen(port,()=>{
    console.log(`the chefs project port is ${port}`);
})