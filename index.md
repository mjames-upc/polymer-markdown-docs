---
layout: default
title: Installation
---

Polymer Docs is a boilerplate documentation framework and theme for Github Pages which converts Markdown to [Polymer library Web Components](https://www.polymer-project.org/1.0/) pages. This project is based on [Polymer/docs](https://github.com/Polymer/docs) and uses [Jekyll](https://jekyllrb.com) and [Grunt](https://gruntjs.com), among other libraries. 

# Install

    gem install bundler jekyll --user-install
    npm install grunt-cli vulcanize bower compass
    npm install grunt --save-dev

To install globally run `npm install -g ...`.

The `--user-install` flag will install the gem to your home directory (usually `~/.gem/ruby/2.2.0`).*

## **Fork** [https://github.com/mjames-upc/polymer-docs](https://github.com/mjames-upc/polymer-docs) on Github

and then clone your fork:

    git clone https://github.com/&lt;username&gt;/polymer-docs.git
    cd polymer-docs

    bundle install
    npm install
    bower install

    grunt docs

# Deploy Locally

    grunt
    
and open [http://127.0.0.1:4000/polymer-docs/](http://127.0.0.1:4000/polymer-docs/)

# Publish on Github Pages

Push any commits to your remote (you must have your own repo pushed to github if you didn't fork it there already).

    git push origin master

    grunt gh-pages

and go to [https://&lt;username&gt;.github.io/polymer-docs/](https://mjames-upc.github.io/polymer-docs/)

The command `grunt gh-pages` will download your remote repo to a temporary directory, checkout the gh-pages branch (or create one if it doesn't exist), copy the contents of `_site`, and then push back to github (`git push origin gh-pages`). 

Run [`./deploy.sh`](https://github.com/mjames-upc/polymer-docs/blob/master/deploy.sh) and a new `_site` directory is created and trimmed of fat. You can manually copy the contents of this directory to another repo [`gh-pages`](https://github.com/mjames-upc/polymer-docs/tree/gh-pages) branch and push to Github, just be certain that names defined in [`_config.yml`](https://github.com/mjames-upc/polymer-docs/blob/master/_config.yml) are correct.

- **[Grunt](https://gruntjs.com)** automates tasks like minifying JavaScript, compiling SASS, and deploying the website with Jekyll.

- **[Vulcanize](https://github.com/Polymer/vulcanize)** (built by the Polymer team) reduces HTML files and their dependent HTML imports into one file. 

- **[Bower](http://bower.io)** is a tool for managing JavaScript dependencies.


* If Ruby warns you that the user install directory is not on your
path, add it now by adding the following to your `.bashrc` file
(or whatever is appropriate for your development environment):

    PATH="$PATH:$(ruby -rubygems -e 'puts Gem.user_dir')/bin"

