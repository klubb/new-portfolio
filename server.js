require('dotenv').config()
const express = require('express'),
app = express(),
{ SERVER_PORT } = process.env 

app.use(express.static(`${__dirname}`))

app.listen(SERVER_PORT, () => console.log(`Listening on PORT: ${SERVER_PORT} 🔥`))