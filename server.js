const express = require('express');
const axios = require('axios').default;

const app = express()
const PORT = process.env.PORT || 5000
const delay = 600000

function start() {
    setTimeout(async () => {
       await axios.get("https://vsekinopoisk.onrender.com/")
       start() 
    }, delay)
        

}

app.get("/", (req, res) => {
    res.end()
})

app.listen(PORT, () => {
    console.log(`Server start no port ${PORT}`);
    start()
})
