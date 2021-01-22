let Llum = 0
radio.setGroup(21)
basic.forever(function () {
    Llum = input.lightLevel() * 100 / 255
    radio.sendValue("llum", Llum)
    led.plotBarGraph(
    Llum,
    100
    )
})
