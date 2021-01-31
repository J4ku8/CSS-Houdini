const burger = document.querySelector(".burger")
const nav = document.querySelector(".responsive-nav")
let isClose = true;


burger.addEventListener('click', ()=>{
    if(isClose) {
        nav.attributeStyleMap.set('display', new CSSKeywordValue('flex'));
        nav.style.visibility = "visible"
        isClose = false;
    } else {
        nav.attributeStyleMap.set('display', new CSSKeywordValue('none'));
        nav.style.visibility = "hidden"
        isClose = true;
    }
})