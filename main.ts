function car_back () {
    mecanumRobot.Motor(LR.Upper_left, MD.Back, speedNormal)
    mecanumRobot.Motor(LR.Lower_left, MD.Back, speedNormal)
    mecanumRobot.Motor(LR.Upper_right, MD.Back, speedNormal)
    mecanumRobot.Motor(LR.Lower_right, MD.Back, speedNormal)
}
function car_left () {
    mecanumRobot.Motor(LR.Upper_left, MD.Back, speedNormal)
    mecanumRobot.Motor(LR.Lower_left, MD.Back, speedNormal)
    mecanumRobot.Motor(LR.Upper_right, MD.Forward, speedNormal)
    mecanumRobot.Motor(LR.Lower_right, MD.Forward, speedNormal)
}
function car_forward () {
    mecanumRobot.Motor(LR.Upper_left, MD.Forward, speedNormal)
    mecanumRobot.Motor(LR.Lower_left, MD.Forward, speedNormal)
    mecanumRobot.Motor(LR.Upper_right, MD.Forward, speedNormal)
    mecanumRobot.Motor(LR.Lower_right, MD.Forward, speedNormal)
}
function car_right () {
    mecanumRobot.Motor(LR.Upper_left, MD.Forward, speedNormal)
    mecanumRobot.Motor(LR.Lower_left, MD.Forward, speedNormal)
    mecanumRobot.Motor(LR.Upper_right, MD.Back, speedNormal)
    mecanumRobot.Motor(LR.Lower_right, MD.Back, speedNormal)
}
let distance_RIGHT = 0
let distance_LEFT = 0
let distance = 0
let speedNormal = 0
basic.showIcon(IconNames.Surprised)
speedNormal = 30
basic.forever(function () {
    distance = mecanumRobot.ultra()
    if (distance < 20) {
        car_back()
        mecanumRobot.state(MotorState.stop)
        basic.pause(500)
        // turn head LEFT
        mecanumRobot.setServo(180)
        basic.pause(500)
        distance_LEFT = mecanumRobot.ultra()
        basic.pause(500)
        mecanumRobot.setServo(0)
        basic.pause(500)
        distance_RIGHT = mecanumRobot.ultra()
        basic.pause(500)
        if (distance_LEFT > distance_RIGHT) {
            car_left()
            mecanumRobot.setServo(90)
            basic.pause(300)
        } else {
            car_right()
            mecanumRobot.setServo(90)
            basic.pause(300)
        }
    } else {
        car_forward()
    }
})
