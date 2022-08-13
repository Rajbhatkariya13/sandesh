const { response } = require("express");
var UserModel = require("../models/usersModel.js");
module.exports.login = async function (req, res) {
    
    if (!req.body.name || !req.body.password) {
        res.status(205);
        return res.json({
            status: 205,
            message: "Please complete required fields.",
        });
    }

    let data = {
        name: req.body.name,
        password: req.body.password
    };
    await UserModel.loginUser(data).then((res2) => {
        if (res2.success == true) {
            res.status(200);
            return res.json({
                status: 200,
                success: res2.success,
                userId: res2.userId
            });
        }
        else {
            res.status(203);
            return res.json({
                status: 203,
                success: false,
                message: "User Doesn't exists.",
            });
        }
    }).catch((err) => {
        res.status(203);
        return res.json({
            status: 203,
            success: false,
            message: "User Doesn't exists.",
        });
    });
}






module.exports.register = async function (req, res) {

    if (!req.body.name || !req.body.password) {
        res.status(205);
        return res.json({
            status: 205,
            message: "Please complete required fields.",
        });
    }

    let data = {
        name: req.body.name,
        password: req.body.password
    };
    UserModel.addUser(data).then((res2) => {


        if (res2.success==false) {
            res.status(203);
            return res.json({
                status: 203,
                success: false,
                userId: res2.userId,
                message: "user already exists with the id "+res2.userId
            });
        } else {
            res.status(200);
            return res.json({
                status: 200,
                success: true,
                userId: res2.userId,
                message: "user added to the database with id "+res2.userId
            });
        }

    }).catch((err) => {

    });

}


//____________________________________________add_article_____________________________



module.exports.addArticle = async function (req, res) {

 
    let data = {
        userId: req.body.userId,
        title: req.body.title,
        article: req.body.article,
        likes:0
    };
    UserModel.addArticles(data).then((res2) => {
        if(res2.protocol41==true){
           res.status(200);
            return res.json({
                status: 200,
                success: true,
                likes: 0,
                message: "added successfully"
            }); 
        }


    }).catch((err) => {

    });

}


//__________________________________________get_all_articles_________________________


module.exports.getAllArticles = async function (req, res) {

 
    UserModel.getAllArticles().then((res2) => {
        if(res2.length!=0){
           res.status(200);
            return res.json({
                status: 200,
                success: true,
                articleList: res2
            }); 
        }
        if(res2.length===0){
            res.status(203);
             return res.json({
                 status: 203,
                 success: false,
                 articleList: res2
             }); 
         }
 

    }).catch((err) => {

    });

}


//__________________________________________________add_likes__________

module.exports.addLike = async function (req, res) {
    let data = {
        articleId:req.body.articleId,
        likes: req.body.likes
    };
    UserModel.addLike(data).then((res2) => {
        
        if(res2.protocol41==true && res2.changedRows>0)
        {

            res.status(200);
            return res.json({
                status: 200,
                success: true,
                message: 'like updated'
            }); 
        }
        else{
            res.status(203);
            return res.json({
                status: 203,
                success: false,
                message: 'unable to update'
            });

        }
 

    }).catch((err) => {

    });

}

