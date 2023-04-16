#!/bin/bash

echo "Deploying changes..."

# Navigate to the root directory of your website
cd /var/www/ryanrong.site/public_html

# Pull in the latest changes from the GitHub repository
git pull origin master

echo "Deployment complete!"
