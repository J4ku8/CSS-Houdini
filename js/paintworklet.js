CSS.registerProperty({
    name: '--ripple-color',
    syntax: '<color>',
    inherits: true,
    initialValue: 'purple',
});

CSS.registerProperty({
    name: '--ripple-y',
    syntax: '<number>',
    inherits: true,
    initialValue: 0,
});

CSS.registerProperty({
    name: '--ripple-x',
    syntax: '<number>',
    inherits: true,
    initialValue: 0,
});

CSS.registerProperty({
    name: '--animation-tick',
    syntax: '<number>',
    inherits: true,
    initialValue: 0,
});

const button = document.querySelector('#ripple');
button.addEventListener('click', evt => {
    button.classList.add('animating');
    const [x, y] = [evt.clientX, evt.clientY];
    const start = performance.now();
    requestAnimationFrame(function raf(now) {
        const count = Math.floor(now - start);
        button.style.cssText = `--ripple-x: ${x}; --ripple-y: ${y}; --animation-tick: ${count};`;
        if(count > 1000) {
            button.classList.remove('animating');
            button.style.cssText = `--animation-tick: 0`;
            return;
        }
        requestAnimationFrame(raf);
    })
})

/*
Copyright 2016 Google, Inc. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/


registerPaint('ripple', class {
    static get inputProperties() {
        return [
            'background-color',
            '--ripple-color',
            '--animation-tick',
            '--ripple-x',
            '--ripple-y'
        ];
    }
    paint(ctx, geom, properties) {
        const bgColor = properties.get('background-color');
        const rippleColor = properties.get('--ripple-color');
        const x = properties.get('--ripple-x');
        const y = properties.get('--ripple-y');
        let tick = properties.get('--animation-tick');

        if (tick < 0) {
            tick = 0;
        } else if (tick > 1000) {
            tick = 1000;
        }

        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, geom.width, geom.height);
        ctx.fillRect(0, 0, geom.width, geom.height);

        ctx.fillStyle = rippleColor;
        ctx.globalAlpha = 1 - tick/1000;
        ctx.arc(
            x, y, // center
            geom.width * tick/1000, // radius
            0, // startAngle
            2 * Math.PI //endAngle
        );
        ctx.fill();
    }
});

