const db = require("../config/db");

class Post {
  constructor(userId, username, password) {
    this.userId = userId;
    this.username = username;
    this.password = password;
  }
  saveUser() {
    let sql = `INSERT INTO tiedot (userId, username, password) VALUES ('${this.userId}', '${this.username}', '${this.password}')`;
    return db.execute(sql);
  }
  static fetchAll() {
    let sql = `SELECT * FROM tiedot`;
    return db.execute(sql);
  }
  static fetchUser(userId) {
    let sql = `SELECT * FROM tiedot WHERE userId = '${userId}'`;
    return db.execute(sql);
  }
  static deleteUser(userId) {
    let sql = `DELETE FROM tiedot WHERE userId = '${userId}'`;
    return db.execute(sql);
  }
  static putUser(userId, username, password) {
    let sql = `UPDATE tiedot SET username = '${username}', password = '${password}' WHERE userId = '${userId}'`;
    return db.execute(sql);
  }
}

module.exports = Post;
