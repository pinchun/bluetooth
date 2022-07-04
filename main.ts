bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
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
        if (blue == "c") {
            pins.servoWritePin(AnalogPin.P8, 0)
        } else if (blue == "d") {
            pins.servoWritePin(AnalogPin.P8, 180)
        }
        if (blue == "e") {
            pins.servoWritePin(AnalogPin.P9, 0)
        } else if (blue == "f") {
            pins.servoWritePin(AnalogPin.P9, 100)
        }
        if (blue == "g") {
            pins.analogWritePin(AnalogPin.P12, 500)
            pins.analogWritePin(AnalogPin.P13, 1023)
        } else if (blue == "h") {
            pins.analogWritePin(AnalogPin.P12, 0)
            pins.analogWritePin(AnalogPin.P13, 0)
        }
        if (blue == "1") {
            basic.showIcon(IconNames.Happy)
        } else if (blue == "2") {
            basic.showIcon(IconNames.Sad)
        } else if (blue == "3") {
            basic.showIcon(IconNames.Asleep)
        } else if (blue == "4") {
            basic.showIcon(IconNames.Heart)
        } else if (blue == "5") {
            basic.showIcon(IconNames.Duck)
        } else if (blue == "6") {
            basic.showArrow(ArrowNames.North)
        } else if (blue == "0") {
            basic.showIcon(IconNames.House)
        }
    }
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
let blue = ""
let flag = 0
serial.redirectToUSB()
basic.showIcon(IconNames.House)
