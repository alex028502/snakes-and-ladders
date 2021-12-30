module.exports = {
  globDirectory: 'resources/public/',
  globPatterns: [
    '**/*.{png,ico,html,js,json,txt}',
  ],
  swDest: 'resources/public/service-worker.js',
  ignoreURLParametersMatching: [
    /^utm_/,
    /^fbclid$/,
  ],
};
