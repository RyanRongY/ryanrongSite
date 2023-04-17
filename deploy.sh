#!/bin/bash

echo "Deploying changes..." >> /var/www/ryanrong.site/public_html/deploy_log.txt

# Navigate to the root directory of your website
cd /var/www/ryanrong.site/public_html

# Pull in the latest changes from the GitHub repository
git pull --verbose >> /var/www/ryanrong.site/public_html/deploy_log.txt 2>&1

echo "Deployment complete!" >> /var/www/ryanrong.site/public_html/deploy_log.txt
