const Mongoose = require ("mongoose")
const schema = Mongoose.Schema;
Mongoose.connect("mongodb+srv://Immanuel:immanuel@cluster0.rnux5pm.mongodb.net/CollegeBusDB?retryWrites=true&w=majority")
const complaintSchema = new schema({
    happend : {type: String,required :true},
    right : {type: String,required :true},
    
    
})
var complaint = Mongoose.model("complaints",complaintSchema);
module.exports = {complaint}