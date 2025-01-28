var express = require('express');
let comment = require("../controllers/comment");
let user = require("../controllers/user");
var router = express.Router();

router.post('/create', user.secure,comment.commentCreate);

router.get('/findAll', user.secure, comment.commentFind);

router.patch('/:id', user.secure, comment.commentUpdate);

router.delete('/:id', user.secure, comment.commentDelete);

module.exports = router;
