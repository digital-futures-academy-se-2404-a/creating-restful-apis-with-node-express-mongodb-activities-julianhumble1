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
    const replacementTodo = {
        todoDescription: req.body.todoDescription,
        todoDateCreated: req.body.todoDateCreated,
        todoCompleted: req.body.todoCompleted
    }
    try {
        const updatedTodo = await Todo.findOneAndUpdate({ _id: id }, replacementTodo, {
            new: true,
        });
        if (!updatedTodo) {
            res.status(404).send("Todo not found")
        } else {
            res.json(updatedTodo);
        }
    } catch (e) {
        console.log(e);
        res.status(404).send("Failed to update")
    }
})