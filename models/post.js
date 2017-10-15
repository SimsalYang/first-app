var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    titile:String,
    content:String
});

var PostModel = mongoose.model('Post',PostSchema);

module.exports = PostModel;