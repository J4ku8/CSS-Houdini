//CSSOM
function CSSOMexamples(){
    let glass = document.querySelector('.glass');
    let link = document.querySelector('.link');
    let cssom = document.querySelector('#cssom');


    console.log("Pozadí DOM elementu body: "+window.getComputedStyle(document.body).background);
    console.log("Délka elemntů tříd 'link', které jsou použity v menu jako odkazy: "+window.getComputedStyle(link).getPropertyValue('width'));
    console.log("Pozadí elemntu trády 'glass', který slouží jako skleněné pozadí: "+window.getComputedStyle(glass).getPropertyValue('width'));
    console.log("Délka pseudo elementu ::before u třídy: "+window.getComputedStyle(link, '::before').width);

    //Setování vlastností pomocí CSSOM
    cssom.style.setProperty('color', 'blue');
}
CSSOMexamples();


CSS.registerProperty({
    name:'--rotater',
    syntax: '<angle>',
    initialValue: '0deg',
    inherits: false
});
CSS.registerProperty({
    name:'--scale',
    syntax: '<number>',
    initialValue: '1',
    inherits: false
});
//TOM change opacity by hover
let box = document.querySelector(".box");
function opacityOn(){
    box.attributeStyleMap.set('opacity', CSS.number(.5));
}
function opacityOut(){
   box.style.opacity = "1";
}

//CSSOM transorm
function rotateCSSOM(){
    box.style.setProperty('--rotate', '15deg');
}

//TOM transform
function rotateTOM(){
    let rotateNum = 0;
    let leftScale = 1;
    let rightScale = 1;
    rotatePlus=document.querySelector("#rotatePlus");
    rotateMinus=document.querySelector("#rotateMinus");
    scalePlusR=document.querySelector("#scalePlusR");
    scaleMinusR=document.querySelector("#scaleMinusR");
    scalePlusL=document.querySelector("#scalePlusL");
    scaleMinusL=document.querySelector("#scaleMinusL");


    rotatePlus.addEventListener('click', ()=>{
        doTransorm(rotateNum+=1, leftScale, rightScale)
    })
    rotateMinus.addEventListener('click', ()=>{
        doTransorm(rotateNum-=1, leftScale, rightScale)
    })

    scaleMinusL.addEventListener('click', ()=>{
        doTransorm(rotateNum, leftScale-=0.1, rightScale)
    })
    scalePlusL.addEventListener('click', ()=>{
        doTransorm(rotateNum, leftScale+=0.1, rightScale)
    })
    scaleMinusR.addEventListener('click', ()=>{
        doTransorm(rotateNum, leftScale, rightScale-=0.1)
    })
    scalePlusR.addEventListener('click', ()=>{
        doTransorm(rotateNum, leftScale, rightScale+=0.1)
    })
    
    function doTransorm(rotate, scaleAdd, scaleRemove){
    const transform = new CSSTransformValue([
        new CSSRotate(CSS.deg(rotate)),
        new CSSScale(CSS.number(scaleAdd), CSS.number(scaleRemove))
      ])
      box.attributeStyleMap.set('transform', transform);
    }
}
rotateTOM();

//TODO calculate width by user input
function calcWidth(){
    const number = document.querySelector('#number');
    const fill = document.querySelector('.fill');
    const borderWidth=fill.computedStyleMap().get('width').value;
    number.addEventListener('input', ()=>{
        document.getElementById("percents").innerHTML = number.value+"%";
        number.value >100 ? number.value=100 : number.value
        fill.attributeStyleMap.set('width', CSS.px((number.value*borderWidth)/100));
    })
}
calcWidth();