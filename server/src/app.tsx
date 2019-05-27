import express from "express";
import session from "express-session";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongo from "connect-mongo";
import path from "path";

import Router_Api from '@src/controllers/api';
import Router_react from '@src/controllers/react';
import console = require("console");

// const MongoStore = mongo(session); Load environment variables from .env file,
// where API keys and passwords are configured
dotenv.config({path: ".env.example"});

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3500);

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/public", express.static( "./src/public" ));

app.route("/public/*").get( ( req, res ) => {
    console.log('public Load : ', req.url );
    res.send("");
});

app.use("/api", Router_Api);
app.use("/react", Router_react);

/// catch 404 and forwarding to error handler
app.use(function (req, res, next) {

    console.log("test")
    let err : any = new Error("정상적인 경로로 진입하지 않았습니다.");
    err.status = 404;
    next(err);
});

// production error handler no stacktraces leaked to user
app.use(function (err : any, req : express.Request, res : express.Response, next : express.NextFunction) {
    console.log("error event : ", err.status, req.url );

    res.status(err.status || 500);
    res.render('error', {
        message: err.message + "",
        error: {}
    });
});

export default app;
