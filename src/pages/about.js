import React from 'react'
import Layout from "../@lekoarts/gatsby-theme-emilia/components/layout";
import About from '../../content/texts/about-me.mdx'
import { Container } from "theme-ui"

const AboutMe = () => {
    return (
        <Layout>
            <Container>
                <div className={'d-md-none'}>
                    <h5>About me</h5>
                    <About />
                </div>
                <div className={'d-none d-md-block'} >
                    <h4>About me</h4>
                    <About />
                </div>
            </Container>
        </Layout>
    )
};

export default AboutMe;
