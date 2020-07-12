const express = require("express");
const database = require("./../db/index");
let expensesModel = database.expensesModel;
let app = express();

app.use(express.json());
// app.use(express.static(__dirname + '/../front-end/dist'));
// app.use(express.static("dist"))

    app.post("/expenses",(req,res)=>{
	const {text ,amount,createdAt}= req.body;
    let expensesDocument = new expensesModel({text: text , amount:amount , createdAt:createdAt});

    expensesDocument.save((err)=>{
     if(err){
        console.log(err);
        res.status(500).send(err);
     }else{
        res.status(201).send("Saved expenses !");
     }
});
});


// app.get("/expenses",(req,res) =>{
// expensesModel.find({})
//    .then((result) =>{
// 	res.send(result);
// }).catch(err =>{
// 	res.send(err);
// });
// });

// //search by spec :
// app.get("/expenses/:spec",(req , res) =>{
//     const specVal = req.params.spec;
//     expensesModel.find({spec: specVal}).then(result =>{
//     	res.send(result);
//     }).catch(err =>{
//     	res.send(err);
//     });
// });

//default port
var port = 4000; 
app.listen(port, ()=>{
	console.log(`app listen to port ${port}`);
});


