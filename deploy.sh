#!/bin/bash
echo "working in" `pwd`
DIST_DIR=_site

# Remove if exists
if [ -d $DIST_DIR ]; then
  rm -rf $DIST_DIR
fi

# Build docs
grunt docs

# Save space
find $DIST_DIR -name demos | xargs rm -rf 
find $DIST_DIR -name test | xargs rm -rf 

grunt gh-pages
