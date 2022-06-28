const express = require('express');
const adminRouter = require('./routes/admin');
const path = require("path");
// xử dụng thư biên body-parser để pare dữ liệu từ request một cách nhanh chóng
const bodyParser = require('body-parser');

const app = new express();

app.use(bodyParser.urlencoded({
    extended: true
}));
// parse application/json
app.use(bodyParser.json())

// static file
app.use(express.static(__dirname + '/public'))

// đặt template engine mặc định là ejs
app.set('view engine', 'ejs');
// set đường dẫn mặc định của thư mục view
app.set('views', path.join(__dirname, 'views'));
// router
app.use('/admin', adminRouter)

app.listen(8080, 'localhost', () => {
    console.log('server running on port 8080')
})
