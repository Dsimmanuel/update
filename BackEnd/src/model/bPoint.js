const Mongoose = require ("mongoose")
const schema = Mongoose.Schema;
const boardingPoint = new schema({
   routeNo :{type : String,unique : true},
   stopNo : {type : String,unique : true},
   point : {type: String},
   time  : {type:String}
})
var BPoint = Mongoose.model("bPoint",boardingPoint);
module.exports = {BPoint}