const express = require('express');
const app = express();
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const route = require('./routes/web');
const db = require('./config/database');

// Serve static files
app.use(express.static(path.join(process.cwd(), 'public')));

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', handlebars.engine({
    extname: '.hbs',
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Routes init
route(app);

// Connect to database
db.connect();

// App listening
const port = 8000;
app.listen(port, function () {
    console.log(`App is listening at http://localhost:${port}`);
});
