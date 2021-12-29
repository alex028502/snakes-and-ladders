#! /usr/bin/env bash

set -e

# this is dual purpose - we depend on the _side-effect_ that it updates deps
# before telling us
export CLASSPATH="$(node_modules/.bin/shadow-cljs classpath)"

javac selenium/Test.java

export CLASSPATH="$PWD/selenium:$CLASSPATH"

node_modules/.bin/http-server resources/public/ -p 8080 &
server_pid=$!
function clean-up {
  kill $server_pid
}
trap clean-up EXIT

# the docker network on github actions seems to make all mapped ports available
# on localhost, just like running individual containers locally - so no need
# for this I guess
# if [[ "$TEST_DOMAIN" == "" ]]
# then
#   TEST_DOMAIN=localhost
# fi

java -ea Test http://localhost:8080
