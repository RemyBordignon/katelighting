/** @jsx jsx */
import React from "react"
import { jsx, useColorMode } from "theme-ui"
import BGPattern from "../assets/bg-pattern"

const HeaderBackground = () => {
  const [colorMode] = useColorMode()
  const isDark = colorMode === `dark`

  return (
    <React.Fragment>
    </React.Fragment>
  )
}

export default HeaderBackground
