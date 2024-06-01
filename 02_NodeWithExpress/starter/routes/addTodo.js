import express from "express";

import Todo from "../todo.model.js";

export const router = express.Router();

router.route("/").post(async(req, res) => {
    let newTodoData = req.body;
    try {
        let newTodo = new Todo(newTodoData);
        await newTodo.save();
        res.status(200).send("Todo added successfully");
    } catch (e) {
        res.status(400).send("Add failed");
    }

})