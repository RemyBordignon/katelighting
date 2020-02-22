import React from 'react'
import Layout from "../@lekoarts/gatsby-theme-emilia/components/layout";
import Header from "../@lekoarts/gatsby-theme-emilia/components/header";
import ContactMdx from '../../content/texts/contact.mdx'
import Container from "./about";


const Contact = () => {
    return (
        <Layout>
            <Header />
            <Container>
                <ContactMdx />
            </Container>
        </Layout>
    )
}

export default Contact;
