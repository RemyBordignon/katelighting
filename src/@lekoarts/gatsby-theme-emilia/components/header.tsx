/** @jsx jsx */
import { Header as ThemeHeader, jsx, Styled } from "theme-ui"
import { animated, useSpring, config } from "react-spring"

const Header = () => {
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
