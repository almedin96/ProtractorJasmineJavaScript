const { get } = require("lodash");
const { title } = require("process");
const { element } = require("protractor");

describe("prvi test", function(){
    it("prvi dio testa", async function(){
        await browser.get("https://www.protractortest.org/#/");
        await browser.sleep(3500);
        t = await browser.getTitle();

        await expect(t).toEqual("Protractor - end-to-end testing for AngularJS")
    })
})