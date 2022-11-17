import express from 'express'
const review = express.Router();
import ReviewsModel from "../models/reviews.js"

review.get('/', (req, res)=>{
    ReviewsModel.find({}, (err, reviews)=>{
        if (err){
            res.status(400).json({err: err.message});
        }else{
            res.status(200).json(reviews);
        }
    })
})

review.post('/', (req, res)=>{
    ReviewsModel.create(req.body, (err, createdReview)=>{
        if (err){
            res.status(400).json({err: err.message});
        }else{
            res.send(createdReview);
        } 
    })
})

review.delete('/:id', (req, res)=>{
    ReviewsModel.findByIdAndDelete(req.params.id, (err, deletedReview)=>{
        if (err){
            res.status(400).json({err: err.message});
        }else{
            res.status(200).json(deletedReview);
        }
    })
})

review.put('/:id', (req, res)=>{
    ReviewsModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedReview)=>{
        if (err){
            res.status(400).json({err: err.message});
        }else{
            res.status(200).json(updatedReview);
        }
    })
})

export default review;