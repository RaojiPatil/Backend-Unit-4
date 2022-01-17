const {Schema,model} = require('mongoose');


const evaluationsSchema = Schema({
    title:{type:String,required:true},
    created_by:[{type:String,required:true}],
    start_date:[{type:String,required:true}],
    end_date:[{type:String,required:true}],
},{
    versionKey:false,
    timestamps:true
})

module.exports = model("evaluations",evaluationsSchema);