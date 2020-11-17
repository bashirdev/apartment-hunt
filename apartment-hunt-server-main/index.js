require('dotenv').config();
const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const mongodb=require('mongodb')
const ObjectId = require('mongodb').ObjectId;
const MongoClient = require('mongodb').MongoClient;

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());


const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASS}@cluster0.hxlwa.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true  });
client.connect(err => {
  const collectionData = client.db("apartmentHunt").collection("booking")
const   adminCollection= client.db("apartmentHunt").collection("admin")
const   infoCollection=client.db("apartmentHunt").collection("info")

app.post('/admin', (req,res)=>{
    const email=req.body.email;
    adminCollection.insertOne({email})
    .then(result=>{
        res.send(result.insertedCount> 0)
    })
})

  app.get('/getData', (req,res)=>{
 collectionData.find({})
.toArray((err,documents)=>{
            res.send(documents)
        })
    });

 app.get('/getData/:id', (req,res)=>{
     collectionData.find({_id: ObjectId(req.params.id)})
     .toArray((err , documents)=>{
         res.send(documents[0])
     })
 });

app.post('/sendInfo', (req,res)=>{
    const name=req.body.name;
    const number=req.body.number;
    const email=req.body.email;
    const message=req.body.message;
    console.log(name);
    infoCollection.insertOne({name, number, email , message})
    .then(result=>{
        res.send(result.insertedCount > 0)
    })
})

});

const PORT=process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log('Server run on port 5000');
});
