const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log('Mongodb connected succesfully');
}).catch((err) => {
    console.log(err);
})

const app = express();

app.listen(3000, () => {
    console.log('server running at http://localhost:3000');
})