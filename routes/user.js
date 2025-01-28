var express = require('express');
let user = require("../controllers/user");
var router = express.Router();

let uploadfield = user.upload.fields([{ name: "profilePicture", maxCount: 1 }, { name: "coverPicture", maxCount: 1 }])

router.post('/create', uploadfield, user.userCreate);

router.get('/findAll', user.secure, user.userFind);

router.post('/userlogin', user.userlogin);

router.patch('/:id', user.secure, uploadfield, user.userUpdate);

router.delete('/:id', user.secure, user.userDelete);

module.exports = router;