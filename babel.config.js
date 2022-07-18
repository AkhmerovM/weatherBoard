module.exports = {
    presets: [
        [
            '@babel/preset-react',
            {
                development: process.env.BABEL_ENV === 'development'
            }
        ]
    ],
    plugins: [
        ['module-resolver',
            {
                root: ['./src'],
                alias: {
                    '@': './src'
                }
            }]
    ]
};
