const UserModel = require("../../model/user.model.js");

class UserController {
    static name = "user";

    constructor() {
        this.userModel = new UserModel()
    }

     getAllUsers(req, res, next) {
         let data = this.userModel.getUsers();
        // trả dữ liệu từ model cho views để hiển thị danh sách
        res.render('users/list', {users: data});
    }
}

module.exports = UserController;
