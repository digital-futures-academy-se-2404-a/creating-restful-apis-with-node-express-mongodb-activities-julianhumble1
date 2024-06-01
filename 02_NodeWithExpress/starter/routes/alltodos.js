import express from "express";

import Todo from "../todo.model.js"

export const router = express.Router();

router.route("/").get(async(req, res) => {
    try {
        const docs = await Todo.find({});
        return res.json(docs);
    } catch (e) {
        console.error(e);
        res.status(404).send("Not found")
    }
})