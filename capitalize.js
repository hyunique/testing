function capitalize(str) {
    const firstLetter = str.slice(0, 1).toUpperCase()
    const restLetter = str.slice(1)
    return firstLetter + restLetter
}

module.exports = capitalize;