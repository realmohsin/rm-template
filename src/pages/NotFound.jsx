import React from 'react'
import { css } from '@emotion/core'

const NotFound = props => {
  return (
    <div css={notFound}>
      <h1>Not Found</h1>
    </div>
  )
}

const notFound = theme => css`
  text-align: center;
`

export default NotFound
