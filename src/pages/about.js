import React from 'react'
import Layout from "../@lekoarts/gatsby-theme-emilia/components/layout";
import About from '../../content/texts/about-me.mdx';
import { Container } from "theme-ui";
import kate from './kate.jpg'

const AboutMe = () => {
    return (
        <Layout>
            <Container>
                <div className={'d-md-none'}>
                    {/* Mobile */}
                    <About />
                    <img src={kate} alt={'kate'} width={'100%'} />
                </div>
                <div className={'d-none d-md-block'} >
                    <div style={{display: 'flex'}}>
                        <div style={{minWidth: '500px', maxWidth: '500px'}}>
                        <img src={kate} alt={'kate'} width={'100%'}/>
                    </div>
                        <div style={{width: '100%', paddingLeft: '2rem', marginTop: '4rem'}}>
                            <About />
                        </div>
                    </div>

                </div>
            </Container>
        </Layout>
    )
};

export default AboutMe;
