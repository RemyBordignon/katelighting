/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import { animated, useSpring, config } from "react-spring"
import Img from "gatsby-image"
import { ChildImageSharp } from "../types"
import Layout from "./layout"
import HeaderProject from "./header-project"
import ProjectPagination from "./project-pagination"
import SEO from "./seo"
import Page from '@atlaskit/page';
import Card from "./projects";
import CardSimple from "./cardSimple";

type Props = {
  data: {
    project: {
      body: string
      excerpt: string
      date: string
      slug: string
      title: string
      areas: string[]
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
      <HeaderProject title={project.title} description={project.body} areas={project.areas} date={project.date} />
        <Container
            sx={{
              mt: `-8rem`,
              display: `grid`,
              gridTemplateColumns: [`1fr`, `repeat(auto-fill, minmax(350px, 1fr))`],
              gridColumnGap: 4,
            }}
        >
          {images.nodes.map(image => <CardSimple key={project.slug} sharp={image} title={image.name} />)}

        </Container>
      <Container>
        <ProjectPagination prev={prev} next={next} />
      </Container>

    </Layout>
  )
}

export default Project
