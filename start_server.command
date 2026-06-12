#!/bin/bash
cd "$(dirname "$0")"
# kill anything on 8080 first
lsof -ti:8080 | xargs kill -9 2>/dev/null
echo "Starting server on http://localhost:8080"
python3 -m http.server 8080
