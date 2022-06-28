const express = require('express');
const UserController = require("../controller/admin/user.controller.js");

const router = express.Router();

let userController = new UserController();

router.get('/users', function (req, res, next) {
    userController.getAllUsers(req, res, next)
})

module.exports = router;
