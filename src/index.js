module.exports = function reverse (n) {
    return String(n).split('').reverse().join('').replace(/^0|[-]+$/g,"")
}
