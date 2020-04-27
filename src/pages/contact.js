import React from 'react'
import Layout from "../@lekoarts/gatsby-theme-emilia/components/layout";
import ContactMdx from '../../content/texts/contact.mdx'
import { Container } from "theme-ui"

const Contact = () => {
    return (
        <Layout>
            <Container>

                <ContactMdx />
            </Container>
        </Layout>
    )
};

export default Contact;
