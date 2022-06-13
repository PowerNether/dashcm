let dashcmActions = Array.from(document.querySelectorAll(".item-dahcm__actions")) || null;
if (dashcmActions !== null) {
    dashcmActions.forEach(progress => {
    let active = progress.querySelector(".item-dahcm__line.active") || null
    let notactive = progress.querySelector(".item-dahcm__line.notactive") || null
    if (active !== null && notactive !== null) {
        let width = active.getAttribute('dashlk-active-line')
        active.style.width = width + "%"
        notactive.style.width = 100 - width + "%"
    }
    })
}

let itemDahcmTogglers = Array.from(document.querySelectorAll('.item-dahcm__toggle')) || null;
if (itemDahcmTogglers !== null) {
    itemDahcmTogglers.forEach(toggler => {
        toggler.addEventListener('click', function () {
            this.classList.toggle("active");
            let sub = this.parentNode.nextElementSibling;
            if (sub.style.maxHeight) {
                sub.style.maxHeight = null;
                sub.style.padding = null;
                sub.style.marginTop = null;
            } else {
                sub.style.maxHeight = sub.scrollHeight + 16 * 2 + 16 + "px";
                sub.style.padding = '16px 20px';
                sub.style.marginTop = '16px';
            }
        });
    });
};