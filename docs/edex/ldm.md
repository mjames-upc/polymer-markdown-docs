---
layout: default
type: guide
shortname: Docs
title: Default LDM feeds
subtitle: EDEX Admin
---

{% include toc.html %}


`/awips2/ldm/etc/ldmd.conf` is the main configuration file for the LDM server, where the EDEX server and default feed types are defined.

At the top of `ldmd.conf`, you can see the **EXEC** lines

    EXEC    "pqact -e"
    EXEC    "edexBridge -s EDEX_HOSTNAME"
  
where `EDEX_HOSTNAME` is set to your local EDEX server with the command `edex setup`.

## Default feed types

Remember than LDM commands such as these require **TAB SEPARATION** between items.

    REQUEST NEXRAD3 ".*" idd.unidata.ucar.edu
    REQUEST FNEXRAD|IDS|DDPLUS|UNIWISC ".*" idd.unidata.ucar.edu
    REQUEST NGRID ".*" idd.unidata.ucar.edu
    REQUEST NOTHER|HDS|NIMAGE ".*" idd.unidata.ucar.edu
    
    REQUEST CONDUIT ".(awip3d|0p50).[0]$"   idd.unidata.ucar.edu
    REQUEST CONDUIT ".(awip3d|0p50).[1]$"   idd.unidata.ucar.edu
    REQUEST CONDUIT ".(awip3d|0p50).[2]$"   idd.unidata.ucar.edu
    REQUEST CONDUIT ".(awip3d|0p50).[3]$"   idd.unidata.ucar.edu
    REQUEST CONDUIT ".(awip3d|0p50).[4]$"   idd.unidata.ucar.edu
    REQUEST CONDUIT ".(awip3d|0p50).[5]$"   idd.unidata.ucar.edu
    REQUEST CONDUIT ".(awip3d|0p50).[6]$"   idd.unidata.ucar.edu
    REQUEST CONDUIT ".(awip3d|0p50).[7]$"   idd.unidata.ucar.edu
    REQUEST CONDUIT ".(awip3d|0p50).[8]$"   idd.unidata.ucar.edu
    REQUEST CONDUIT ".(awip3d|0p50).[9]$"   idd.unidata.ucar.edu

## Optional feed types

FNMOC and CMC models

    REQUEST FNMOC ".*" idd.unidata.ucar.edu
    REQUEST CMC ".*" idd.unidata.ucar.edu
    
Lightning

    REQUEST        LIGHTNING       ".*"    striker2.atmos.albany.edu
    REQUEST        LIGHTNING       ".*"    idd.unidata.ucar.edu
    
MRMS (with access granted from NSSL)

    REQUEST EXP ".*" 140.90.98.15
  
