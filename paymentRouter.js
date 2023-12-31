const { Router } = require("express");
const stripe = require('stripe')(process.env.SECREATE_KEY);

paymentRouter=Router()

paymentRouter.get('/pay/:amount',async(req,res,next)=>{
  let amount=req.query.amount


  let result= await stripe.checkout.sessions.create({
        line_items: [
            {
              price_data: {
                currency: "INR",
                unit_amount: 100,
                product_data: {
                  name: "name of the product",
                },
              },
              quantity: 1,
            },
          ],
          mode: "payment",
          success_url: "http://localhost:4000/success",
          cancel_url: "http://localhost:4000/faliure",
    })

    console.log(result)

    res.redirect(result.url)

    
})


paymentRouter.get('/success',(req,res)=>{
  res.send('<h1>payment Success</h1>')
})


paymentRouter.get('/failure',(req,res)=>{
  res.send('<h1>payment Failure</h1>')
})

module.exports= paymentRouter