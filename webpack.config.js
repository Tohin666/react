const path = require ('path') // модуль для путей в разных операционках
const ExtractTextPlugin = require ('extract-text-webpack-plugin') // его надо установить
const HtmlPlugin = require ('html-webpack-plugin') // тоже должны установить

module.exports = { // это из ноды
    entry: { // переопределяем точку входа (она такая и есть по умолчанию)
        main: path.resolve (__dirname, 'src', 'index.js')
    },
    output: { // указываем куда размещать бандл (по умолянию называет main.js)
        path: path.resolve (__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: { // набор правил
        rules: [
            {
                test: /\.js$/, // по умолчанию
                exclude: /node_modules/, // по умолчанию
                use: { // указываем что сначала все js прогонять через бейбл
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract ({ // подключили выше
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            }
        ]
    },
    plugins: [ // указываем какие файлы какому плагину скармливать, чтобы не хавал все подряд
        new ExtractTextPlugin ({filename: 'style.css'}),
        new HtmlPlugin ({
            template: path.resolve (__dirname, 'src', 'index.html'), // указываем ссылку на исходник
            filename: 'index.html' // как будет называться после сборки
        })
    ]
}