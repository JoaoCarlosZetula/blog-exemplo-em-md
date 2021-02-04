module.exports = {
    plugins: [
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: __dirname + '/src/content',
                name: 'pages'
            }
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins:[
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 400
                        }
                    }
                ]
            }
        },
        {
            resolve: `gatsby-plugin-disqus`,
            options: {
                shortname: `sitecoruja`
            }
        },
        'gatsby-plugin-netlify-cms'
    ]
}