import mongoose from 'mongoose'

const outdoorSchema = mongoose.Schema({
    name: {type: String, required: true},
    img: {type: String},
    description: {type: String},
    sunlight: {type: String}, water: {type: String}, fertilizer: {type: String},
    price: {type: Number}
}, {timestamps: true})

export default mongoose.model('Outdoor', outdoorSchema);