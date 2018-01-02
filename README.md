# emailLambda
A simple AWS Lambda function that uses the SendGrid API to send an email

## Getting Started

1. Sign up for [SendGrid](https://sendgrid.com/solutions/email-api/) account and create an API key if you do not already have one.
2. Create an AWS account if you do not already have one.
3. Create a [Lambda function](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-create-api-as-simple-proxy-for-lambda.html#api-gateway-proxy-integration-create-lambda-backend) with the aws cli or by upload a zipped version of the index.js file and the node modules directory. Make sure they are in the root directory of your Lambda function.
4. Set an environment variable SENDGRID_API_KEY to the api key you created with your SendGrid account and an environment variable EMAIL to the email address you would like the email(s) to be sent from. 
5. Configure AWS API Gateway to send the data from the POST request to your function following the instruction provided in the AWS docs from step 3.

The function can be tested manually by sending a POST request with the payload in the shape below to the address provided by the API Gateway.

payload: `{ "to": "example@example.com", "subject": "Your Subject", "body": "The text of the email" }`

The function will reply with a 200 OK and a json body: `{"message":"email sent!"}`
