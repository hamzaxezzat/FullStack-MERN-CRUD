import mongoose from 'mongoose';

const PropertySchema = new mongoose.Scheme({
    title: {type:String , required:true},
    description: {type:String , required:true},
    propertyType: {type:String , required:true},
    location: {type:String , required:true},
    price: {type:number , required:true},
    photo: {type:String , required:true},
    creator: [{type:mongoose.Scheme.Types.ObjectId,ref:'User'}]
    // creator: Every property belonge to user or creator
})

const propertyModel = mongoose.model('Property',PropertySchema)
export default propertyModel;