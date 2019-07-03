const presets = [
  [
    '@babel/preset-env',
    {
      useBuiltIns: 'usage',
      corejs: '3.0.1',
      debug: true
    }
  ],
  ['@babel/preset-react']
]

const plugins = [
  '@babel/plugin-syntax-dynamic-import',
  '@babel/plugin-proposal-class-properties'
]

module.exports = { presets, plugins }
