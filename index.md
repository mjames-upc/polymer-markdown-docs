---
layout: default
title: Installation
---

This is a boilerplate documentation framework and theme for Github Pages using Markdown.

This project is based on [Polymer/docs](https://github.com/Polymer/docs) and uses [Jekyll](https://jekyllrb.com) and [Grunt](https://gruntjs.com) to generate static HTML in a folder called `_site`. The `_site` folder can be served locally for  development, and is desgined for easy publication to Github Pages.

# Installation

##  Install [npm](https://www.npmjs.com)

npm is a JavaScript dependency manager and is bundled with Node.js, available at [http://nodejs.org](http://nodejs.org).

##  Install [Bundler](http://bundler.io)

    gem install bundler jekyll --user-install

The `--user-install` flag will install the gem to your home directory (usually `~/.gem/ruby/2.2.0`).

If Ruby warns you that the user install directory is not on your
path, add it now by adding the following to your `.bashrc` file
(or whatever is appropriate for your development environment):

    PATH="$PATH:$(ruby -rubygems -e 'puts Gem.user_dir')/bin"

## Install [Grunt](https://gruntjs.com), [Vulcanize](https://github.com/Polymer/vulcanize), and [Bower](http://bower.io)

To install these tools globally, add a `-g` flag after `npm install`.

    npm install grunt-cli vulcanize bower compass
    npm install grunt --save-dev

**[Grunt](https://gruntjs.com)** automates tasks like minifying JavaScript, compiling SASS, and deploying the website with Jekyll.

**[Vulcanize](https://github.com/Polymer/vulcanize)** (built by the Polymer team) reduces HTML files and their dependent HTML imports into one file. 

**[Bower](http://bower.io)** is a tool for managing JavaScript dependencies.


# Build

Clone this repository. For sake of example, we'll assume you clone 
it to `~/polymer-docs`.

    git clone https://github.com/mjames-upc/polymer-docs.git
    cd polymer-docs

    bundle install
    npm install
    bower install

    grunt docs

# Deploy Locally

    grunt
    
and point a browser to 

    http://127.0.0.1:4000/polymer-docs/

# Publish on Github Pages

    grunt gh-pages

**Note**: only project owners can publish the documentation.

The command `grunt gh-pages` will download your remote repo to a temporary directory, checkout the gh-pages branch (or create one if it doesn't exist), copy the contents of `_site`, and then push back to github (`git push origin gh-pages`). 

Run [`./deploy.sh`](https://github.com/mjames-upc/polymer-docs/blob/master/deploy.sh) and a new `_site` directory is created and trimmed of fat. You can manually copy the contents of this directory to another repo [`gh-pages`](https://github.com/mjames-upc/polymer-docs/tree/gh-pages) branch and push to Github, just be certain that names defined in [`_config.yml`](https://github.com/mjames-upc/polymer-docs/blob/master/_config.yml) are correct.
