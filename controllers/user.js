import express from 'express'
const users = express.Router()
import User from '../models/userSchema.js'
import bcrypt from 'bcrypt'

users.get('/', (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      res.status(400).json({ err: err.message })
    } else {
      res.status(200).json(users)
    }
  })
})

users.get('/login', (req, res) => {})

users.post('/', (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  User.create(req.body, (err, createdUser) => {
    if (err) {
      res.status(400).json({ err: err.message })
    } else {
      res.send(createdUser)
    }
  })
})

users.delete('/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id, (err, deletedUser) => {
    if (err) {
      res.status(400).json({ err: err.message })
    } else {
      res.status(200).json(deletedUser)
    }
  })
})

users.put('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedUser) => {
    if (err) {
      res.status(400).json({ err: err.message })
    } else {
      res.status(200).json(updatedUser)
    }
  })
})

export default users
