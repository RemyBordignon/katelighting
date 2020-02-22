/** @jsx jsx */
import React from "react"
import { Header as ThemeHeader, jsx, Styled, Container } from "theme-ui"
import { animated, useSpring, config } from "react-spring"
import { useStaticQuery, graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"
import HeaderBackground from "./header-background"
import LeftArrow from "../assets/left-arrow"
import useEmiliaConfig from "../hooks/use-emilia-config"

type Props = {
  title: string
  areas: string[]
  description?: string
  date: string
}

const HeaderProject = ({ title, areas, description, date }: Props) => {
  const { name } = useEmiliaConfig()
  const avatar = useStaticQuery(graphql`
    query {
      file(name: { eq: "avatar" }) {
        childImageSharp {
          fixed(width: 40, height: 40, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  const titleProps = useSpring({
    config: config.slow,
    from: { opacity: 0, transform: `translate3d(0, -30px, 0)` },
    to: { opacity: 1, transform: `translate3d(0, 0, 0)` },
  })
  const backButtonProps = useSpring({
    config: config.slow,
    from: { opacity: 0, transform: `translate3d(-30px, 0, 0)` },
    to: { opacity: 1, transform: `translate3d(0, 0, 0)` },
  })
  const infoProps = useSpring({ config: config.slow, delay: 500, from: { opacity: 0 }, to: { opacity: 1 } })

  return (
    <ThemeHeader>
      <HeaderBackground />
      <Container sx={{ textAlign: `center`, my: 4, zIndex: 10 }}>

        <div sx={{ mt: 4, mb: [6, 6, 7] }}>
          <animated.div style={titleProps}>
            <Styled.h1>{title}</Styled.h1>
          </animated.div>
          <animated.div style={infoProps}>
            <Styled.p sx={{ mb: 0, mt: 4 }}>{date}</Styled.p>
            <div>
              {areas.map((area, index) => (
                <React.Fragment key={area}>
                  {index > 0 && `, `}
                  {area}
                </React.Fragment>
              ))}
            </div>
            {description && (
              <div sx={{ maxWidth: `1000px`, mx: `auto`, mt: 5, p: { textAlign: `left` } }}>
                <MDXRenderer>{description}</MDXRenderer>
              </div>
            )}
          </animated.div>
        </div>
      </Container>
    </ThemeHeader>
  )
}

export default HeaderProject
