const express = require('express');
const axios = require('axios').default;

const app = express()
const PORT = process.env.PORT || 5000
const delay = 60000

function start() {
    setInterval(() => {
        axios.get("https://vsekinopoisk.onrender.com/")
    }, delay)    
}

app.get("/", (req, res) => {
    res.end()
})

app.listen(PORT, () => {
    console.log(`Server start no port ${PORT}`);
    start()
})