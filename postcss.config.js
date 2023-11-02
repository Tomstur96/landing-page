const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
  plugins: [
    postcssPresetEnv({
      stage: 2,
      features: {
        "logical-properties-and-values": false,
      },
    }),
  ],
};

// --- Inverse Option but with specific features --- //

// module.exports = {
//   plugins: [
//     postcssPresetEnv({
//       stage: 3,
//       features: {
//         "trigonometric-functions": true,
//       },
//     }),
//   ],
// };
