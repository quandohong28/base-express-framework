const homeRouter = require('./web/home')

function route(app) {
    app.use('/', homeRouter)
}

module.exports = route
