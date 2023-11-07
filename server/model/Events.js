const  mongoose =  require('mongoose');

const EventSchema =  new mongoose.Schema({
    name : {type : String , require : true},
    image : {type : String , require : true},
    date : {type : String , require : true},
    type : {type : String , require : true},
    price : {type : Number , require : true},
    info : {type : String , require : true},
    created : {type : Date , default : Date.now}

});

const Event = mongoose.model('event' , EventSchema);

module.exports = Event;