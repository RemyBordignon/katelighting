import React from 'react'
import Layout from "../@lekoarts/gatsby-theme-emilia/components/layout";
import Header from "../@lekoarts/gatsby-theme-emilia/components/header";
import About from '../../content/texts/about-me.mdx'
import Container from "reactstrap/es/Container";


const AboutMe = () => {
    return (
        <Layout>
            <Header />
            <Container>
                <About />
            </Container>
        </Layout>
    )
}

export default AboutMe;
