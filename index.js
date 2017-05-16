const express = require('express');
const cookieParser = require('cookie-parser');
const parser = require('body-parser').urlencoded({ extended: false });
const { getToken, getObject } = require('./token');

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

app.post('/dangnhap', parser, async (req, res) => {
    const { username, password } = req.body;
    const isExist = arrUser.some(e => e.username === username && e.password === password);
    if (!isExist) return res.send('Kiem tra thong tin dang nhap');
    const token = await getToken({ username });
    res.cookie('token', token);
    res.send('Dang nhap thanh cong');
});

app.get('/private', async (req, res) => {
    //kiem tra token => redirect neu chua dang nhap!!!
    //Xin chao + username
    try {
        const obj = await getObject(req.cookies.token);
        res.send(`Xin chao ${obj.username}`);
    } catch (e) {
        res.send('Vui long dang nhap lai!!!');
    }
});

const arrUser = [
    { username: 'teo', password: '123' },
    { username: 'ti', password: '234' },
    { username: 'tun', password: '567' },
];


