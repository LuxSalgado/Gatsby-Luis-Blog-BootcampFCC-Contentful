import React from 'react'
import Layout from '../components/layout'

const ContactPage = () => {
    return (
        <Layout>
            <h1>Contact Page</h1>
            <p>Estos son mis datos personales
                <p>Nombre: Luis Salgado</p>
                <p>Correo: Luis14Salgado@gmail.com</p>
                <p>Telefono: +58 424 153 7845</p>
                <p>Sigueme en GitHub como <a href="https://github.com/LuxSalgado" target="_blank" rel="noreferrer">@LuxSalgado</a></p>
            </p>
        </Layout>
    )
}

export default ContactPage