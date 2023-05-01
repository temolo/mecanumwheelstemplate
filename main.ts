function car_back () {
    mecanumRobot.Motor(LR.Upper_left, MD.Back, 50)
    mecanumRobot.Motor(LR.Lower_left, MD.Back, 50)
    mecanumRobot.Motor(LR.Upper_right, MD.Back, 50)
    mecanumRobot.Motor(LR.Lower_right, MD.Back, 50)
}
function car_left () {
    mecanumRobot.Motor(LR.Upper_left, MD.Back, 50)
    mecanumRobot.Motor(LR.Lower_left, MD.Back, 50)
    mecanumRobot.Motor(LR.Upper_right, MD.Forward, 50)
    mecanumRobot.Motor(LR.Lower_right, MD.Forward, 50)
}
function car_forward () {
    mecanumRobot.Motor(LR.Upper_left, MD.Forward, 50)
    mecanumRobot.Motor(LR.Lower_left, MD.Forward, 50)
    mecanumRobot.Motor(LR.Upper_right, MD.Forward, 50)
    mecanumRobot.Motor(LR.Lower_right, MD.Forward, 50)
}
function car_right () {
    mecanumRobot.Motor(LR.Upper_left, MD.Forward, 50)
    mecanumRobot.Motor(LR.Lower_left, MD.Forward, 50)
    mecanumRobot.Motor(LR.Upper_right, MD.Back, 50)
    mecanumRobot.Motor(LR.Lower_right, MD.Back, 50)
}
