var express = require('express');
var router = express.Router();
var PostModel = require('./models/post');

/* GET users lists. */
router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET posts lists */
router.get('/posts', function(req, res, next) {
  res.json({postsList: ['文章1', '文章2', '文章3']});
});

/* POST posts */
router.post('/posts',function(req,res,next){
  var title = req.body.title;
  var content =req.body.content;
  res.send({title,content});//收到数据后，又把数据返回给请求方
});

/* POST post content */
router.post('/posts',function(req,res,next){
  var title = req.body.title;
  var content = req.body.content;

  var post = new PostModel();
  post.title = title;
  post.content = content;
  post.save(function(err,doc){
    res.json({success:true});
  });
});

/* GET posts lists */
router.get('/posts',function(req,res,next){
  PostModel.find({},{},function(err,posts){
    if(err){
      res.json({success:false});
      return;
    }
    res.json({success:true,postsList：posts});
  });
});

module.exports = router;