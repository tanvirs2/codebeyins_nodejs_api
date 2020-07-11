const ContactUs = require('../models/ContactUs');

exports.getContactUsDataById = async (req, res) => {
    try {
        const contactUs = await ContactUs.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
                contactUs
            }
        });
    } catch (e) {
        res.status(404).json({
            status: 'failed',
            msg: "unable to load data"
        });
    }
};

exports.getContactUsData = async (req, res) => {

    try {
        const contactUs = await ContactUs.find().sort({createdAt: 1});

        res.status(200).json({
            status: 'success',
            data: {
                contactUs
            }
        });
    } catch (e) {
        res.status(404).json({
            status: 'failed',
            msg: "unable to load data"
        });
    }
};

exports.storeContactUsData = async (req, res) => {
    const contactUs = new ContactUs(req.body);

    //console.log(req.body);

    try {
        await contactUs.save();
        res.status(200).json({
            status: 'success',
            data: {
                contactUs
            }
        });
    } catch (e) {
        res.status(404).json({
            status: 'failed',
            msg: "unable to save data"
        });
    }
};