#!/bin/bash

# https://gist.github.com/mohanpedala/1e2ff5661761d3abd0385e8223e16425
set -euo pipefail

TMPDIR="/usr/src/app/tmp/"
if [ -d "$TMPDIR" ]; then rm -rf "$TMPDIR"; fi

rm -f /usr/src/app/tmp/pids/server.pid

rake db:create db:migrate db:seed

rails server -b 0.0.0.0
