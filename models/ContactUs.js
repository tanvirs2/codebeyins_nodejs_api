const mongoose = require('mongoose');
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
},{timestamps: true}
);

const ContactUs = mongoose.model('ContactUs', contactUsSchema);

module.exports = ContactUs;