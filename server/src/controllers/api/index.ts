import express from "express";

import dotenv from "dotenv";

dotenv.config({path: ".env.example"});

const router = express.Router();

router.all("/*", (req, res, next) => {

    console.log(`controllers/Api : Api Load : ${req.method}`);
    next();
})

router.get("/", (req, res, next) => {

    res.send("api Root page");

})

export default router;