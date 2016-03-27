chrome.webRequest.onBeforeRequest.addListener(
	function(details) { return {redirectUrl: "javascript:"}; },
	{urls: ["*://*.lemonde.fr/modele-economique/"]},
	["blocking"]
);