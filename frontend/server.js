const express = require('express');
const axios = require('axios');
const app = express();

app.get('/', async (req, res) => {
  try {
    const response = await axios.get('http://backend-service:5000/api');
    res.send(`<h1>Frontend says:</h1><p>${response.data.message}</p>`);
  } catch (err) {
    res.send(`<h1>Error connecting to backend</h1>`);
  }
});

app.listen(3000, () => {
  console.log('Frontend running on port 3000');
});
