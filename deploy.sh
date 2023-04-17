#!/bin/bash

LOG_FILE="/var/www/ryanrong.site/deploy_log.txt"

echo "Deploying changes..." >> $LOG_FILE

# Navigate to the root directory of your website
cd /var/www/ryanrong.site/public_html

# Fetch the latest changes from the remote repository and reset the local branch
git fetch origin
git reset --hard origin/master

echo "Deployment complete!" >> $LOG_FILE
