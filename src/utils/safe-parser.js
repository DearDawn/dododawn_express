function safeParser(str) {
    let res = null
    try {
        res = JSON.parse(str)
    } catch (error) { }
    return res
}

module.exports = safeParser