import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';

dotenv.config();
const app = express();

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log('Mongodb connected succesfully');
}).catch((err) => {
    console.log(err);
});


app.use('/api/user', userRoutes);


app.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});