Polymer Documentation Theme 
===========================

This is a boilerplate documentation framework for Github Pages
using Markdown. This project is based on 
[Polymer/docs](https://github.com/Polymer/docs).

[Jekyll][https://jekyllrb.com] and [Grunt](https://gruntjs.com) 
are used to generate static HTML in a folder called `_site`. SASS 
is converted to CSS. The `_site` folder can be served locally for
development, and can be pushed to Github Pages.

See the **demo** at [https://mjames-upc.github.io/polymer-docs/](https://mjames-upc.github.io/polymer-docs/).

##  Install npm

    http://nodejs.org/download

npm is a JavaScript dependency manager. It is bundled with Node.js 
by default.

##  Install Bundler

    gem install bundler jekyll --user-install

The `--user-install` flag will install the gem to your home
directory (usually `~/.gem/ruby/2.2.0`). The default behavior is to
install to the system-wide Ruby directory.

If Ruby warns you that the user install directory is not on your
path, add it now by adding the following to your `.bashrc` file
(or whatever is appropriate for your development environment):

    PATH="$PATH:$(ruby -rubygems -e 'puts Gem.user_dir')/bin"

## Install Grunt, Vulcanize, and Bower

    npm install grunt-cli vulcanize bower compass
    npm install grunt --save-dev

**Grunt** automates repetitive tasks, like minifying 
JavaScript, compiling SASS, and deploying the website.

**Vulcanize** (built by the Polymer team) reduces HTML files and their 
dependent HTML imports into one file. Bower is another tool for
managing JavaScript dependencies.

To install these tools globally, add a `-g` flag after `npm install`.

## Build

Clone this repository. For sake of example, we'll assume you clone 
it to `~/polymer-docs`.

    git clone https://github.com/mjames-upc/polymer-docs.git
    cd polymer-docs

    bundle install
    npm install
    bower install

    grunt docs

## Deploy Locally

    grunt
    
and point a browser to 

    http://127.0.0.1:4000/polymer-docs/

## Publish on Github Pages

The command `grunt gh-pages` will download your remote repo hosted on Github, so be sure to have all of your commits pushed before running this command. 

Run `./deploy.sh` and a new `_site` directory is created and trimmed of fat. You can manually copy the contents of this directory to another repo `gh-pages` branch and push to Github, just be certain that names defined in `_config.yml` are correct.

**Note**: only project owners can publish the documentation.

   grunt gh-pages



