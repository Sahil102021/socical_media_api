var express = require('express');
let conversation = require("../controllers/conversation");
let user = require("../controllers/user");
var router = express.Router();

router.post('/create', user.secure,conversation.conversationCreate);

router.get('/findAll', user.secure, conversation.conversationFind);

router.patch('/:id', user.secure, conversation.conversationUpdate);

router.delete('/:id', user.secure, conversation.conversationDelete);

module.exports = router;
