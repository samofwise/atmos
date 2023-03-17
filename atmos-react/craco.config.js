/* eslint-disable no-param-reassign */
/* eslint-disable no-multi-assign */
/* eslint-disable object-curly-newline */
// https://johnnyreilly.com/2021/01/02/create-react-app-with-ts-loader-and-craco
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig, { paths }) => {
      paths.appBuild = webpackConfig.output.path = path.resolve('dist');
      return webpackConfig;
    },
  },
  eslint: {
    configure: {
      mode: 'file',
    },
  },
};
