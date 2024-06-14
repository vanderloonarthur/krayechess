#!/bin/bash

# Ensure Bundler is installed
gem install bundler

# Install the required gems
bundle install

# Run the Jekyll build
bundle exec jekyll build

