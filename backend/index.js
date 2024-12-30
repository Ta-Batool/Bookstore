const express = require('express')
const app = express()
const mongoose = require('mongoose');
require('dotenv').config()

const port = process.env.PORT || 5000;

async function main() {
    await mongoose.connect(process.env.DB_URL);
    app.use('/',( _req,res ) => {
        res.send("Book store server is running");
    });
  }

  main().then(()=> console.log("Mongodb connected successfully!")).catch(err => console.log(err));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })