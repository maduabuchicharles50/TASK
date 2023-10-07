const mongoose = require('mongoose');
const validator = require('validator')
const User = mongoose.model('User',{
   name:{
       type: String,
       required:true
   },
   email:{
       type: String,
       required: true,
       trim:true,
       lowercase:true,
       validate(value){
           if (!validator.isEmail(value)){
               throw new Error('email is not valid')
           }
        }
   },
   age: {
       type:Number,
       default: 0,
       validate(value){
           if (value < 0){
               throw new Error('age must be a positive number')
           }
       }
   },
   password: {
       type: String,
       required: true,
       trim:true,
       minlength:7,
       validate(value){
            if (value.toLowerCase().includes('password')){
                throw new Error("password cannot contain 'password'")
            }
        }
   }
})

const Person = new User({
    name:"John",
    age: 4,
    email:'john@gmail.io    ',
    password:'password'
})

Person.save().then(() => {
console.log(Person);
}).catch((error) => {
console.log('Error', error);
})


module.exports = User