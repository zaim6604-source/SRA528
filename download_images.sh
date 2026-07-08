#!/bin/bash
DIR="/home/user/app/public/images"
mkdir -p "$DIR"

download() {
  local id="$1"
  local name="$2"
  local url="https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800"
  echo "Downloading ${name}.jpg..."
  curl -sL -o "$DIR/${name}.jpg" -w "%{http_code} %{size_download}" "$url" 2>/dev/null
  echo ""
}

# Hero / worker portrait
download "30411827" "hero-worker"

# About / office building  
download "33463115" "about-office"

# Services cards
download "3183197" "services-recruitment"   # team meeting / recruitment
download "11022577" "services-travel"        # airplane
download "32642491" "services-visa"          # passport
download "6762870" "services-medical"        # doctor with stethoscope
download "37851407" "services-training"      # classroom teaching
download "5669602" "services-legal"          # legal gavel and scales
download "13080790" "services-housing"       # house key/real estate (passport on table - housing related)
download "9155927" "services-insurance"      # close-up medicine & stethoscope - insurance theme

# Countries
download "30320203" "country-saudi"          # Riyadh skyline
download "29497728" "country-uae"            # Dubai Burj Khalifa
download "28279787" "country-qatar"           # Doha/Middle East skyline
download "15421550" "country-oman"           # Golden hour silhouette
download "13012232" "country-kuwait"         # Middle East city buildings
download "10885332" "country-germany"        # Modern building Germany
download "34104803" "country-malaysia"       # Travel/globe (reuse concept)
download "25951136" "country-romania"        # Modern architecture
download "15421550" "country-turkey"         # Silhouette buildings

# Testimonials - people portraits
download "8960991" "testimonial-1"           # Man in uniform
download "16552846" "testimonial-2"          # Man in work uniform
download "16552843" "testimonial-3"          # Worker portrait

# Gallery - city/travel photos
download "33463115" "gallery-1"             # Office building
download "19894545" "gallery-2"             # Dubai skyline
download "30320203" "gallery-3"             # Riyadh
download "16271271" "gallery-4"             # Airplane sky
download "9611083" "gallery-5"              # Clouds aerial
download "29497728" "gallery-6"             # Dubai sunset

echo "=== All downloads complete ==="
ls -la "$DIR" | grep -E "\.jpg$"
