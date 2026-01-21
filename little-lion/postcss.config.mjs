import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import postcssPresetEnv from 'postcss-preset-env';

const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-preset-env': {
      stage: 3, // include polyfills for modern CSS
      features: {
        'nesting-rules': true, // optional: allow CSS nesting
      },
    },
  },
};

export default config;