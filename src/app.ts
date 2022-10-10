import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import todoRoute from './routes/todos_route';
import * as dotenv from 'dotenv';

const app = express();
app.use(bodyParser.json());
app.use(todoRoute);
dotenv.config();

const port = 3000;


const main = async () => {
    const DATABASE_URI = process.env.DATABASE_URI as string;
    await mongoose.connect(DATABASE_URI);
    console.log('Server Started')
    app.listen(port)
}
main();