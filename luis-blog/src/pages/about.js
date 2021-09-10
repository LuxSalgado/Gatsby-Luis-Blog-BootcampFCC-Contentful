import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout>
            <h1>About Page</h1>
            <p>Este blog se creo con la finalidad de aprender GatsbyJS</p>
            <p>Si quieres trabajar conmigo, puedes <Link to="/contact">contactarme</Link></p>
        </Layout>
    )
}

export default AboutPage