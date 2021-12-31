const {registerRoute} = require('workbox-routing');
const {NetworkFirst} = require('workbox-strategies');

registerRoute(
    ({url}) => url.pathname.startsWith('/'),
    new NetworkFirst(),
);
