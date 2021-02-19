//CSSOM
function CSSOMexamples(){
    let glass = document.querySelector('.glass');
    let link = document.querySelector('.link');
    let cssom = document.querySelector('#cssom');

    
console.group()
console.log('%c CSSOM', 'color: red')
    console.log("Pozadí DOM elementu body= "+window.getComputedStyle(document.body).background);
    console.log("Délka elemntů tříd 'link', které jsou použity v menu jako odkazy= "+window.getComputedStyle(link).getPropertyValue('width'));
    console.log("Pozadí elemntu trády 'glass', který slouží jako skleněné pozadí= "+window.getComputedStyle(glass).getPropertyValue('width'));
    console.log("Délka pseudo elementu ::before u třídy= "+window.getComputedStyle(link, '::before').width);

    //Setování vlastností pomocí CSSOM
    cssom.style.setProperty('color', 'blue');
    console.groupEnd()
}
CSSOMexamples();

//TOM
function TOMChangeTextColor(){
    let tom = document.querySelector('#tom');
    tom.attributeStyleMap.set('color', 'red');
    console.log(tom.attributeStyleMap.get('color'))
}
TOMChangeTextColor();


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
CSS.registerProperty({
    name:'--value',
    syntax: '<number>',
    initialValue: '0',
    inherits: false
});
CSS.registerProperty({
    name:'--width',
    syntax: '<number>',
    initialValue: '0',
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


//TODO proč append nefunguje
function changeStyle(){
    button1=document.querySelector("#example");
    button1.attributeStyleMap.set('opacity',  CSS.number(0));
    setTimeout(()=>{
        button1.attributeStyleMap.delete('opacity');
        button1.attributeStyleMap.append('opacity-radius',CSS.number(.5))},3000)
}


function CSSStyleValue(){
    const css = CSSStyleValue.parse(
        'transform', 'translate3d(10px,10px,0) scale(0.5)');
        console.log(css)
}
//CSSStyleValue();

function unparsedValues(){
//TODO proč prázdné objekty
let values = new CSSUnparsedValue(['30', '60'])
console.log(value.entries({i: 0, l:'1'}))
console.log(values.keys())
}

function calcWidth(){
    const number = document.querySelector('#number');
    const fill = document.querySelector('.fill');
    const bar = document.querySelector('.bar');

    let value  = new CSSUnparsedValue( ['30'] );

    bar.attributeStyleMap.set('width', CSS.vw(value[0]));
    const barWidth =bar.attributeStyleMap.get('width');
    const keyword = new CSSKeywordValue(bar.computedStyleMap().get('width').value).value;

    document.getElementById("percents").innerHTML = number.value+"%";
    number.value >100 ? number.value=100 : number.value
    fill.attributeStyleMap.set('width', CSS.px(((number.value*keyword)*0.99)/100));
}



function keywordValue(){
    const number = document.querySelector('#number');
    const fill = document.querySelector('.fill');
    const borderWidth=fill.computedStyleMap().get('width').value;
    const keyword = new CSSKeywordValue(borderWidth);

    console.log('Pomocí provolání metody value, můžeme získat pouze samoutnou hodnotu:'+keyword.value)
    console.log('%c Níže můžete vidět instanci třídy CSSKeywordValue', 'color: red')
    console.dir( keyword );
}
keywordValue();