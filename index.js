const express= require('express');
const app = express();

// app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.send("hellow");
});

//  app.get("/",(req,res)=>{
//         res.sendFile(__dirname+"/public/index.html");
//  });

const PORT=80;
app.listen(PORT,()=>{
    console.log(`Corriendo en el puerto ${PORT}`);
});
