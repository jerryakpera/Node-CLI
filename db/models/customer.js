// Bring in mongoose
const mongoose = require("mongoose")
// Import unique validator
const uniqueValidator = require('mongoose-unique-validator');

// Create customer Schema
const customerSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
})

// add unique validator to make sure email and phone are unique
customerSchema.plugin(uniqueValidator)
// Export model
const customerModel = mongoose.model("customers", customerSchema)

module.exports = customerModel