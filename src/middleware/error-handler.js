const safeParser = require('../utils/safe-parser')

function errorHandler(error, req, res, next) {
    if (error) {
        return res.status(500).json({
            status: 500,
            prompts: '服务器错误',
            data: '',
            message: safeParser(error.message) || error.message || 'server error'
        })
    }
    next()
}

module.exports = errorHandler