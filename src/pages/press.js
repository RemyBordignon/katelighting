import React from 'react'
import Layout from "../@lekoarts/gatsby-theme-emilia/components/layout";
import PressMdx from '../../content/texts/press.mdx'
import { Container } from "theme-ui"

const Press = () => {
    return (
        <Layout>
            <Container>
                <div style={{textAlign: 'center', marginTop: '4rem'}}>
                    <PressMdx />
                </div>
            </Container>
        </Layout>
    )
};

export default Press;
