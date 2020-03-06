import React from 'react'
import { css } from '@emotion/core'

const HomePage = props => {
  return (
    <div css={homePage}>
      <h1>SPA Template</h1>
    </div>
  )
}

const homePage = css`
  text-align: center;
`

export default HomePage
