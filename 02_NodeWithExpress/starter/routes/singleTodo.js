import express from "express";

export const router = express.Router();

router.route("/:id").get((req, res) => {
    const id = req.params.id;
    res.send(`ID of todo to be obtained: ${id}`);
})

router.route("/:id").post((req, res) => {
    const id = req.params.id;
    res.send(`ID of todo to be updated: ${id}`);
})