/** @jsx jsx */
import React from "react"
import { Header as ThemeHeader, jsx, Styled, Container } from "theme-ui"
import { animated, useSpring, config } from "react-spring"
import { useStaticQuery, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import useEmiliaConfig from "../hooks/use-emilia-config"

type Props = {
  title: string
  description?: string
}

const HeaderProject = ({ title, description }: Props) => {
  const { name } = useEmiliaConfig();
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
    to: { opacity: 0.7, transform: `translate3d(0, 0, 0)` },
  })
  const backButtonProps = useSpring({
    config: config.slow,
    from: { opacity: 0, transform: `translate3d(-30px, 0, 0)` },
    to: { opacity: 1, transform: `translate3d(0, 0, 0)` },
  })
  const infoProps = useSpring({ config: config.slow, delay: 500, from: { opacity: 0 }, to: { opacity: 1 } })

  return (
    <ThemeHeader>
      <Container sx={{ my: 4, zIndex: 10 }}>
        <div sx={{ mt: 4 }}>
          <animated.div style={titleProps}>
            <h5>{title}</h5>
          </animated.div>
          <animated.div style={infoProps}>
            {description && (
              <div sx={{ml: 0.5, p: { textAlign: `left`, fontSize: 16 }  }}>
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
