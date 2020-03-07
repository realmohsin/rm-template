import React from 'react'
import { css } from '@emotion/core'

const HomePage = props => {
  return (
    <div css={homePage}>
      <img
        alt='Logo'
        src='https://image.flaticon.com/icons/svg/1147/1147083.svg'
        css={logo}
      />
      <h1>SPA Template</h1>
    </div>
  )
}

const homePage = theme => css`
  text-align: center;
`

const logo = theme => css`
  margin: 25px auto;
  width: 100px;
`

export default HomePage
