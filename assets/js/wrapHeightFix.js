
var detectWrap = function (parentID) {
    var prevItem = {};
    var currItem = {};
    var items = document.getElementById(parentID).children;

    for (var i = 0; i < items.length; i++) {
        currItem = items[i].getBoundingClientRect();
        if (prevItem && prevItem.top < currItem.top) 
            return true;
        prevItem = currItem;
    };
    return false;
}

var onResiz = function (event) {
    //document.documentElement.style.setProperty('--header-height-multiplier', detectWrap('wrapping-header')?2:1);
};
window.onresize = onResiz;
document.addEventListener('DOMContentLoaded',onResiz, false);