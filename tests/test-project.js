
    /* globals gauge*/
"use strict";
const { openBrowser,write, closeBrowser, goto, press, text, focus, textBox, toRightOf } = require('taiko');
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === 'true';

beforeSuite(async () => {
    await openBrowser({ headless: headless })
});

afterSuite(async () => {
    await closeBrowser();
});

step("Create the following projects <arg0>", async function(arg0) {
    throw 'Unimplemented Step';
    });