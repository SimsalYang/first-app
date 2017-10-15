var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27770/firstapp',{
    useMongoClient:true
});