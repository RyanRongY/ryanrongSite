#!/bin/bash

echo "Deploying changes..."

# Navigate to the root directory of your website
cd /var/www/ryanrong.site/public_html

# Pull in the latest changes from the GitHub repository
sudo git pull

echo "Deployment complete!"
