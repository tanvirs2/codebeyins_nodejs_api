const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');



const contactUsRoutes = require('./routes/contactUsRoutes');

const app = express();

//app.set('view engine', 'ejs');

const corsSupport = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Method', 'GET, POST, PATCH, DELETE');

    next();
};

app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(corsSupport);


app.use('/api/v1/contact-us', contactUsRoutes);



mongoose.connect('mongodb://localhost:27017/code_beyins', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        app.listen(8081, ()=>{
            console.log('8081: code B server restart...');
        })
    })
    .catch((e)=>{
        console.log(e);
    })
;