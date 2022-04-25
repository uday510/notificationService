const mongoose = require("mongoose");



const notificationSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: true
    },
    ticketId: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    recepientEmails: {
        type: [String],
        required: true
    },
    requestor: {
        type: String
    },
    sentStatus: {
        type: String,
        required: true,
        default: "UN_SENT" // SENT UN_SENT
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => {
            return Date.now();
        }
    },
    updatedAt: {
        type: Date,
        immutable: true,
        default: () => {
            return Date.now();
        }
    }
});

module.exports = mongoose.model("notification", notificationSchema);