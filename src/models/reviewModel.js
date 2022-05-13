
const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId


const reviewSchema = new mongoose.Schema({
    bookId: {
        type:ObjectId,
        //required:true,
        ref:"Book",
    },
    reviewedBy: {
        type:String,
        required:true,
        trim:true,
        default:'Guest',
        //value:reviewer's name
    },
    reviewedAt: {
        type:Date,
        //required:true,
    },
    rating: {
        type:Number,
        min: 1,
        max: 5,
        required:true,
        trim:true,
    },
    review: {
        type:String,
        trim:true,
    },
    isDeleted: {
        type:Boolean,
        default:false
    },
});


module.exports =mongoose.model("Review",reviewSchema)

