---
layout: default
title: docs-menu
---

`elements/docs-menu.html` contains the collection of sidebar links.  You will need to edit this manually to organize `core-item` and `core-submenu` links.


    <core-menu id="mainmenu" on-click="{{onClick}}" selectedItem="{{item}}" fit>

      <core-item label="Installation" icon="info">
        <a href="{{ baseurl }}/"></a>
      </core-item>
      <core-item label="Pages" icon="description">
        <a href="{{ baseurl }}/docs/pages.html"></a>
      </core-item>
      <core-item label="docs-menu" icon="list">
        <a href="{{ baseurl }}/docs/docs-menu.html"></a>
      </core-item>

      <core-submenu label="Appendix" icon="expand-more">
        <core-item label="Acronyms and abbreviations"><a href="{{ baseurl }}/docs/appendix-acronyms.html"></a></core-item>
        <core-item label="COTS and FOSS"><a href="{{ baseurl }}/docs/appendix-cots.html"></a></core-item>
      </core-submenu>

      <core-item label="on GitHub" icon="launch">
        <a href="https://github.com/mjames-upc/polymer-docs" target="_blank"></a>
      </core-item>

    </core-menu>


