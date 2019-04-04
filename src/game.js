const GAME = {
    width: 700,
    height: 300,
    gravity: 3,

    obstacle: {
        speed: 10,
        acceleration: 0.001,
        minH: 70,
        maxH: 110,
        minW: 10,
        maxW: 20
    },

    player: {
        radius: 30
    },

    ground: {
        height: 40
    }
}

export default GAME;