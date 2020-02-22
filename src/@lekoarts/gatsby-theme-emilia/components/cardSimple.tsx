/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { ChildImageSharp } from "../types"

type Props = {
  sharp: ChildImageSharp
    title: string
}

const px = [`64px`, `32px`, `16px`, `8px`, `4px`]

const CardSimple = ({ sharp, title}: Props) => {
  const h = sharp.childImageSharp.fluid.presentationHeight
  const count = Math.floor(h / 50)

  let conditionalStyles = {
      height: 0,
      paddingBottom: `${100 / sharp.childImageSharp.fluid.aspectRatio}%`,
      gridRowEnd: `span ${count}`,
      mb: 4,
    }

  return (
    <Styled.div
      aria-label={`${title}`}
      sx={{
        outline: `none`,
        "&:hover, &:focus": {
          "[data-name='card-overlay']": {
            opacity: 1,
          },
        },
        position: `relative`,
        ...conditionalStyles,
      }}
    >
      <div
        sx={{
          zIndex: 20,
          display: `flex`,
          justifyContent: `center`,
          alignItems: `center`,
          opacity: 0,
          transition: `all 0.3s ease-in-out`,
          color: `white`,
          position: `absolute`,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        data-name="card-overlay"
      >
      </div>
      <Img fluid={sharp.childImageSharp.fluid} />
    </Styled.div>
  )
}

export default CardSimple
