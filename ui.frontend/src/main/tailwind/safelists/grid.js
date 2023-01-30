const gridColsAndRows = {
       pattern: /grid-(cols|rows)-([1-9]*|none)$/
}

const startEndColsAndRows = {
    pattern: /(row|col)-(start|end|span)-([0-9]*)$/
}

module.exports = [
    'grid',
    'gap-1',
    'gap-2',
    'gap-3',
    'gap-4',
    gridColsAndRows,
    startEndColsAndRows
]