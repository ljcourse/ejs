const express = require('express');
const morgan = require('morgan');
const app = express();
const db = require('./pkg/db/index');
const auth = require('./controllers/authController');
const sport = require('./controllers/sportController');

const cookieParser = require("cookie-parser");

db.init();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.set('view engine', 'ejs');
app.use(cookieParser());
app.use((req, res, next) => {
    console.log(req.cookies);
    next();
});

app.post('/auth/create-acc', auth.signUp);
app.post('/auth/login', auth.login);
app.post('/logout',auth.logout);

app.post('/view',sport.createBlog);
app.get('/view',auth.protect,sport.getBlogView);
app.post('/view/delete/:id',sport.deleteBlog);
app.post('/view/update/:id',sport.updateBlog)
app.get('/login',sport.getSport);

app.listen(process.env.PORT, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log('success');
});