/**
 * Controller for the notifications request
 */

const Notification = require('../models/notification.model');
/**
 *! 1. Accept a new notification request and return the tracking id.
 */
exports.acceptNotificationRequest = async (req, res) => {
    //? Read from request body
    const notificationObj = {
        subject: req.body.subject,
        content: req.body.content,
        recepientEmails: req.body.recepientEmails,
        requestor: req.body.requestor,
        ticketId: req.body.ticket
    }

        /**
  * ! 2. Check the notification status (if email is sent or not) Using the
  * ! tracking id
  */

    try {
       const notification = await Notification.create(notificationObj);

       return res.status(201).send({
           requestId: notification.ticketId,
           status: "Accepted Request -It's in progress"
       });
    } catch(err) {
        console.log(err.message);
        return res.status(500).send({message: "Something went wrong at backend"});
    }  
}
 