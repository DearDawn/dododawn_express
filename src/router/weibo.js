const express = require('express')
const { body, validationResult } = require('express-validator');

const router = express.Router()
const models = require('../../database/models')

router.post('/create',[body('content').exists()], async (req, res, next) => {
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            throw new Error(JSON.stringify(errors.array()))
        }
        const weibo = await models.Weibo.create({
            account: '7777777',
            content: '哈哈哈哈'
        })
        res.json({
            message: 'add',
            weibo
        })
    } catch (error) {
        next(error)
    }
})

router.get('/update/:id', async (req, res, next) => {
    try {
        const body = req.body
        const query = req.query
        const params = req.params
        const weibo = await models.Weibo.update({
            account: '7777777',
            content: '哈哈哈哈我是糖糖'
        }, {
            where: { id }
        })
        res.json({
            message: 'update',
            weibo,
            body,
            params,
            query
        })
    } catch (error) {
        next(error)
    }
})

router.post('/del/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const weibo = await models.Weibo.update({
            status: -1
        }, {
            where: { id }
        })
        res.json({
            message: 'del',
            weibo
        })
    } catch (error) {
        next(error)
    }
})

router.all('/get/:id', async (req, res, next) => {
    try {
        const { id } = req.params

        const weibo = await models.Weibo.findAll({ where: { id } })
        res.json({
            message: 'get',
            weibo
        })
    } catch (error) {
        next(error)
    }
})

module.exports = router