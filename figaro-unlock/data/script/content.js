window.Ads = {};
window.Ads.display = {};
function cleanAds() {
    elems = document.querySelectorAll('.adBlockNotificationOverlay,.adBlockNotification');
    if (elems && elems.length) {
        for (i = 0; i < elems.length; i++) {
            elems[i].style = '';
        }
    }

    divsAdds = document.querySelectorAll('[id*=Ads_]');
    if (divsAdds && divsAdds.length) {
        for (i = 0; i < divsAdds.length; i++) {
            divsAdds[i].remove();
        }
    }

    divsTutorial = document.querySelectorAll('.ab-tutorial');
    if (divsTutorial && divsTutorial.length) {
        for (i = 0; i < divsTutorial.length; i++) {
            divsTutorial[i].parentElement.parentElement.remove();
        }
    }
}

var observer = new MutationObserver(function () {
    cleanAds();
});

observer.observe(
    document, {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: true
    }
);