/** @jsx jsx */
import { Header as ThemeHeader, jsx, Styled } from "theme-ui"
import { animated, useSpring, config } from "react-spring"
import { useStaticQuery, graphql } from "gatsby"
import useEmiliaConfig from "../hooks/use-emilia-config"

const Header = () => {
  const { name, location, assetsPath } = useEmiliaConfig()
  const avatar = useStaticQuery(graphql`
    query {
      file(name: { eq: "avatar" }) {
        childImageSharp {
          fixed(width: 140, height: 140, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  const fadeUpProps = useSpring({
    config: config.slow,
    from: { opacity: 0, transform: `translate3d(0, 30px, 0)` },
    to: { opacity: 1, transform: `translate3d(0, 0, 0)` },
  })
  const fadeUpPropsDelay = useSpring({
    config: config.slow,
    delay: 250,
    from: { opacity: 0, transform: `translate3d(0, 30px, 0)` },
    to: { opacity: 1, transform: `translate3d(0, 0, 0)` },
  })
  const fadeProps = useSpring({ config: config.slow, from: { opacity: 0 }, to: { opacity: 1 } })
  const fadeLongProps = useSpring({ config: config.slow, delay: 300, from: { opacity: 0 }, to: { opacity: 1 } })

  return (
    <ThemeHeader>
      <div sx={{ textAlign: `center`, zIndex: 10 }}>
        <div data-testid="social-header" sx={{ mb: 4, a: { mx: 2 } }}>
          <animated.div style={fadeLongProps}>
          </animated.div>
        </div>
      </div>
    </ThemeHeader>
  )
}

export default Header
