var express = require('express');
let message = require("../controllers/message");
let user = require("../controllers/user");
var router = express.Router();

router.post('/create', user.secure,message.messageCreate);

router.get('/findAll', user.secure, message.messageFind);

router.patch('/:id', user.secure, message.messageUpdate);

router.delete('/:id', user.secure, message.messageDelete);

module.exports = router;
