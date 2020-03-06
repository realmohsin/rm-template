<div align="center">
  <img alt="Logo" src="https://image.flaticon.com/icons/svg/1653/1653627.svg" width="70" />
</div>
<h1 align="center">
  SPA Template
</h1>

A boilerplate for React Single Page Applications.
<br></br>

## Table of Contents

- [Installation](#installation)
- [What's Inside?](#whatsInside)
- [Features](#features)
  <br></br>

## Installation <a name="installation"></a>

1. Download to project directory then install dependencies:

```sh
npm i
```

2. Launch development server:

```sh
npm run develop
```

## What's Inside? <a name="whatsInside"></a>

    .
    ├── server
        ├── index.js
    ├── src
        ├── assets
        ├── history
        ├── store
            ├── actions
            ├── reducers
            ├── index.js
        ├── styles
            ├── globalStyles.js
            ├── variables.js
        ├── App.jsx
        ├── index.html
        ├── index.js
    ├── .browserslistrc
    ├── .eslintignore
    ├── .eslintrc
    ├── .gitignore
    ├── babel.config.js
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── readme.md
    ├── webpack.dev.js
    └── webpack.prod.js

1.  **`/src/history`**: This directory exports a browser history object.

2.  **`/src/store`**: This directory exports an optional Redux store.

3.  **`/src/styles`**: This directory exports styling variables and components using Emotion.

4.  **`/src/App.jsx`**: This file is the start of application-specific components, contains routing setup.

5.  **`/src/index.js`**: This file is the entry point for webpack bundling.
    <br></br>

## Features <a name="features"></a>

- Brotli and GZIP compression
- Heroku Friendly Setup
- Code-Splitting Enabled
- Optimized Polyfill Footprints
- Optional Redux Store
- Optional @emotion Setup (CSS-in-JS)
  <br></br>
