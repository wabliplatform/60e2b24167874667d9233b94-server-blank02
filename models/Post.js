
const { PostPimageSchema } =require('./PostPimage');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
Underscoreid:String , 


ptitle:String , 


ptext:String , 


pimage:  
PostPimageSchema
 



})

module.exports = {
  Post : mongoose.model('post', postSchema),
}

