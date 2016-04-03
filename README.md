Polymer docs are mostly in Markdown with some HTML. [Jekyll][jekyll] is used 
to generate the static HTML for the site. The output is generated into a 
folder called `_site` and served by Jekyll locally, as well as on Github Pages.

We use Jekyll 3.1 and [Grunt][grunt] to generate the documentation, and compass to compile SASS to CSS.


## Setup

###  Install npm

    http://nodejs.org/download

npm is a JavaScript dependency manager. It is bundled with Node.js 
by default.

###  Install Bundler

    gem install bundler jekyll

Bundler is a Ruby dependency manager. We use it to manage 
Jekyll (the tool we use to generate static HTML from markdown), and 
its dependencies. 

The `--user-install` flag will install the gem to your home
directory (usually `~/.gem/ruby/2.2.0`). The default behavior is to
install to the system-wide Ruby directory
(usually `/var/lib/gems`) which can create all kinds of
problems down the line. 

If Ruby warns you that the user install directory is not on your
path, add it now by adding the following to your `.bashrc` file
(or whatever is appropriate for your development environment):

    PATH="$PATH:$(ruby -rubygems -e 'puts Gem.user_dir')/bin"

### install Grunt, Vulcanize, and Bower

    npm install grunt-cli vulcanize bower compass
    npm install grunt --save-dev

**Grunt** automates repetitive tasks, like minifying 
JavaScript, compiling SASS, and deploying the website.

**Vulcanize** (built by the Polymer team) reduces HTML files and their 
dependent HTML imports into one file. Bower is another tool for
managing JavaScript dependencies.

To install these tools globally, add a `-g` flag after `npm install`.

### To run locally

Clone this repository. For sake of example, we'll assume you clone 
it to `~/polymer-docs`.

    git clone https://github.com/Unidata/polymer-docs.git

Change directories to this repository.

    cd polymer-docs

Install Jekyll and its dependencies:

    bundle install

Install Grunt and various other tools for building / deploying the site: 

    npm install

`npm` reads `package.json` and installs all of the dependencies
it finds into `node_modules`.

Install bower dependencies for Polymer:

    bower install

### Build the app:

    grunt docs

### Deploy the app

With Jekyll

    jekyll serve
    
and point a browser to 

    http://127.0.0.1:4000/polymer-docs/

Once your changes look good, `git commit` them and push.


### Release

Run `bower update` to make sure you have the latest component dependencies.

Once these are updated, you need to update some versions for the docs:

- Increment the version in `app.yaml`;
- Update the Polymer release version in `_config.yml`.
- Add a link point link to the release notes in `changelog.md`.

Build the docs:

    grunt docs

or

    ./deploy.sh

The script deploy.sh will remove and recreate the _site directory, and trim some fat as well (removing Polymer element demo and test directories).
    
Now run the dev serve with 

    grunt

## Pushing the docs to Github Pages

**Note**: only project owners can publish the documentation.

   grunt gh-pages



