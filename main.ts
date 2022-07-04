bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Happy)
    flag += 1
    while (flag == 1) {
        blue = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
        serial.writeString("" + (blue))
        serial.writeLine("")
        if (blue == "a") {
            pins.digitalWritePin(DigitalPin.P16, 1)
        } else if (blue == "b") {
            pins.digitalWritePin(DigitalPin.P16, 0)
        }
    }
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
})
let blue = ""
let flag = 0
serial.redirectToUSB()
