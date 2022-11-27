const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (number) => {
    return function(fare){
        return fare * number
    }
}

const fareDoubler = (fare) => {
    return createFareMultiplier(2)(fare)
}

const fareTripler = (fare) => {
    return createFareMultiplier(3)(fare)
}

const selectDifferentDrivers = (drivers, func) => {
    if (func == returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers)
    }
    else {
        return returnLastTwoDrivers(drivers)
    }
}