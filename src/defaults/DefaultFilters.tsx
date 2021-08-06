const DefaultFilters = [
    {
        type: 'filter',
        name: 'Brightness',
        property: 'brightness',
        value: 100,
        range: {
            min: 0,
            max: 200
        },
        unit: '%',
        step: 1
    },
    {
        type: 'filter',
        name: 'Contrast',
        property: 'contrast',
        value: 100,
        range: {
            min: 0,
            max: 200
        },
        unit: '%',
        step: 1
    },
    {
        type: 'filter',
        name: 'Saturation',
        property: 'saturate',
        value: 100,
        range: {
            min: 0,
            max: 200
        },
        unit: '%',
        step: 1
    },
    {
        type: 'filter',
        name: "Grayscale",
        property: "grayscale",
        value: 0,
        range: {
            min: 0,
            max: 100
        },
        unit: "%",
        step: 1
    },
    {
        type: 'filter',
        name: 'Sepia',
        property: "sepia",
        value: 0,
        range: {
            min: 0,
            max: 100
        },
        unit: '%',
        step: 1
    },
    {
        type: 'filter',
        name: 'Hue Rotate',
        property: 'hue-rotate',
        value: 0,
        range: {
            min: 0,
            max: 360
        },
        unit: 'deg',
        step: 1
    },
    {
        type: 'filter',
        name: 'Invert',
        property: 'invert',
        value: 0,
        range: {
            min: 0,
            max: 100
        },
        unit: '%',
        step: 1
    },
    {
        type: 'filter',
        name: 'Blur',
        property: 'blur',
        value: 0,
        range: {
            min: 0,
            max: 20
        },
        unit: 'px',
        step: 1
    },
    {
        type: 'filter',
        name: 'Opacity',
        property: 'opacity',
        value: 100,
        range: {
            min: 0,
            max: 100
        },
        unit: '%',
        step: 1
    },
]

export default DefaultFilters;