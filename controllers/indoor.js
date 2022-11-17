import express from 'express'
const indoor = express.Router()
import Indoor from '../models/indoorSchema.js'

indoor.get('/', (req, res) => {
  Indoor.find({}, (err, indoor) => {
    if (err) {
      res.status(400).json({ err: err.message })
    } else {
      res.status(200).json(indoor)
    }
  })
})

indoor.post('/', (req, res) => {
  Indoor.create(req.body, (err, createdIndoor) => {
    if (err) {
      res.status(400).json({ err: err.message })
    } else {
      res.send(createdIndoor)
    }
  })
})

indoor.delete('/:id', (req, res) => {
  Indoor.findByIdAndDelete(req.params.id, (err, deletedIndoor) => {
    if (err) {
      res.status(400).json({ err: err.message })
    } else {
      res.status(200).json(deletedIndoor)
    }
  })
})

indoor.put('/:id', (req, res) => {
  Indoor.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedIndoor) => {
    if (err) {
      res.status(400).json({ err: err.message })
    } else {
      res.status(200).json(updatedIndoor)
    }
  })
})

export default indoor
