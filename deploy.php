<?php
// Define your repository's secret key here
$secret_key = 'your_repository_secret_key';

// Get the signature and payload from the webhook
$signature = $_SERVER['HTTP_X_HUB_SIGNATURE'];
$payload = file_get_contents('php://input');

// Log the payload data to a file
$log_file = '/var/www/ryanrong.site/log.txt';
$log_data = date('Y-m-d H:i:s') . " - Signature: $signature, Payload: $payload\n";
file_put_contents($log_file, $log_data, FILE_APPEND);

// Validate the signature
if ($signature) {
    list($algo, $hash) = explode('=', $signature, 2) + ['', ''];
    if (!hash_equals($hash, hash_hmac($algo, $payload, $secret_key))) {
        header('HTTP/1.0 403 Forbidden');
        die('Invalid signature');
    }
}

// Decode the payload data
$data = json_decode($payload, true);

// Validate the event type
if (!isset($data['pusher']) || !isset($data['repository']) || !isset($data['ref'])) {
    header('HTTP/1.0 400 Bad Request');
    die('Invalid payload');
}

// Validate the repository name
if ($data['repository']['name'] != 'ryanrongSite') {
    header('HTTP/1.0 400 Bad Request');
    die('Invalid repository name');
}

// Deploy the changes
$output = shell_exec('/bin/bash /var/www/ryanrong.site/public_html/deploy.sh ' . escapeshellarg($secret_key));
echo $output;
?>
