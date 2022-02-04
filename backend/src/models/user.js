import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    maxlength: 100
},
  password: {
    type: String,
    required: true,
  },
});

const UserInfo = mongoose.model('UserModel', userSchema);
module.exports = UserInfo;
