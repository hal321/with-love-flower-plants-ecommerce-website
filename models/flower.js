import mongoose from 'mongoose'

const flowerSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    img: String,
    likes: { Number, default: 0 },
    price: Number,
  },
  { timestamps: true }
)

export default mongoose.model('Flower', flowerSchema)
