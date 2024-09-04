// import express
const exp = require('constants')
const express = require('express')

const PORT = process.env.PORT || 3500

const app = express()

// static files
app.use(express.static('public'))

app.set("view engine","ejs")

app.get('/', (request, response) => {
    response.render("index")
})



// Listen to request
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})