#!/bin/bash

# Create directories if they don't exist
mkdir -p public/static/images/mobile
mkdir -p public/static/images/tablet
mkdir -p public/static/images/desktop

# Process each carousel image
for i in {1..6}; do
  # Original image path
  original="public/static/images/website_karussel_${i}.jpg"
  
  # Generate mobile version (400px width)
  convert "$original" -resize 400x -quality 80 "public/static/images/mobile/website_karussel_${i}.jpg"
  
  # Generate tablet version (800px width)
  convert "$original" -resize 800x -quality 85 "public/static/images/tablet/website_karussel_${i}.jpg"
  
  # Generate desktop version (1200px width)
  convert "$original" -resize 1200x -quality 90 "public/static/images/desktop/website_karussel_${i}.jpg"
  
  echo "Processed website_karussel_${i}.jpg"
done

echo "All images processed successfully!" 