#!/bin/sh

# Running this script will automatically generate js files from jsx and update them when changes are made.

npx babel --watch src --out-dir js --presets react-app/prod
