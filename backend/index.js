const { json } = require('body-parser');
const express = require('express');
const { default: mongoose } = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 1000;

const url = process.env.DB_URL;

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

mongoose.connect(url).then(()=> console.log("Db connection established")).catch((err)=> console.log(err));

const details = new mongoose.Schema({
    asset_title:{
        type: String,
        required: true
    },
    file_type:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    }
})

const asset = mongoose.model('asset', details);

app.post('/addAsset', async(req, res)=>{
    const {assetTitle, fileType, date}= req.body;
    const newAsset = new asset({
        asset_title: assetTitle,
        file_type: fileType,
        date: date
    });
    await newAsset.save();
    return res.status(200).send({"status":"success", "message" :"Asset add Successfully!"});
});

app.get('/asset', async(req, res)=>{
    const assets = await asset.find({});
    res.json(assets);
    // return res.status(200).send({"status": "success", "assets": `${assets}`});
});

app.listen(port, function(){
    console.log('Server is running on port '+ port);
});