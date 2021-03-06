//CSSOM
function CSSOMExamples(){

    let glass = document.querySelector('.glass');
    let link = document.querySelector('.link');
    let cssom = document.querySelector('#cssom');

    
console.group()
console.log('%c CSSOM', 'color: red')
    console.log("Pozadí DOM elementu body= "
        +window.getComputedStyle(document.body).background);
    console.log("Délka elemntů tříd 'link', které jsou použity v menu jako odkazy= "
        +window.getComputedStyle(link).getPropertyValue('width'));
    console.log("Pozadí elemntu třídy 'glass', který slouží jako skleněné pozadí= "
        +window.getComputedStyle(glass).getPropertyValue('width'));
    console.log("Délka pseudo elementu ::before u třídy= "
        +window.getComputedStyle(link, '::before').width);

    //Setování vlastností pomocí CSSOM
    startTime = performance.now();
    cssom.style.setProperty('color', 'blue');
    console.groupEnd()
    endTime=performance.now();
    console.log(endTime-startTime);
}
CSSOMExamples();

//TOM
function TOMChangeTextColor(){
    let startTime, endTime;
    startTime = performance.now();
    let tom = document.querySelector('#tom');
    tom.attributeStyleMap.set('color', 'red');
    console.log(tom.attributeStyleMap.get('color'))
    endTime=performance.now();
    console.log(endTime-startTime);
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

function opacityOn(){
    let box = document.querySelector(".box");
    box.attributeStyleMap.set('opacity', CSS.number(.5));
}
function opacityOut(){
    let box = document.querySelector(".box");
   box.style.opacity = "1";
}

//CSSOM transorm

function rotateInline(){
    box.style.setProperty('--rotate', '15deg');
}
function rotateCPV(){
    box.attributeStyleMap.set('--rotater', '15deg');
    console.log(box.computedStyleMap().get('--rotater'))
}
rotateCPV();

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
        start= performance.now();
    const transform = new CSSTransformValue([
        new CSSRotate(CSS.deg(rotate)),
        new CSSScale(CSS.number(scaleAdd), CSS.number(scaleRemove))
      ])
      box.attributeStyleMap.set('transform', transform);
        end= performance.now()
        console.log(end-start)
    }
}
rotateTOM();
// cssom();

//rotate CCSSOM
function cssom(){
    let start, end

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
        rotateNum=rotateNum+0.5
        box.style.transform=`transform(${rotateNum})`
    })
    rotateMinus.addEventListener('click', ()=>{
        rotateNum=rotateNum-0.5
        box.style.transform=`transform(${rotateNum})`
    })

    scaleMinusL.addEventListener('click', ()=>{
        leftScale=leftScale-0.1
        box.style.transform=`scaleX(${leftScale})`
    })
    scalePlusL.addEventListener('click', ()=>{
        leftScale=leftScale-0.1
        box.style.transform=`scaleX(${leftScale})`
    })
    scaleMinusR.addEventListener('click', ()=>{
        rightScale=rightScale-0.1
        box.style.transform=`scaleY(${rightScale})`
    })
    scalePlusR.addEventListener('click', ()=>{
        start= performance.now();
        rightScale=rightScale+0.1
        box.style.transform=`scaleY(${rightScale})`
        end= performance.now()
        console.log(end-start)
    })
}


function changeStyle(){
    let isActive = true
    button1=document.querySelector("#example");
    button1.addEventListener('click', ()=>{
        isActive = !isActive;
        isActive ?  button1.attributeStyleMap.set('color', 'white') : button1.attributeStyleMap.delete('color');
    })
}
changeStyle()

function CSSStyleValue(){
    const transform = CSSTransformValue.parse(
        'transform', 'translate3d(10px,10px,10px) scale(0.1)');
        console.log(transform)


    const transformAll = CSSTransformValue.parseAll(
        'transform', 'translate3d(10px,10px,10px) translate3d(5px,5px,5px) scale(0.1) scale(0.5)');
    console.log(transformAll)
}
CSSStyleValue();

// function unparsedValues(){
// //TODO proč prázdné objekty
// let values = new CSSUnparsedValue(['30', '60'])
// console.log(value.entries({i: 0, l:'1'}))
// console.log(values.keys())
//
//
//
// console.log(values.array.forEach(el,el2 => {
//     el+el2
// })
// )

function calcWidth(){
    const number = document.querySelector('#number');
    const fill = document.querySelector('.fill');
    const bar = document.querySelector('.bar');

    let value  = new CSSUnparsedValue( ['30'] );

    bar.attributeStyleMap.set('width', CSS.vw(value[0]));
    const barWidth = bar.computedStyleMap().get('width')
    const keyword = new CSSKeywordValue(barWidth.value).value;

    document.getElementById("percents").innerHTML = number.value+"%";
    number.value > 100 ? number.value=100 : number.value
    fill.attributeStyleMap.set('width', CSS.px(((number.value*keyword)*0.99)/100));
}

function CSSNumericValue(){
    let mathSum = CSS.px("23").add(CSS.em("3")).add(CSS.percent("4")).mul(CSS.cm("9")).div(CSS.rem("4"));

    
    console.log(CSS.px("10").to("cm").toString());
    
    let sum = CSS.cm("23").add(CSS.in("4")).add(CSS.px("3")).add(CSS.percent("9"));
    console.log(sum.toSum("px", "percent").toString())


    console.log(mathSum.toString());
    console.log(mathSum);
}
CSSNumericValue()

function CSSPositionValue(){
    const button = document.querySelector('#movingButton');
    let position = new CSSPositionValue( CSS.px(35), CSS.px(40) );

    button.attributeStyleMap.set( 'object-position', position );
    console.log( position.x.value, position.y.value );
    console.log( replacedEl.computedStyleMap().get('object-position') );
}


function keywordValue(){
    const number = document.querySelector('#number');
    const fill = document.querySelector('.fill');
    const borderWidth=fill.computedStyleMap().get('width').value;
    const keyword = new CSSKeywordValue(borderWidth);

    console.log('Pomocí provolání metody value,' +
        ' můžeme získat pouze samotnou hodnotu:'+keyword.value)
    console.log('%c Níže můžete vidět ' +
        'instanci třídy CSSKeywordValue', 'color: red')
    console.dir( keyword );
}
keywordValue();