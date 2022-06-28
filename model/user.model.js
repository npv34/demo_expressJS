const data = require('./data.json');
const fs = require('fs')

class UserModel {

    constructor() {
        this.users = data;
    }

    getUsers() {
        return this.users;
    }

    addUser(user) {
        let idCurrentUser = +this.users[this.users.length - 1].id;
        user.id = idCurrentUser + 1;
        this.users.push(user);
        let file = fs.createWriteStream('./model/data.json');
        file.write(JSON.stringify(this.users));
    }
}

module.exports = UserModel;
