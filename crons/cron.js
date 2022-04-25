/**
 * ! We will take help of node-cron to repeat some lines of code at regular interval
 * 
 */

const cron = require("node-cron");

// var count = 0;
// cron.schedule('*/2 * * * * *', () => {   
//     console.log("Hello from cron", ++count);
// });

/**
 * ! I need to send emails
 * 
 * ! 1. Get the list of all the notifications to be sent
 * ! 2. Send email for each notifications
 * 
 */

