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

step("Goto amazon home page", async function() {
    await goto("http://amazon.in")
    })

step("Search for Amazon", async function(){
    assert.ok(await text("amazon").exists());
   
    });
   
 