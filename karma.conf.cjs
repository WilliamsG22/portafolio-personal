// Uso un solo entorno de pruebas: Jasmine corre dentro de Karma
process.env.BABEL_ENV = 'test';

module.exports = function (config) {
  config.set({
    frameworks: ['jasmine', 'webpack'],
    plugins: [
      'karma-jasmine',
      'karma-webpack',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-coverage',
    ],
    files: ['src/**/*.spec.jsx'],
    preprocessors: { 'src/**/*.spec.jsx': ['webpack'] },
    webpack: {
      mode: 'development',
      devtool: 'inline-source-map',
      module: {
        rules: [{ test: /\.jsx?$/, exclude: /node_modules/, use: 'babel-loader' }],
      },
      resolve: { extensions: ['.js', '.jsx'] },
    },
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      dir: 'coverage',
      reporters: [{ type: 'html' }, { type: 'lcov' }, { type: 'text-summary' }],
    },
    browsers: ['ChromeHeadlessSinSandbox'],
    customLaunchers: {
      ChromeHeadlessSinSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox'],
      },
    },
  });
};
