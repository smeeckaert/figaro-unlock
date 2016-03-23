window.Ads = {};
window.Ads.display = {};

function cleanAds() {
    elems = document.querySelectorAll('.adBlockNotificationOverlay,.adBlockNotification');
    if (elems && elems.length) {
        for (i = 0; i < elems.length; i++) {
            elems[i].style = '';
        }
    }

    console.warn('clean ads');
    divsAdds = document.querySelectorAll('[id*=Ads_]');
    if (divsAdds && divsAdds.length) {
        for (i = 0; i < divsAdds.length; i++) {
            console.log("removing");
            divsAdds[i].remove();
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