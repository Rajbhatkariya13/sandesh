
var express = require('express');
var app = express();

var port = process.env.port || 5000;
var user_routes = require('./routes/user_routes');

let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



//var config = require('./config/auth');

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'z');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "authorization,userauth,Origin, X-Requested-With, Content-Type, Accept");
        
    // if (config.CheckAuth(req.headers.authorization) != 1) {
    //     res.status(403)
    //     res.json({
    //         status: "Forbidden",
    //         message: "Authorization Missing",
    //     });
    //     return;
    // } 
    // if(!req.url.includes("api_v1/common")){
    //     config.authenticateToken(req, res, next);        
    // }
     next();

});

app.use('/', user_routes);

app.listen(port, function () {
    console.log("app is listing on " + port);
});