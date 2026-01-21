module.exports = {
  presets: [
    "next/babel",
    [
      "@babel/preset-env",
      {
        targets: {
          safari: "12", // set the lowest version you want to support
          chrome: "60",
          firefox: "60"
        },
        useBuiltIns: "entry",
        corejs: 3
      }
    ]
  ]
};
