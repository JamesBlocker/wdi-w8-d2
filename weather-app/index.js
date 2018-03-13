const   
    dotenv = require('dotenv').config(),
    express = require('express'),
    app = express(),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    axios = require('axios'),
    httpClient = axios.create(),
    PORT = 3000

const apiKey = process.env.API_KEY
console.log(apiKey)

//middleware
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(express.static(`${__dirname}/public`))

app.get('/', (req,res) => {
    res.sendFile(`${__dirname}/public/index.html`)
})

app.get('/weather/:city', (req, res) => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&units=imperial&appid=${apiKey}`

    const options = { method: 'get', url: apiUrl }
    httpClient(options).then((apiResponse) => {
        res.json(apiResponse.data)
    })
})

app.get("/test/:message", (req, res) => {
    console.log(req.params.message)
    res.json({ message: "Message recieved!"})
})

app.listen(PORT, (err) => {
    console.log(err || `Server running on ${PORT}.`)
})