#!/usr/bin/env bash
set -euxo pipefail

case $1 in
  start)
    # The '| cat' is to trick Node that this is an non-TTY terminal
    # then react-scripts won't clear the console.
    npm run migrate
    npm start | cat
    ;;
  migrate)
    npm run migrate 
    ;;
  rollback)
    npm run rollback 
    ;;
  *)
    ;;
esac