import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import path from 'path';



const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))
app.use(express.json());

try {
    mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log("connected to mongoDB");
} catch (e) {
    console.log(e);
}

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(process.env.PORT || 8000, () => {
    console.log(`Server started on port ${process.env.PORT || 8000}`);
});