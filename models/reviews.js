import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema({
    name: {type: String, required: true},
    comment: {type: String}
}, {timestamps: true})

export default mongoose.model('Reviews', reviewSchema);