#!/bin/bash
# Rename screenshot files to meaningful names
cd /workspaces/SILVER-LEAF-Project/Img

# Rename the logo screenshot
mv "Screenshot 2568-11-12 at 21.46.21.png" "logo.png" 2>/dev/null || true

# Rename other screenshots
mv "Screenshot 2568-11-12 at 16.50.41.png" "Naya.png" 2>/dev/null || true
mv "Screenshot 2568-11-12 at 16.51.10.png" "agewell.png" 2>/dev/null || true
mv "Screenshot 2568-11-12 at 16.51.33.png" "jenny.png" 2>/dev/null || true
mv "Screenshot 2568-11-12 at 16.51.48.png" "lalisa.png" 2>/dev/null || true
mv "Screenshot 2568-11-12 at 16.52.00.png" "lamduan.png" 2>/dev/null || true
mv "Screenshot 2568-11-12 at 16.52.11.png" "susann.png" 2>/dev/null || true
mv "Screenshot 2568-11-12 at 16.52.38.png" "yusokh.png" 2>/dev/null || true

# Copy Molli as ayuwat if needed
if [ ! -f "ayuwat.jpg" ] && [ -f "Molli.jpeg" ]; then
    cp "Molli.jpeg" "ayuwat.jpg"
fi

echo "✅ Images renamed successfully"
ls -lah
