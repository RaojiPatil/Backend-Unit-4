const {Schema,model} = require('mongoose');


const studentSchema = Schema({
    student_code:{type:String,required:true},
    batch:[{type:String,required:true}],
    current_status:[{type:String,required:true}],
   
    user_id:{
        type:Schema.Types.ObjectId,
        ref:"user",
        required:true
    }
},{
    versionKey:false,
    timestamps:true
})

module.exports = model("student",studentSchema);