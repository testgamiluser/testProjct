const express=require('express')
require('dotenv').config()
const paymentRouter=require('./paymentRouter')

const app =express()
//just a comment


app.get('/',(req,res)=>{
    res.send(`
    <h1>Pay Rs 1 </h1>
    <a href="http://localhost:4000/payment/pay/10">click here to pay</a>
    `)
})

app.use('/payment',paymentRouter)




app.listen(4000,()=>'server runs..')
