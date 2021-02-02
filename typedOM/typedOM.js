function opacityOn(){
    let circle1 = document.querySelector(".box");
    circle1.attributeStyleMap.set('opacity', CSS.number(.5));
}
function opacityOut(){
    document.getElementById("box").style.opacity = "1";
}

//TODO
function calcWidth(){
    const number = document.querySelector('#number');
    const fill = document.querySelector('.fill');
    const borderWidth=fill.computedStyleMap().get('width').value;
    number.addEventListener('input', ()=>{
        document.getElementById("percents").innerHTML = number.value+"%";
        fill.attributeStyleMap().set('width', CSS.px((number.value*borderWidth)/100));
    })
}
calcWidth()