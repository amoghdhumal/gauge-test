/* globals gauge*/
"use strict"
const { openBrowser,write, closeBrowser, goto, press, text, focus, textBox, toRightOf } = require('taiko');
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === 'false';


beforeSuite(async () => {
    await openBrowser({ headless: headless })
});

afterSuite(async () => {
    await closeBrowser();
});

step("User must be logged in as <arg0>", async function(arg0) {

});

step("Open the product search page", async function() {

    });

step("Search for product <arg0>", async function(arg0) {
    });

step("<arg0> should show up in the search results", async function(arg0) {
            throw 'Unimplemented Step';
    });

step("The search results will be empty", async function() {
        throw 'Unimplemented Step';
        });