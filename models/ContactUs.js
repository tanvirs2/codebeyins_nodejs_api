
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

/*knex.schema.createTable('contact_us', function(table) {
    table.increments('id').primary();
    table.string('name');
    table.string('message');
}).then(function() {
        // Table creation succeeded
        console.log('Table creation succeeded');
    })
    .catch(function(e) {
        // Table creation did not succeed.
        console.log(e);
    });*/


const bookshelf = require('bookshelf')(knex);

// Defining models
const ContactUs = bookshelf.model('User', {
    tableName: 'contact_us'
});
async function save_city() {

    try {

        let val = await ContactUs.forge({ 'name': 'Kyiv', 'message': '2884000'}).save();
        console.log(val.toJSON());
    } catch (e) {

        console.log(`Failed to save data: ${e}`);
    } finally {

        knex.destroy();
    }
}

//save_city();
/*
new User({id: 2}).fetch().then((user) => {
    console.log(user.toJSON())
}).catch((error) => {
    console.error(error)
})*/



module.exports = ContactUs;