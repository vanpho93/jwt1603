const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.use(cookieParser());
app.listen(3000, () => console.log('Server started'));

app.get('/', (req, res) => {
    // res.cookie('AAA', '123');
    console.log(req.cookies.AAA);
    res.render('home');
});

app.get('/dangnhap', (req, res) => res.render('dangnhap'));

app.post('/dangnhap', (req, res) => {

});

app.get('/private', (req, res) => {
    //kiem tra token => redirect neu chua dang nhap!!!
    //Xin chao + username
});

const arrUser = [
    { username: 'teo', password: '123' },
    { username: 'ti', password: '234' },
    { username: 'tun', password: '567' },
];


