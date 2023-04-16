<?php
// Deploy the changes
$output = shell_exec('/bin/bash /var/www/ryanrong.site/public_html/deploy.sh');
echo $output;
?>