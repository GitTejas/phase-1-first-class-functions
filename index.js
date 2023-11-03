function receivesAFunction(callback) {
    callback()
}

const returnsANamedFunction = () => {
    return function simple() {

    }
}

const returnsAnAnonymousFunction = () => {
    return function() {

    }
}
