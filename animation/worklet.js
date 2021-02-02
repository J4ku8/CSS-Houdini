new WorkletAnimation(
    'passthrough',
    new KeyframeEffect(
        document.querySelector('#a'),
        [
            {
                transform: 'translateX(0)'
            },
            {
                transform: 'translateX(500px)'
            }
        ],
        {
            duration: 2000,
            iterations: Number.POSITIVE_INFINITY
        }
    ),
    document.timeline
).play();

console.log("aaa")