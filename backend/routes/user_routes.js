var router = require("express").Router();
var userController = require('../controllers/usersController');

router.route('/login').post(userController.login);
router.route('/register').post(userController.register);
router.route('/addArticle').post(userController.addArticle);
router.route('/getAllArticles').get(userController.getAllArticles);

router.route('/addLike').post(userController.addLike);

module.exports=router;

//router.route('/sendPhoneOTP').post(registerController.sendPhoneOTP);