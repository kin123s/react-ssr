import express from "express";
import session from "express-session";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongo from "connect-mongo";
import path from "path";


import * as React from 'react';
import { renderToString  }  from 'react-dom/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import template from '@src/util/template';
import { StaticRouter } from 'react-router-dom';

import ServerMain from '../../client/src/ServerMain';

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

app.get("/api", (req, res) => {

  res.send(
    "test"
  );

});

// /**
//  * Primary app routes. 
//  */
app.get("/*", (req, res) => {

  let context = {};
  const sheet = new ServerStyleSheet(); // <-- creating out stylesheet
  // const Element = React.createElement( ServerMain );
  const body = renderToString(
    sheet.collectStyles( 
      <StaticRouter location={req.url} context={context}>
        <ServerMain/> 
      </StaticRouter>
    )
  );

  const title = "APP";
  const styles = sheet.getStyleTags(); // <-- getting all the tags from the sheet

  res.send(
    template({
      body,
      title,
      styles
    })
  );

});


console.log('test1');

export default app;