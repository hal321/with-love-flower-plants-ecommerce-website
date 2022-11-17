import express from 'express'
const outdoor = express.Router();
import OutdoorModel from "../models/outdoor.js"

outdoor.get('/', (req, res)=>{
    OutdoorModel.find({}, (err, outdoorPlants)=>{
        if (err){
            res.status(400).json({err: err.message});
        }else{
            res.status(200).json(outdoorPlants);
        }
    })
})

outdoor.post('/', (req, res)=>{
    OutdoorModel.create(req.body, (err, createdOutdoor)=>{
        if (err){
            res.status(400).json({err: err.message});
        }else{
            res.send(createdOutdoor);
        } 
    })
})

outdoor.delete('/:id', (req, res)=>{
    OutdoorModel.findByIdAndDelete(req.params.id, (err, deletedOutdoor)=>{
        if (err){
            res.status(400).json({err: err.message});
        }else{
            res.status(200).json(deletedOutdoor);
        }
    })
})

outdoor.put('/:id', (req, res)=>{
    OutdoorModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedOutdoor)=>{
        if (err){
            res.status(400).json({err: err.message});
        }else{
            res.status(200).json(updatedOutdoor);
        }
    })
})

export default outdoor;