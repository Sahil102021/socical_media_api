var express = require('express');
let post = require("../controllers/post");
let user = require("../controllers/user");
var router = express.Router();

router.post('/create', user.secure, user.upload.array('image', 10), post.postCreate);

router.get('/findAll', user.secure, post.postFind);

router.patch('/:id', user.secure, user.upload.array('image', 10), post.postUpdate);

router.delete('/:id', user.secure, post.postDelete);

module.exports = router;
