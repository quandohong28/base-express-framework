const mongoose = require('mongoose')
require('dotenv').config()

async function connect() {
    const dbName = process.env.DB_NAME || 'express'
    const port = process.env.DB_PORT || 27017

    try {
        await mongoose.connect(`mongodb://localhost:${port}/${dbName}`)
        console.log("Kết nối đến MongoDB thành công!")
    } catch (error) {
        console.log("Kết nối đến cơ sở dữ liệu thất bại!\n" + error)
    }
}

module.exports = { connect }