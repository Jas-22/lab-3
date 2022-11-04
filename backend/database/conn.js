const mongoose=require('mongoose');


  mongoose.connect("mongodb+srv://jaskirat:Qwertyuiop123@liowolf.radtq.mongodb.net/?retryWrites=true&w=majority")
  .then(()=>{console.log('connect')})
  .catch((err)=>{
      console.log(err);
  })

  mongoose.set('debug', true)

  module.exports=mongoose;