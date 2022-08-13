const { createPool } = require('mysql');
const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'Raj@1311'
});


module.exports.isUserExist = function (user) {

    return new Promise((resolve, reject) => {

        var sql = "SELECT * FROM rajdb1.users where name='" + user.name + "' and password='" + user.password + '\'';

        pool.query(sql, (err, response) => {
            if (err) {
                reject(err);
            }
            if (response.length != 0) {

                resolve({ "success": true, "userId": response[0].userId, "response": response });
                return;
            }
            else {

                resolve({ "success": false, "userId": null, "response": response });
                return;
            }

        });

    });

}

module.exports.addUser = function (user) {
    return new Promise((resolve, reject) => {
        this.isUserExist(user).then((flag) => {
            if (flag.success == true) {
                resolve({ success: false, userId: flag.response[0].userId, message: 'user already exists' });
                return;
            }
            var sql = "INSERT INTO rajdb1.users (name,password) VALUES ?";

            var values = [
                [
                    user.name,
                    user.password
                ]
            ];

            pool.query(sql, [values], function (err, response) {
                if (err) {
                    reject(err);
                }

                resolve({ success: true, userId: response.insertId });
                return;
            });

        }).catch((err) => {
            reject(err);
        });
    });

}

module.exports.loginUser = function (user) {
    return new Promise((resolve, reject) => {
        this.isUserExist(user).then((flag) => {
            if (flag.success == true) {
                resolve({ success: true, userId: flag.response[0].userId });
            }
            resolve({ success: false, reason: "user does not exist" });
        }).catch((err) => {
            reject(err);
        });
    });

}



module.exports.addArticles = function (article) {
    return new Promise((resolve, reject) => {
        var sql = "INSERT INTO rajdb1.article (userId, title, articleDescription, likes) VALUES ?";


        var values = [
            [
                article.userId,
                article.title,
                article.article,
                article.likes
            ]
        ];
        pool.query(sql, [values], (err, response) => {
            if (err) {
                reject(err);
            }
            
            resolve(response);
        });
    });

}

module.exports.getAllArticles = () => {
    return new Promise((resolve, reject) => {
        var sql = 'Select * from rajdb1.article';
        pool.query(sql, (err, response) => {
            if (err) {
                reject(err);
                return;
            }
            else {
                resolve(response);
            }

        });
    });
}

module.exports.addLike = (article) => {
    return new Promise((resolve, reject) => {
       
        var sql = "UPDATE rajdb1.article SET likes="+article.likes+" where articleId=" + article.articleId;
        pool.query(sql, (err, response) => {
            if (err) {
                reject(err);
                return;
            }
            else {
                resolve(response);
            }

        });
    });
}

