//Todo esto es para crear nuevas rutas con cada entrada del blog

const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath,'.md')
        //console.log('@@@@@@@@@@@@@@@@',slug)
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
  }

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const res = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)
    res.data.allMarkdownRemark.edges.forEach((articulo) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${articulo.node.fields.slug}`,
            context: {
                slug: articulo.node.fields.slug
            }
        })
    })
}
  