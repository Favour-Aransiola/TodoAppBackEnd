import mongoose, { Schema } from 'mongoose';

const todoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        required: true
    }
});

export default mongoose.model('Todo', todoSchema)