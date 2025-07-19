const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/express')
        console.log("Kết nối đến MongoDB thành công!");
    } catch (error) {
        console.log("Kết nối đến cơ sở dữ liệu thất bại!\n" + error);
    }
}

module.exports = { connect }