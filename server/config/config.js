var path = require('path');
var rootPath = path.normalize(__dirname+'/../../');

module.exports={
    development:{
        rootPath:rootPath,
        db:'mongodb://localhost/multivision',
        port : process.env.PORT || 3030
    },
    production:{
        rootPath:rootPath,
        db:'mongodb://ehsanelhampour:ehsan12#@ds047930.mongolab.com:47930/multivision',
        port : process.env.PORT || 80
    }
};