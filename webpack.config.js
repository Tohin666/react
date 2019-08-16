const path = require ('path') // модуль для путей в разных операционках
const HtmlPlugin = require ('html-webpack-plugin') // его надо установить

module.exports = { // это из ноды
    entry: { // переопределяем точку входа (она такая и есть по умолчанию)
        main: path.resolve (__dirname, 'src', 'index.jsx')
    },
    output: { // указываем куда размещать бандл (по умолянию называет main.js)
        path: path.resolve (__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: { // набор правил
        rules: [
            {
                test: /\.jsx?$/, // по умолчанию
                exclude: /node_modules/, // по умолчанию
                use: { // указываем что сначала все js прогонять через бейбл
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']                
            }
        ]
    },
    plugins: [ // указываем какие файлы какому плагину скармливать, чтобы не хавал все подряд        
        new HtmlPlugin ({
            template: path.resolve (__dirname, 'src', 'index.html'), // указываем ссылку на исходник
            filename: 'index.html' // как будет называться после сборки
        })
    ]
}