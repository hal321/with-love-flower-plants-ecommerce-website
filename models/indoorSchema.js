import mongoose from 'mongoose'

const indoorSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    img: String,
    description: String,
    sunlight: String,
    water: String,
    fertilizer: String,
    price: Number,
  },
  { timestamps: true }
)

export default mongoose.model('Indoor', indoorSchema)
