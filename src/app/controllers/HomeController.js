// const User = require('../model/User')

class HomeController {
    index(req, res) {
        // User.find({}, function (err, users) {
        //     if (!err) {
        //         res.json(users)
        //         return
        //     }
        //     res.status(400).json({ error: 'ERRROR!' })
        // })

        const links = {
            nodejs: {
                url: 'https://nodejs.org/',
                text: 'NodeJS',
                style: 'text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
            },
            express: {
                url: 'https://expressjs.com/',
                text: 'ExpressJS',
                style: 'text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
            },
            mongo: {
                url: 'https://www.mongodb.com/',
                text: 'MongoDB',
                style: 'text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
            },
            tailwind: {
                url: 'https://tailwindcss.com/',
                text: 'TailwindCSS',
                style: 'text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
            },
            handlebars: {
                url: 'https://handlebarsjs.com/',
                text: 'Handlebars',
                style: 'text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
            },
        }

        res.render('pages/home', { links })
    }
}

module.exports = new HomeController