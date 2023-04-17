#!/bin/bash

echo "Deploying changes..." >> /var/www/ryanrong.site/public_html/deploy_log.txt

# Navigate to the root directory of your website
cd /var/www/ryanrong.site/public_html

# Fetch the latest changes from the GitHub repository
git fetch --verbose >> /var/www/ryanrong.site/public_html/deploy_log.txt 2>&1

# Reset the local repository to match the remote repository
git reset --hard origin/main >> /var/www/ryanrong.site/public_html/deploy_log.txt 2>&1

# Pull in the latest changes from the GitHub repository
git pull --verbose >> /var/www/ryanrong.site/public_html/deploy_log.txt 2>&1

echo "Deployment complete!" >> /var/www/ryanrong.site/public_html/deploy_log.txt
