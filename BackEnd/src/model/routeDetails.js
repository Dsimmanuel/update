const Mongoose = require ("mongoose")
const schema = Mongoose.Schema;
Mongoose.connect("mongodb+srv://Immanuel:immanuel@cluster0.rnux5pm.mongodb.net/CollegeBusDB?retryWrites=true&w=majority")
const routeSchema = new schema({
    busId : {type: Number,required :true},
    busNo : {type: String,required :true},
    totalSeats : {type: Number,required:true},
    image : {data: Buffer,contentType: String},
    boardingPoints : [type= String]
})
var routeDetails = Mongoose.model("RouteDetails",routeSchema);
module.exports = {routeDetails}