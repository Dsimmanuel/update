const Mongoose = require ("mongoose")
const schema = Mongoose.Schema;
Mongoose.connect("mongodb+srv://Immanuel:immanuel@cluster0.rnux5pm.mongodb.net/CollegeBusDB?retryWrites=true&w=majority")
const driverSchema = new schema({
    name : {type: String,required :true},
    userName : {type: String,required :true},
    contactNumber :{type: Number,required :true},
    email :{type:String,required :true},
    driverId : {type: Number,required :true},
    busId : {type:Number},
    password : {type: String,required :true}
})
var dregister = Mongoose.model("Dregisters",driverSchema);
module.exports = {dregister}