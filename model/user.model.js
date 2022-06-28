const data = require('./data.json')

class UserModel {

    constructor() {
        this.users = data;
    }

    getUsers() {
        return this.users;
    }
}

module.exports = UserModel;
