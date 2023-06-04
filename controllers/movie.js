const movieModel=require('../models/movie');
const getAllmovie=async(request,response)=>{
    // response.send('List of all to-do items')
    try{
        const movies=await movieModel.find();
        response.status(200).json(movies);
    }
    catch(error){
        console.log(error);
        response.status(500).json({message:error.message});
    }
}
const createAmovie=(async(request,response)=>{
    // response.send('creating a new to-do items')
//     response.json(request.body)
const newMovie= new movieModel({
    moviename: request.body.moviename,
    genre:request.body.genre,
    language:request.body.language,
    releasedDate:request.body.releasedDate,
    ratings:request.body.ratings
   })
   try{
    const movie = await newMovie.save();
    response.status(201).json(movie);
   }
   catch(error){
    console.log(error);
    response.status(500).json({message:error.message});
}


})
const getAmovie=(getMovie,async(request,response)=>{
    // response.send(`displaying item with id ${request.params.id}`)
    // response.json(request.body)
    response.status(200).json(response.movie);

})
const updateAmovie=(getMovie,async(request,response)=>{
    // response.send(`updating item with id ${request.params.id}`)
    // response.json(request.body)
    if(request.body.moviename!=null){
        response.movie.moviename=request.body.moviename;
    }
    if(request.body.genre!=null){
        response.movie.genre=request.body.genre;
    }
    if(request.body.language!=null){
        response.movie.language=request.body.language;
    }
    if(request.body.releasedDate!=null){
        response.movie.releasedDate=request.body.releasedDate;
    }
    if(request.body.ratings!=null){
        response.movie.ratings=request.body.ratings;
    }
    try{
        const updatedMovie=await response.movie.save();
        response.status(200).json(updatedMovie)
    }
    catch(error)
    {
        response.status(401).json({message:error.message})
    }


})
const deleteAmovie=(getMovie,async(request,response)=>{
    // response.send(`deleting item with id ${request.params.id}`)
    // response.json(request.body)
    try{
        await response.movie.deleteOne();
        response.json({message:`Deleted user ${response.movie.moviename}`})

    }
    catch(error){
        response.status(500).json({message:error.message})

    }

})
async function getMovie(request,response,next){
    let movie
    try{
        movie=await movieModel.findById(request.params.id)
        if(movie==null){
           return response.status(404).json({message:`cannot find movie with id ${request.params.id}`})
        }
}
    catch(error){
        return response.status(500).json({message:error.message})
    }
    response.movie=movie;
    next();
}
module.exports={getMovie,getAllmovie, createAmovie,getAmovie,updateAmovie,deleteAmovie}