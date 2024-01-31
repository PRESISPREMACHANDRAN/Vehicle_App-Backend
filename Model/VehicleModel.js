const mongoose = require("mongoose");
const vehicleSchema = mongoose.Schema({
  modelName: String,
  yearOfManufacture: String,
  fuelType: String,
  tankCapacity: String,
  mileage: String,
  color: String,
  transmissionType: String,
  vehicleImage: String,
});


var vehicleModel=mongoose.model("vehicles",vehicleSchema)

module.exports={vehicleModel}