var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
    include: [
        "*.lefigaro.fr",
        "*.lepoint.fr",
        "*.marieclaire.fr",
        "*.lequipe.fr",
        "*.lexpress.fr",
    ],
    contentStyleFile: data.url("style/content.css"),
    contentScriptWhen: "start",
    contentScriptFile: data.url("script/content.js")
});