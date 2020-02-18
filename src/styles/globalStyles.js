import { css } from '@emotion/core'

const globalStyles = css`
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: '';
    font-size: '';
    line-height: '';
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: '';
    font-weight: '';
    color: '';
  }

  h1 {
    font-size: '';
  }

  h2 {
    font-size: '';
  }

  h3 {
    font-size: '';
  }

  h4 {
    font-size: '';
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  ol,
  ul {
    list-style: none;
  }

  ::selection {
    background-color: '';
    color: white;
  }
`

export default globalStyles