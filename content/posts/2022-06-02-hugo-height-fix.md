---
layout: post
title: PaperMod Site Height Fix
ShowToc: false

tags: [hugo]
date: 2022-06-02
---

Ever since I caught a glimpse of the elegant PaperMod theme of Hugo static site builder, I knew I got to use it. While PaperMod theme is very slick and fast it has a few minor drawbacks, which need to be addressed. 

One of them being wrong height of the title page when navigation element is wrapped. This looks kinda cumbersome mainly on mobile devices, where, the page is just too high when no content is shown. Footer on the following image is out of the view:
![Wrong Page Height On Mobile Devices](/wrong_height.png#center)
Here we have it fixed:
![Fixed Page Height On Mobile Devices](/right_height.png#center)
In PaperMod many theme variables are hardcoded to css file, such as header and footer heights. 

## Fix
```css
:root {
    ...
    --gap: 24px;
    --header-height: 60px;
    --footer-height: 60px;
    --theme: rgb(255, 255, 255);
    ...
```

While this makes modifications nice and simple, the problem materializes itself when children of the header are wrapped to the next line. This suddenly doubles the real header height without informing anyone else. Therefore, The page is suddenly 60px higher and scrollbar is displayed. 

Fix is simple, we introduce new theme variable `--header-height-multiplier` which will be set to the number of lines the header is wrapped into. We also need to apply this change to all usages of `--header-height`.
```css
/*main.css*/
.main {
    min-height: calc(100vh - var(--header-height-multiplier, 1) * var(--header-height) - var(--footer-height));}

/*profile-mode.css*/
.main .profile {
    min-height: calc(100vh - var(--header-height-multiplier, 1) * var(--header-height) - var(--footer-height) - (var(--gap) * 2));}
```

Notice the usage of second argument `1` in `var()`. This value will be used if the one before it doesn't exist yet.

Finally, to change the multiplier value we use Javascript.

```javascript
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
    // wrapping-header id needs to be added to the header in header.html
    document.documentElement.style.setProperty('--header-height-multiplier', 
        detectWrap('wrapping-header') ? 2 : 1); 
};
window.onresize = onResiz;
document.addEventListener('DOMContentLoaded',onResiz, false);
```
Here we are essentially checking, if all children share the same y-position (top). If not, items are wrapped, and we set multiplier to 2. (It would be possible to add support for even higher values but why bother.)

And that's it! One more step towards perfection!
