const express = require('express');
const axios = require('axios').default;

const app = express()
const PORT = process.env.PORT || 5000
const delay = 600000

function start() {
    setTimeout(async () => {
        const response = await axios.get("https://vsekinopoisk.onrender.com/").then(r => r).catch(console.log)
        console.log("r1: ", response?.status)
        const response2 = await axios.get("https://bushkabybot.onrender.com").then(r => r).catch(console.log)
        console.log("r2: ", response2?.status)
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
