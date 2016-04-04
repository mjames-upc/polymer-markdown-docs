---
layout: default
title: docs-menu
---

[`elements/docs-menu.html`](https://github.com/mjames-upc/polymer-docs/blob/master/elements/docs-menu.html) is a Polymer element that contains the sidebar menu. The `<docs-menu>` tag is called in [`_layouts/default.html`](https://github.com/mjames-upc/polymer-docs/blob/master/_layouts/default.html) as part of `<app-drawer>`:

    <app-drawer id="sidebar" unresolved>
      <div layout vertical id="sidebar-content">
        <div id="logo-container" layout horizontal center>
          <a href="{{ site.baseurl }}/" class="logo"><img src="{{ site.baseurl }}/images/logo.svg" alt="{{ site.project_name }}"></a>
        </div>

        <docs-menu unresolved flex
                 baseurl='{{ site.baseurl }}'
                 coreElements='{% list_components dir:components prefix:core blacklist:"core-slide core-layout core-doc-viewer core-home-page core-home-page-dev core-transition-css core-overlay-layer core-key-helper core-doc-toc core-doc-page core-component-page core-popup-menu core-dialog-transition" %}'
                 paperElements='{% list_components dir:components prefix:paper blacklist:"paper-doc-viewer paper-ink paper-scaffold paper-menu-button-transition paper-menu-button-overlay-container paper-form paper-row paper-group paper-doc-toc paper-doc-page"%}'></docs-menu>
      </div>
    </app-drawer>


You will need to edit this manually to organize `core-item` and `core-submenu` links.  And be sure to understand how to organize [Markdown pages](pages.html) for your docs.

    <core-menu id="mainmenu" on-click="{{onClick}}" selectedItem="{{item}}" fit>

      <core-submenu label="Overview" icon="info">
        <core-item label="How to install">
          <a href="{{ baseurl }}/"></a>
        </core-item>
        <core-item label="Jekyll Configuration">
          <a href="{{ baseurl }}/docs/config.html"></a>
        </core-item>
        <core-item label="Markdown Pages">
          <a href="{{ baseurl }}/docs/pages.html"></a>
        </core-item>
        <core-item label="docs-menu.html">
          <a href="{{ baseurl }}/docs/docs-menu.html"></a>
        </core-item>
      </core-submenu>

      <core-item label="on GitHub" icon="launch">
        <a href="https://github.com/mjames-upc/polymer-docs" target="_blank"></a>
      </core-item>

    </core-menu>

