const express=require('express');
const router=express.Router();
// const movieModel=require('../models/movie');
const {getMovie,getAllmovie,createAmovie,getAmovie,updateAmovie,deleteAmovie}=require('../controllers/movie')
router.route('/').get(getAllmovie).post(createAmovie)
router.route('/:id').get(getMovie,getAmovie).patch(getMovie,updateAmovie).delete(getMovie,deleteAmovie)
module.exports=router;
















// router.get('/',(request,response)=>{
//     response.send(`displaying a movie`)

// })
// router.post('/',(request,response)=>{
//     response.send(`adding a movie details`)
// })
// router.get('/:id',(request,response)=>{
//     response.send(`displaying a movie with id ${request.params.id}`)

// })
// router.patch('/:id',(request,response)=>{
//     response.send(`updating a movie with id ${request.params.id}`)


// })
// router.delete('/',(request,response)=>{
//     response.send(`deleting a movie with id ${request.params.id}`)

// })
// module.exports=router;