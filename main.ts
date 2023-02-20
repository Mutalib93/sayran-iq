basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P5, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P6, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P7, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P5, 0)
        pins.digitalWritePin(DigitalPin.P6, 0)
        pins.digitalWritePin(DigitalPin.P7, 0)
        basic.pause(500)
    }
})
