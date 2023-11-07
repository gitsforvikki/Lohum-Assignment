const { request, response } = require('express');
const express  = require('express');
const router = express.Router();
const {body , validationResult}  = require('express-validator');
const Event = require('../model/Events');


//upload event
router.post('/upload' ,[
    body('name').notEmpty().withMessage('Name required.'),
    body('image').notEmpty().withMessage('Image required.'),
    body('date').notEmpty().withMessage('Date required.'),
    body('type').notEmpty().withMessage('Type required.'),
    body('price').notEmpty().withMessage('Price required.'),
    body('info').notEmpty().withMessage('Information required.')

] , async (request , response)=>{
    let errors = validationResult(request);
    if(!errors.isEmpty()){
        return response.status(401).json({errors :errors.array()});
    }
    try{
        let  {name , image , date , type , price , info} = request.body;
        
        //save to database
        let event = new Event({ name , image , date , type , price , info});
        event = await event.save();
        response.status(200).json({msg:'Event upload success.'});      
    }
    catch(error){
        console.error(error);
        response.status(500).json({
            errors : [{msg : errors.message }]
        })
    }
    
});


//get ALL events
router.get('/free', async(request , response)=>{
   try{
        //check if any events is available or not
        let events = await Event.find({});
        if(events.length == 0){
            return response.status(401).json({ msg : 'No FREE events'});
        };
        response.status(200).json({
            event : events
        })

   }
   catch(error){
       console.log(error);
       response.status(500).json({
           errors : [{errors : errors.message}]
       })

   }
});







module.exports = router;