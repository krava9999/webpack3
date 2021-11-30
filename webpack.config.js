const {
    resolve
} = require('path'); // работаем с путями

// const CopyPlugin = require("copy-webpack-plugin");   не получилось настроить
const HtmlWebpackPlugin = require('html-webpack-plugin'); // работаем с плагином 

module.exports = {
    entry: './src/main.js', // точка входя для будущего js 
    output: {
        path: resolve(__dirname, 'build'), //  cобираем проект в файл build
        filename: 'main.[contenthash].js' //  имя файла с хэшэм
    },

    module: {
        // задаем правила для преобразования файлов
        rules: [{ // преобразование из scss в css
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            { // преобразование картинок 
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'index.html')
        }),
        // new CopyPlugin({
        //     patterns: [{
        //         from: "src",
        //         to: "build"
        //     }, ],
        // }),                              не получилось настроить
    ]


};