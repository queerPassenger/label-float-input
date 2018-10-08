const path=require('path');
module.exports={
    entry:'./src/label-float-input.jsx',
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'index.js',
        libraryTarget:'commonjs2'
    },
    resolve:{
        root:process.cwd(),
        modulesDirectories:[
            'node_modules'
        ],
        extensions:['','.js','.jsx']
    },
    module:{
        loaders:[{
            test:/\.js(x)?$/,
            exclude:/node_modules/,
            loaders:['babel-loader']
        }]
    },
    externals:{
        'react':'commonjs react'
    }
};