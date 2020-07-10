const mongoose = require('mongoose');


// Setting up the database connection
const knex = require('knex')({
    client: 'mysql',
    connection: {
        host     : '127.0.0.1',
        user     : 'root',
        password : '',
        database : 'test',
        charset  : 'utf8'
    }
});
const bookshelf = require('bookshelf')(knex);

// Defining models
const User = bookshelf.model('User', {
    tableName: 'users'
});

new User({id: 2}).fetch().then((user) => {
    console.log(user.toJSON())
}).catch((error) => {
    console.error(error)
})


const contactUsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    mail: {
        type: String,
        required: true,
        trim: true
    },
    message: {
        type: String,
        required: true,
        trim: true
    }
});

const ContactUs = mongoose.model('ContactUs', contactUsSchema);

module.exports = ContactUs;