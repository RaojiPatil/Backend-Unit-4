const {Schema,model} = require('mongoose');

const submissionsSchema = new Schema({
    evaluation_id:{type:String, required:true},
    answered_by:{type:Number,required:true},
    status:[{type:String, required:true}]
    
},{
    versionKey:false,
    timestamps:true
})

module.exports = model("submissions", submissionsSchema);