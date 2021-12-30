#! /usr/bin/env bash

set -e

# this is dual purpose - we depend on the _side-effect_ that it updates deps
# before telling us
export CLASSPATH="$(node_modules/.bin/shadow-cljs classpath)"

make -C selenium

export CLASSPATH="$PWD/selenium:$CLASSPATH"

node_modules/.bin/http-server resources/public/ -p 8080 &
server_pid=$!
function clean-up {
  kill $server_pid
}
trap clean-up EXIT

if [[ "$TEST_DOMAIN" == "" ]]
then
  TEST_DOMAIN=localhost
fi
sleep 1
curl -f -v http://$TEST_DOMAIN:8080/index.html

java -ea Test http://$TEST_DOMAIN:8080
