module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { esmodules: true } }],
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
  env: {
    test: {
      plugins: [
        [
          'istanbul',
          { exclude: ['**/*.spec.jsx', 'src/testUtils.js'] },
        ],
      ],
    },
  },
};
