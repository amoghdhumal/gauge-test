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

step("Goto Google's home page", async function() {
    await goto('https://google.com');
    
    });

step("Page contains <content>", async () => {
    assert.ok(await text("google").exists());
   });
       