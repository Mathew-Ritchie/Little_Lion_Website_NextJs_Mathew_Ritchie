// babel.config.js
module.exports = {
  presets: [
    "next/babel",
    [
      "@babel/preset-env",
      {
        targets: {
          safari: "12",   // lowest Safari version you want to support
          chrome: "60",
          firefox: "60",
        },
        useBuiltIns: "entry",
        corejs: 3,
      },
    ],
  ],
};
