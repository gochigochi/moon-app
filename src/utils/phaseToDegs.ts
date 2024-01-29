export const phaseToDegs = (phase : string) => {

    switch (phase) {
        case "New Moon":
            return 0
            break
        case "Waxing Crescent":
            return 45
            break
        case "First Quarter":
            return 90
            break
        case "Waxing Gibbous":
            return 135
            break
        case "Full Moon":
            return 180
            break
        case "Waning Gibbous":
            return 135
            break
        case "Last Quarter":
            return 90
            break
        case "Waning Crescent":
            return 45
            break
        default:
            return 45
    }
}