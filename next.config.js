const path = require('path');
const withImages = require('next-images')

// // module.exports = withImages()

// module.exports = {
//   webpack: (config) => {
//     config.resolve.alias['@'] = path.resolve(__dirname);
//     // console.log(config)
//     withImages()
//     console.log(config)
//     return config;
//   }
// };

module.exports = withImages({
  fileExtensions: ["jpg", "jpeg", "png", "gif"],
  webpack(config, options) {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config
  }
})
