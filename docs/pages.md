---
layout: default
title: Markdown Pages
---

Markdown files stored in the [`docs`](https://github.com/mjames-upc/polymer-docs/tree/master/docs) directory will be converted to HTML.  Each Markdown file must contain a header containing the following:

    ---
    layout: default
    title: Page Title
    subtitle: Page Subtitle
    ---

These Markdown file names correspond to the linked names in the file [`elements/docs-menu.html`](docs-menu.html), which contains the collection of sidebar links that you see on this page.  

One optional header definition for an alternate secondary color is 

    type: guide

