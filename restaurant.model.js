import mongoose from 'mongoose';
const { Schema } = mongoose;

const restaurantSchema = new Schema({
  name:String,
  rating:Number,
  cuisines:[String],
  imageURL:String,
  location:String
});

let restaurantModel = mongoose.model('Restaurant', restaurantSchema);
export default restaurantModel;