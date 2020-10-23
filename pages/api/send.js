const sgMail = require('@sendgrid/mail')

export default async function(req, res) {
  sgMail.setApiKey(process.env.SGkey)
  const { name, checkin, checkout, nights,email, message, adults, children, roomType, phone} = req.body.data
  console.log(req.body.data)
  const content = {
    "from":{
      "email":"reservaciones@mayabell.mx"
   },
   "reply_to": email,
   "personalizations":[
      {
         "to":[
            {
              "email":"mayabellpalenque@gmail.com"
            }
         ],
         "dynamic_template_data":{
            "subject":`Nueva reservacion para ${roomType.toLowerCase()}`,
            "name":name,
            "type":roomType,
            "email":email,
            "adults":adults,
            "children":children,
            "checkin":checkin,
            "checkout":checkout,
            "nights":nights,
            "message":message,
            "phone":phone
          }
      }
   ],
   "template_id":"d-f0d865cb2f1a49a3abd79b87e171e251"
  }
  try {
    await sgMail.send(content)
    res.status(200).send('Message sent successfully.')
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('Message not sent.')
  }
}
//"email":"mayabell82@prodigy.net.mx"