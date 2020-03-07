import React from 'react'
import { css } from '@emotion/core'

const NotFound = props => {
  return (
    <div css={notFound}>
      <img
        alt='Not Found Logo'
        src='https://image.flaticon.com/icons/svg/2471/2471920.svg'
        css={notFoundLogo}
      />
      <h1>Not Found</h1>
    </div>
  )
}

const notFound = theme => css`
  text-align: center;
`

const notFoundLogo = theme => css`
  width: 100px;
  margin: 25px auto;
`

export default NotFound
