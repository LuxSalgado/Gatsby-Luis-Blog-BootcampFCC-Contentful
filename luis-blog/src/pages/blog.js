import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import * as blogStyles from './blog.module.scss'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost (
                sort: {
                    fields: publishedDate,
                    order: DESC
                    }
                ){
                edges {
                    node {
                        title
                        slug
                        publishedDate(formatString:"MMMM Do, YYYY")
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <h1>Blog Page</h1>
            <ol className={blogStyles.posts}>
                {data.allContentfulBlogPost.edges.map( (articulo)=>{
                    return (<li className={blogStyles.post}>
                        <Link to={`/blog/${articulo.node.slug}`}>
                            <h2>{articulo.node.title}</h2>
                            <p>{articulo.node.publishedDate}</p>
                        </Link>
                    </li>)
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage