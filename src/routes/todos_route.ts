import { Router } from "express";
import mongoose from "mongoose";
import todoModel from "../models/todos_model";
import CreateTodoRequest from "../requests/create_todo_request";
import bodyParser from "body-parser";

const router = Router();


router.post('/all', async (req, res, next) => {
    const body = req.body as CreateTodoRequest;
    const result = await todoModel.create({
        name: body.name,
        time: body.date
    })
    res.status(200).json({ 'message': result })
})

export default router;