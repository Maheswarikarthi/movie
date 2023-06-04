const mongoose=require('mongoose');
const movieSchema=new mongoose.Schema({
    moviename:{
        type:String,
        require:true
    },
    genre:{
        type:String,
        require:true

    },
    language:{
        type:String,
        require:true
    },
    releasedDate:{
        type:Date,
        require:true
    },
    ratings:{
        type:String,
        require:true
    }
});
module.exports=mongoose.model('movieModel',movieSchema)