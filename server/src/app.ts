import express from "express";
import session from "express-session";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongo from "connect-mongo";
import path from "path";


import React from 'react';
import { renderToString  }  from 'react-dom/server';
import template from '@src/util/template';

import Apps from '../../client/src/App';

// const MongoStore = mongo(session);

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: ".env.example" });




// Create Express server
const app = express();

// // Express configuration
app.set("port", process.env.PORT || 3500);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.set("views", path.join(__dirname, "../views"));
// app.set("view engine", "pug");



// /**
//  * Primary app routes. 
//  */
app.get("/", (req, res) => {

  const element = renderToString(
    React.createElement(Apps)
  );

  res.send(
    template({
      body : element,
      title : "APP",
    })
  );

});

console.log('test1');


export default app;