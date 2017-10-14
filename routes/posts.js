var express = require('express');
var router = express.Router();

/* GET posts page. */
router.get('/', function(req, res, next) {
  res.render('posts', { title: 'post'});
});

/* GET 获取 postsList 数据 */
router.get('./list',function(req,res,next){
    res.render({postsList:['文章1','文章2','文章3']});
});
module.exports = router;
