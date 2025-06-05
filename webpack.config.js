const path = require('path');

module.exports = {
    entry: './src/index.js', // Cambia esto según la entrada de tu proyecto
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'), // Cambia esto según tu estructura
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // Asegúrate de tener babel-loader instalado
                },
            },
            {
                test: /\.css$/, // Para archivos CSS
                use: ['style-loader', 'css-loader'], // Asegúrate de tener estos loaders instalados
            },
            {
                test: /\.(png|jpg|gif|svg)$/, // Para imágenes
                use: {
                    loader: 'file-loader', // Asegúrate de tener file-loader instalado
                    options: {
                        name: '[path][name].[ext]',
                    },
                },
            },
            // Agrega más reglas según sea necesario
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'], // Agrega extensiones según tu proyecto
    },
    mode: 'development', // Cambia a 'production' para producción
};
