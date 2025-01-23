const express = require('express');
const axios = require('axios');
const app = express();

// Enable CORS for all requests
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Endpoint to proxy requests
app.get('/proxy', async (req, res) => {
    const url = req.query.url;
    try {
        console.log(`Fetching URL: ${url}`);
        const response = await axios.get(url);
        res.send(response.data);
    } catch (error) {
        console.error("Error fetching the data:", error);
        res.status(500).send("Error fetching the data");
    }
});

// Start the proxy server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Proxy server is running on port 3000');
});
