const padding = require('./padding')
const flex = require('./flex')
const grid = require('./grid')



module.exports = [
    // {
    //     pattern: /./,
    //     variants: ['child', 'sm', 'md', 'lg'],
    // },
    ...padding,
    ...flex,
    ...grid,
]