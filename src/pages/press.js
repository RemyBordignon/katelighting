import React from 'react'
import Layout from "../@lekoarts/gatsby-theme-emilia/components/layout";
import Header from "../@lekoarts/gatsby-theme-emilia/components/header";
import PressMdx from '../../content/texts/press.mdx'
import Container from "./about";


const Press = () => {
    return (
        <Layout>
            <Header />
            <Container>
                <PressMdx />
            </Container>

        </Layout>
    )
};

export default Press;
