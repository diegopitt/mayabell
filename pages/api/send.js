const sgMail = require('@sendgrid/mail')

export default async function(req, res) {
  sgMail.setApiKey('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')

  const { email, message } = req.body.data

  const content = {
    to: 'diego.pittaluga@gmail.com',
    from: 'diego.pittaluga@gmail.com',
    subject: `Nueva reservacion de ${email}`,
    html: `<p>${message}</p>`,
    // template_id: 'd-57cbf014a37340919bfbc813654fcdcc'
  }

  try {
    await sgMail.send(content)
    res.status(200).send('Message sent successfully.')
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('Message not sent.')
  }
}