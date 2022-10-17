const Mongoose = require ("mongoose")
const schema = Mongoose.Schema;
const routeSchema = new schema({
   routeNo :{type : String},
})
var route = Mongoose.model("Route",routeSchema);
module.exports = {route}