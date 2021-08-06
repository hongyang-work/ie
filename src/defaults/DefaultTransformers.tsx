const DefaultTransformers = [
    {
        type: 'transformer',
        name: 'Scale X & Y',
        property: 'scale',
        value: 1,
        range: {
            min: 0,
            max: 5
        },
        step: 0.1
    },
    {
        type: 'transformer',
        name: 'Scale X',
        property: 'scaleX',
        value: 1,
        range: {
            min: -1,
            max: 3
        },
        step: 0.1
    },
    {
        type: 'transformer',
        name: 'Scale Y',
        property: 'scaleY',
        value: 1,
        range: {
            min: -1,
            max: 3
        },
        step: 0.1
    },
    {
        type: 'transformer',
        name: 'Move X',
        property: 'translateX',
        value: 0,
        range: {
            min: -500,
            max: 500
        },
        unit: 'px',
        step: 1
    },
    {
        type: 'transformer',
        name: 'Move Y',
        property: 'translateY',
        value: 0,
        range: {
            min: -500,
            max: 500
        },
        unit: 'px',
        step: 1
    },
    {
        type: 'transformer',
        name: 'Skew X',
        property: 'skewX',
        value: 0,
        range: {
            min: -90,
            max: 90
        },
        unit: 'deg',
        step: 1
    },
    {
        type: 'transformer',
        name: 'Skew Y',
        property: 'skewY',
        value: 0,
        range: {
            min: -90,
            max: 90
        },
        unit: 'deg',
        step: 1
    },
    {
        type: 'transformer',
        name: 'Rotate',
        property: 'rotate',
        value: 0,
        range: {
            min: 0,
            max: 360
        },
        unit: 'deg',
        step: 1
    }
]

export default DefaultTransformers;
