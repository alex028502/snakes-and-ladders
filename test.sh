#! /usr/bin/env bash

set -e

# this is dual purpose - we depend on the _side-effect_ that it updates deps
# before telling us
export CLASSPATH="$(node_modules/.bin/shadow-cljs classpath)"

javac selenium/Test.java

export CLASSPATH="$PWD/selenium:$CLASSPATH"

echo testing $1
java -ea Test $1

