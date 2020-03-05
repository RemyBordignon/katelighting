import React from 'react'
import Layout from "../@lekoarts/gatsby-theme-emilia/components/layout";
import About from '../../content/texts/about-me.mdx'
import { Container } from "theme-ui"

const AboutMe = () => {
    return (
        <Layout>
            <Container>
                <h4>About me</h4>
                <About />
            </Container>
        </Layout>
    )
};

export default AboutMe;
