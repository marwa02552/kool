const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stateVal = {
  pending: 'pending',
  accepted: 'accepted',
  refused: 'refused'
};

const RequestSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: Number, // Corrected field name
  restaurantLocation: String,
  restaurantName: String,
  state: {
    type: String, // Specify the data type as String
    enum: Object.values(stateVal), // Define the enum values
    default: stateVal.pending // Set a default value
  }
});

module.exports = mongoose.model('Request', RequestSchema);
