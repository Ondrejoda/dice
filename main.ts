let pressed = false

let previous_state = false
let current_state = false

let start_time = 0.0
let end_time = 0.0
let measuring = false

let measure = () => {
    let rtn = 0.0
    if (!measuring) {
        start_time = control.millis()
    } else {
        end_time = control.millis()
        rtn = end_time - start_time
    }
    measuring = !measuring
    return rtn
}

let detect_change = () => {
    return current_state != previous_state
}

basic.forever(function () {
    current_state = input.buttonIsPressed(Button.A)

    if (detect_change()) {
        pressed = current_state
    }

    previous_state = current_state
})
