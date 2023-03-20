const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    number:{
        type: Number,
    },
    activityName:{
        type: String
    },
    amountSpent: {
        type: Number
    },
    date:{
        type: Date
    },
    radioData:{
        type: String
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
        // required: true,
    }


})


const Form = mongoose.model('Form', formSchema);

module.exports = Form;
