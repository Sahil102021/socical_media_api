var express = require('express');
let story = require("../controllers/story");
let user = require("../controllers/user");
var router = express.Router();

router.post('/create', user.secure,story.storyCreate);

router.get('/findAll', user.secure, story.storyFind);

router.patch('/:id', user.secure, story.storyUpdate);

router.delete('/:id', user.secure, story.storyDelete);

module.exports = router;
