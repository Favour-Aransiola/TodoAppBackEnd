import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import todoRoute from './routes/todos_route';

const app = express();
app.use(bodyParser.json());
app.use(todoRoute);

const port = 3000;


const main = async () => {
    await mongoose.connect('mongodb+srv://taiye:taiye2000@serverlessinstance0.4jcsv.mongodb.net/practice?retryWrites=true&w=majority');
    console.log('Server Started')
    app.listen(port)
}
main();