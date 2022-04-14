let sonar2 = 0
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
RingbitCar.forward()
basic.forever(function () {
    sonar2 = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P0)
    if (sonar2 < 20 && sonar2 != 0) {
        RingbitCar.freestyle(0, 100)
        basic.pause(400)
    } else {
        RingbitCar.forward()
    }
})
