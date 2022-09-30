radio.onReceivedNumber(function (receivedNumber) {
    Tempo = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    Tempo = randint(10, 20)
})
input.onGesture(Gesture.Shake, function () {
    if (Tempo > 0) {
        radio.sendNumber(Tempo)
        Tempo = -1
    }
})
let Tempo = 0
radio.setGroup(1)
Tempo = 1
basic.forever(function () {
    if (Tempo == 0) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
    if (Tempo < 0) {
        basic.clearScreen()
    }
    if (Tempo > 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        Tempo += -1
    }
})
