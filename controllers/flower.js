import express from 'express'
const flowers = express.Router()
import Flower from '../models/flower.js'

flowers.get('/', (req, res) => {
  Flower.find({}, (err, flowers) => {
    if (err) {
      res.status(400).json({ err: err.message })
    } else {
      res.status(200).json(flowers)
    }
  })
})

flowers.post('/', (req, res) => {
  Flower.create(req.body, (err, createdFlower) => {
    if (err) {
      res.status(400).json({ err: err.message })
    } else {
      res.send(createdFlower)
    }
  })
})

flowers.delete('/:id', (req, res) => {
  Flower.findByIdAndDelete(req.params.id, (err, deletedFlower) => {
    if (err) {
      res.status(400).json({ err: err.message })
    } else {
      res.status(200).json(deletedFlower)
    }
  })
})

flowers.put('/:id', (req, res) => {
  Flower.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedFlower) => {
    if (err) {
      res.status(400).json({ err: err.message })
    } else {
      res.status(200).json(updatedFlower)
    }
  })
})

export default flowers
