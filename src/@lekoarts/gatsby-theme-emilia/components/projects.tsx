/** @jsx jsx */
import { jsx, Container, Styled, Main } from "theme-ui"
import { useSpring, animated, config } from "react-spring"
import { graphql, useStaticQuery } from "gatsby"
import { ChildImageSharp } from "../types"
import Layout from "./layout"
import Card from "./card"

type Props = {
  projects: {
    slug: string
    title: string
    areas: string[]
    date: string
    cover: ChildImageSharp
  }[]
}

const Projects = ({ projects }: Props) => {
  const data = useStaticQuery(graphql`
    query {
      allProject(sort: { fields: date, order: DESC }) {
        nodes {
          ... on MdxProject {
            parent {
              ... on Mdx {
                fields {
                  colorThief
                }
              }
            }
          }
        }
      }
    }
  `)

  const fadeUpProps = useSpring({
    config: config.slow,
    delay: 600,
    from: { opacity: 0, transform: `translate3d(0, 30px, 0)` },
    to: { opacity: 1, transform: `translate3d(0, 0, 0)` },
  })

  if (projects.length === 0) {
    return (
      <Layout>
        <Container>
          <Styled.p>
            Error getting projects
          </Styled.p>
        </Container>
      </Layout>
    )
  }

  return (
    <Layout>
      <Main>
        <animated.div style={fadeUpProps}>
          <Container
            sx={{
              display: `grid`,
              gridTemplateColumns: [`1fr`, `repeat(auto-fill, minmax(400px, 1fr))`],
              gridColumnGap: 4,
            }}
          >
            {projects.map((project, index) => {
              const val = data.allProject.nodes[index].parent.fields.colorThief
              const shadow = `${val[0]}, ${val[1]}, ${val[2]}`

              const px = [`64px`, `32px`, `16px`, `8px`, `4px`]
              const shadowArray = px.map(v => `rgba(${shadow}, 0.15) 0px ${v} ${v} 0px`)

              return <Card key={project.slug} item={project} shadow={shadowArray} inGrid />
            })}
          </Container>
        </animated.div>
      </Main>
    </Layout>
  )
}

export default Projects
