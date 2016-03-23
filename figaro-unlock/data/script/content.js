elems = document.querySelectorAll('.adBlockNotificationOverlay,.adBlockNotification');
if (elems && elems.length) {
    for (i = 0; i < elems.length; i++) {
        elems[i].style = '';
    }
}

document.referrer = "";