#!/bin/bash

# Update package list and install OpenSSL
apt-get update
apt-get install -y libssl-dev

# Ensure Bundler is installed
gem install bundler

# Install the required gems
bundle install

# Run the build command
npm run build

