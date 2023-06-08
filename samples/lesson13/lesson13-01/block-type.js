const BLOCK_T = {
    color: '#63c9ff',
    shape: [
        [[-1, 0], [0, 0], [1, 0], [0, 1]],
        [[-1, 0], [0, 0], [0, -1], [0, 1]],
        [[-1, 0], [0, 0], [1, 0], [0, -1]],
        [[0, -1], [0, 0], [0, 1], [1, 0]],
    ]
}

const BLOCK_O = {
    color: '#da57f1',
    shape: [
        [[0, 0], [0, 1], [1, 0], [1, 1]],
        [[0, 0], [0, 1], [1, 0], [1, 1]],
        [[0, 0], [0, 1], [1, 0], [1, 1]],
        [[0, 0], [0, 1], [1, 0], [1, 1]],
    ]
}

const BLOCK_I = {
    color: '#37bd4e',
    shape: [
        [[0, -1], [0, 0], [0, 1], [0, 2]],
        [[-2, 0], [-1, 0], [0, 0], [1, 0]],
        [[0, -1], [0, 0], [0, 1], [0, 2]],
        [[-2, 0], [-1, 0], [0, 0], [1, 0]],
    ]
}

const BLOCK_L = {
    color: '#ffef3d',
    shape: [
        [[0, -1], [0, 0], [0, 1], [1, 1]],
        [[-1, 0], [0, 0], [1, 0], [-1, 1]],
        [[0, -1], [0, 0], [0, 1], [-1, -1]],
        [[-1, 0], [0, 0], [1, 0], [1, -1]],
    ]
}

const BLOCK_J = {
    color: '#9e74ff',
    shape: [
        [[0, -1], [0, 0], [0, 1], [-1, 1]],
        [[-1, 0], [0, 0], [1, 0], [-1, -1]],
        [[0, -1], [0, 0], [0, 1], [1, -1]],
        [[-1, 0], [0, 0], [1, 0], [1, 1]],
    ]
}

const BLOCK_Z = {
    color: '#ff814c',
    shape: [
        [[-1, -1], [0, -1], [0, 0], [1, 0]],
        [[0, 0], [0, 1], [1, -1], [1, 0]],
        [[-1, -1], [0, -1], [0, 0], [1, 0]],
        [[0, 0], [0, 1], [1, -1], [1, 0]],
    ]
}

const BLOCK_S = {
    color: '#d5ff3a',
    shape: [
        [[-1, 0], [0, 0], [0, -1], [1, -1]],
        [[0, -1], [0, 0], [1, 0], [1, 1]],
        [[-1, 0], [0, 0], [0, -1], [1, -1]],
        [[0, -1], [0, 0], [1, 0], [1, 1]],
    ]
}

const BLOCKS = [
    BLOCK_S,
    BLOCK_Z,
    BLOCK_O,
    BLOCK_I,
    BLOCK_L,
    BLOCK_J,
    BLOCK_T
];
