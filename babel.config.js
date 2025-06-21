module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@': './',
            '@app': './app',
            '@components': './app/components',
            '@assets': './assets',
            '@constants': './constants',
            '@locales': './locales'
          }
        }
      ]
    ]
  };
};
