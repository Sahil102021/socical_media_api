var express = require('express');
let like = require("../controllers/like");
let user = require("../controllers/user");
var router = express.Router();

router.post('/create', user.secure, like.likeCreate);

router.get('/findAll', user.secure, like.likeFind);

router.patch('/:id', user.secure, like.likeUpdate);

router.delete('/:id', user.secure, like.likeDelete);

module.exports = router;
