import express from "express";

import Todo from "../todo.model.js"

export const router = express.Router();

router.route("/:id").get(async(req, res) => {
    const id = req.params.id;
    try {
        const returnTodo = await Todo.findById(id);
        res.json(returnTodo);
    } catch (e) {
        res.status(404).send("Not found");
    }
})

router.route("/:id").post(async(req, res) => {
    const id = req.params.id;
    try {
        const editTodo = await Todo.findById(id)
        editTodo.todoDescription = req.body.todoDescription;
        editTodo.todoDateCreated = req.body.todoDateCreated;
        editTodo.todoCompleted = req.body.todoCompleted;
        await Todo.save();
        res.json(editTodo);
    } catch (e) {
        res.status(404).send("Failed to update")
    }
})