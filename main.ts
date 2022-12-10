let just_pressed = false
let just_released = false

let previous_state = false
let current_state = false

let start_time = 0.0
let end_time = 0.0
let measuring = false

let detect_change = () => {
    return current_state != previous_state
}

let start_measure = () => {
    start_time = control.millis()
}

let end_measure = () => {
    end_time = control.millis()
    return end_time - start_time
}

let handle_button = () => {
    just_pressed = false
    just_released = false
    current_state = input.buttonIsPressed(Button.A)

    if (detect_change() && current_state) {
        just_pressed = true
    }
    if (detect_change() && !current_state) {
        just_released = true
    }

    previous_state = current_state
}

basic.forever(function () {
    handle_button()
    if (just_pressed) {
        start_measure()
    }
    if (just_released) {
        basic.showNumber(Math.round(end_measure() / 1000))
    }

})
