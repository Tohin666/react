const path = require ('path') // модуль для путей в разных операционках
const HtmlWebpackPlugin = require ('html-webpack-plugin') // его надо установить
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = { // это из ноды
    entry: { // переопределяем точку входа (она такая и есть по умолчанию)
        main: path.resolve (__dirname, 'src', 'index.jsx')
    },
    output: { // указываем куда размещать бандл (по умолянию называет main.js)
        path: path.resolve (__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
        components: path.resolve(__dirname, 'src', 'components'),
        containers: path.resolve(__dirname, 'src', 'containers'),
        },
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
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader'],
                })                
            }
        ]
    },    
    devServer: {
        open: true, // чтобы при загрузке сервера открывался браузер
        historyApiFallback: true // Чтобы при роутинге нормально обновлялось
      },
    plugins: [ // указываем какие файлы какому плагину скармливать, чтобы не хавал все подряд        
        new ExtractTextPlugin({ filename: 'style.css' }),
        new HtmlWebpackPlugin ({
            template: path.resolve (__dirname, 'src', 'index.html'), // указываем ссылку на исходник
            filename: 'index.html' // как будет называться после сборки
        })
    ]
}