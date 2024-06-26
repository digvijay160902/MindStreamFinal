const mongoose = require('mongoose');
const contactSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        }
    },

    phoneNumber:{
        type: String
    },

    subject:{
        type: String,
    },

    message:{
        type: String,
        required:true
    }
    
});
module.exports = mongoose.model("Contact", contactSchema);
