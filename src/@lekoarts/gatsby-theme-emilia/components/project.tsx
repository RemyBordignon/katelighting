/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import { animated, useSpring, config } from "react-spring"
import Img from "gatsby-image"
import { ChildImageSharp } from "../types"
import Layout from "./layout"
import HeaderProject from "./header-project"
import ProjectPagination from "./project-pagination"
import SEO from "./seo"
import { Row, Col } from 'reactstrap';

type Props = {
  data: {
    project: {
      body: string
      excerpt: string
      slug: string
      title: string
      cover: ChildImageSharp
    }
    images: {
      nodes: {
        name: string
        childImageSharp: {
          fluid: {
            aspectRatio: number
            src: string
            srcSet: string
            sizes: string
            base64: string
            tracedSVG: string
            srcWebp: string
            srcSetWebp: string
          }
        }
      }[]
    }
  }
  pageContext: {
    prev: {
      slug: string
      parent: {
        fileAbsolutePath: string
      }
      title: string
      cover: ChildImageSharp
    }
    next: {
      slug: string
      parent: {
        fileAbsolutePath: string
      }
      title: string
      cover: ChildImageSharp
    }
  }
}

const Project = ({ data: { project, images }, pageContext: { prev, next } }: Props) => {
  const imageFade = useSpring({ config: config.slow, delay: 300, from: { opacity: 0 }, to: { opacity: 1 } })

  return (
    <Layout>
      <SEO
        title={project.title}
        description={project.excerpt}
        pathname={project.slug}
        image={project.cover.childImageSharp.resize!.src}
      />

      <Container sx={{ height: '100%' }}>
        <div className={'d-md-none'}>
          <HeaderProject title={project.title} description={project.body} />
        </div>
        <Row>
          <Col sm={0} md={4} className={'d-none d-md-block'} >
            <div style={{ display: 'flex', position: 'fixed', top: 0, left: 0, bottom: 0}} sx={{ mt: [`16rem`], minHeight: '100%', maxWidth: '35%' }}>
              <HeaderProject title={project.title} description={project.body} />
            </div>
          </Col>
          <Col sm={12} md={8}>
            {images.nodes.map(image => (
                  <animated.div key={image.name} style={imageFade}>
                    <Img fluid={image.childImageSharp.fluid} alt={image.name} sx={{ mb: [4, 4, 5] }} />
                  </animated.div>
            ))}
          </Col>
        </Row>

        <ProjectPagination prev={prev} next={next} />
      </Container>

    </Layout>
  )
}

export default Project
