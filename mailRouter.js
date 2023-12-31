const mailer=require('nodemailer')
const otpGen=require('otp-generator')
let transporter=mailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "testgamiluser@gmail.com",
      pass: "ofgyvhmdcgkxuxiq",
    },
  })


  const sendMail=(mailId)=>{
    let otp=otpGen.generate(4,{digits:true,lowerCaseAlphabets:true,upperCaseAlphabets:false})
    transporter.sendMail({to:mailId,subject:'test',html:`<div>
    <h1>hai user</h1>
    <p>your otp is :${otp}</p>
    </div>
    `})
    .then(res=>console.log('mail sent'))
    .catch(err=>console.log(err))
  }

  sendMail('nmukilan4@gmail.com')