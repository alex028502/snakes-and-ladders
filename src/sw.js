const {registerRoute} = require('workbox-routing');
const {NetworkFirst} = require('workbox-strategies');

registerRoute(
    ({url}) => url.pathname.startsWith('/'),
    new NetworkFirst(),
);

// this has not precache - should work out how to to that
// I had it before with the out of the box cache first
