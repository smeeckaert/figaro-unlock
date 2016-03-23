var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
    include: "*",
    contentStyleFile: data.url("style/content.css"),
    contentScriptWhen: "start",
    contentScriptFile: data.url("script/content.js")
});