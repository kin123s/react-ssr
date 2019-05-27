import express from "express";

import dotenv from "dotenv";

import * as React from "react";
import {renderToString} from "react-dom/server";
import {ServerStyleSheet, StyleSheetManager} from "styled-components"
import template from "@src/util/template";
import {StaticRouter} from "react-router-dom";

import AppCompoents from "../../../../client/src/App";

dotenv.config({path: ".env.example"});

const router = express.Router();

router.get("/*", (req, res, next) => {

    let context = {};

    const sheet = new ServerStyleSheet(); // <-- creating out stylesheet
    // const Element = React.createElement( ServerMain );
    const body = renderToString(sheet.collectStyles(
        <StaticRouter location={req.url} context={context}>
            <AppCompoents/>
        </StaticRouter>
    ));

    const title = "APP";
    const styles = sheet.getStyleTags(); // <-- getting all the tags from the sheet

    console.log("controllers/React : react View Load : ", req.baseUrl, req.url); // req.originalUrl req.url

    res.send(template({body, title, styles}));

});

export default router;