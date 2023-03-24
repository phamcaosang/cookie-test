const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
// Enable CORS for all origins and ports
console.log(process.env.FE_URL)
app.use(cors({ credentials: true, origin: process.env.FE_URL }));

app.post('/', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 100);
    res.cookie('randomNumber', randomNumber, { maxAge: 2 * 60000, httpOnly: true }); // (2 minutes)
    res.status(200).json(`"Hello from backend with cookie is ${randomNumber}`);
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});