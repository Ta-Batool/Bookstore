const express = require('express')
const app = express()

const port = process.env.PORT || 5000;

//routes
app.use('/',( _req,res ) => {
    res.send("Book store server is running");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })