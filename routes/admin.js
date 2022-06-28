const express = require('express');
const UserController = require("../controller/admin/user.controller.js")
const router = express.Router();

let userController = new UserController();

router.get('/users', function (req, res, next) {
    userController.getAllUsers(req, res, next)
})

router.get('/users/create', function (req, res, next) {
    userController.showFormAdd(req, res, next)
})

router.post('/users/create', function (req, res, next) {
    userController.addUser(req, res, next)
})

module.exports = router;
