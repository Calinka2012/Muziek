input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < 3; index++) {
            music.playMelody("C D E F G A B C5 ", 140)
            basic.pause(2000)
        }
        basic.pause(1000)
        for (let index = 0; index < 3; index++) {
            music.playMelody("C5 B A G F E D C ", 140)
            basic.pause(2000)
        }
        basic.pause(1000)
    }
})
