const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = function(event, context, callback) {
  let data = JSON.parse(event.body);
  const msg = {
    to: data.to,
    from: process.env.EMAIL,
    subject: data.subject,
    text: data.body
  };
  sgMail.send(msg);

  const response = {
        statusCode: 200,
        body: JSON.stringify({"message":"email sent!"})
    };
    callback(null, response);
}