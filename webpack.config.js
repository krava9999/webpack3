const {
    resolve
} = require('path'); // работаем с путями

const HtmlWebpackPlugin = require('html-webpack-plugin'); // работаем с плагином 

module.exports = {
    entry: './src/main.js', // точка входя для будущего js 
    output: {
        path: resolve(__dirname, 'build'), //  cобираем проект в файл build
        filename: 'main.[contenthash].js' //  имя файла с хэшэм
    },

    module: {
        // задаем правила для преобразования файлов
        rules: [{
            test: /\.s[ac]ss$/i,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }, ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'index.html')
        })
    ]


};