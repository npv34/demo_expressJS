const UserModel = require("../../model/user.model.js");

class UserController {

    constructor() {
        this.userModel = new UserModel()
    }

     getAllUsers(req, res, next) {
         let data = this.userModel.getUsers();
        // trả dữ liệu từ model cho views để hiển thị danh sách
        res.render('users/list', {users: data});
    }

    showFormAdd(req, res, next) {
        res.render('users/add')
    }

    async addUser(req, res, next) {
        // lay du lieu tu request su dung
        let dataRequest = req.body;
        await this.userModel.addUser(dataRequest);
        res.redirect(301, '/admin/users');
    }
}

module.exports = UserController;
