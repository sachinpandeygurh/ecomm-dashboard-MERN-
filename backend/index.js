const express = require('express');
const cors = require('cors')
require('./db/config')
const User = require('./db/User')
const Product=require('./db/Products')
const app = express();

app.use(express.json())
app.use(cors())

app.post('/register',async(req, resp)=>{
    let user = new User(req.body)
    let result = await user.save();
    result =result.toObject()
    delete result.password
    resp.send(result)
    console.log(req.body);
})


app.post('/login', async (req, resp) => {
    try {
      console.log(req.body);
      if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select("-password");
        if (user) {
          resp.send(user);
        } else {
          resp.send("No user found");
        }
      } else {
        resp.send("No user found");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      resp.status(500).send("Internal Server Error");
    }
  });

  app.post('/addProduct', async(req, resp)=>{
    let product = new  Product(req.body);
    let result = await product.save()
    resp.send(result)
  })
  

app.listen(5000) 

