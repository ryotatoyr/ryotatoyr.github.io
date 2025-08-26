#!/bin/bash

# Portfolio Website Validation Script
# This script validates that the portfolio website works correctly

echo "🚀 Starting portfolio website validation..."

# Change to repository directory
cd /home/runner/work/ryotatoyr.github.io/ryotatoyr.github.io

# Start HTTP server in background
python3 -m http.server 8001 --bind 127.0.0.1 > /dev/null 2>&1 &
SERVER_PID=$!

# Wait for server to start
sleep 2

echo "✓ Local server started on port 8001"

# Test basic HTTP response
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:8001/)
if [ "$HTTP_STATUS" = "200" ]; then
    echo "✓ Server responds with HTTP 200"
else
    echo "✗ Server returned HTTP $HTTP_STATUS"
    kill $SERVER_PID 2>/dev/null
    exit 1
fi

# Test content type
CONTENT_TYPE=$(curl -s -I http://127.0.0.1:8001/ | grep -i "content-type" | head -1)
if [[ "$CONTENT_TYPE" == *"text/html"* ]]; then
    echo "✓ Content-Type is HTML"
else
    echo "✗ Unexpected Content-Type: $CONTENT_TYPE"
fi

# Test if page contains expected content
CONTENT=$(curl -s http://127.0.0.1:8001/)
if [[ "$CONTENT" == *"大田 凌太郎"* ]]; then
    echo "✓ Page contains Japanese portfolio title"
else
    echo "✗ Page missing expected Japanese content"
fi

if [[ "$CONTENT" == *"tailwindcss.com"* ]]; then
    echo "✓ Page loads Tailwind CSS from CDN"
else
    echo "✗ Page missing Tailwind CSS CDN reference"
fi

if [[ "$CONTENT" == *"RYOTARO OTA"* ]]; then
    echo "✓ Page contains main heading"
else
    echo "✗ Page missing main heading"
fi

# Test media directory
MEDIA_STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:8001/media/)
if [ "$MEDIA_STATUS" = "200" ]; then
    echo "✓ Media directory accessible"
else
    echo "⚠ Media directory returned HTTP $MEDIA_STATUS"
fi

# Clean up
kill $SERVER_PID 2>/dev/null
echo "✓ Server stopped"

echo "🎉 Portfolio validation complete!"