#! /usr/bin/env bash

set -e

# this is dual purpose - we depend on the _side-effect_ that it updates deps
# before telling us
export CLASSPATH="$(node_modules/.bin/shadow-cljs classpath)"

make -C selenium

export CLASSPATH="$PWD/selenium:$CLASSPATH"

# tests before adding service worker took 15"
# and we sleep for 1 second before starting tests
# so this means that 9 seconds into the tests, the server will shut down
timeout 10 node_modules/.bin/http-server resources/public/ -p 8080 &

# I don't really need this since I added the server timeout
# until I want to run the tests without ten seconds of a failure
# the || should have been there all along but I forgot it
server_pid=$!
function clean-up {
  kill $server_pid || echo nothing to clean up
}
trap clean-up EXIT

if [[ "$TEST_DOMAIN" == "" ]]
then
  TEST_DOMAIN=localhost
fi
sleep 1
curl -f -v http://$TEST_DOMAIN:8080/index.html

java -ea Test http://$TEST_DOMAIN:8080
