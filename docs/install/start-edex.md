---
layout: default
type: guide
shortname: Docs
title: Run EDEX
subtitle: Install & Config
---

{% include toc.html %}

By default, EDEX services (including postgres, httpd-pypies, and qpidd) will run at boot, as defined in the header of each service file (e.g. `/etc/init.d/edex_camel`)
 
    #!/bin/bash
    # edex_camel  This shell script takes care of starting...
    # chkconfig: 35 99 10

The `chkconfig: 35 99 10` defintion defines runlevels 3 and 5, started at priority 99 (last), stopped at priority 10 (one of the first).  Each EDEX file in `/etc/init.d` has runlevel and priority definitions.  Furthermore, when the `edex setup` command is run during install, `chkconfig` is run for each core EDEX service (not including the LDM): 

    chkconfig edex_postgres on --level 35
    chkconfig httpd-pypies on --level 35
    chkconfig qpidd on --level 35
    chkconfig edex_camel on --level 35

The EDEX administrator should be aware that these services are running on boot by default, but the LDM is not (for now).

## `edex status`
    
    [edex status]
     postgres    :: not running
     pypies      :: not running
     qpid        :: not running
     EDEXingest  :: not running
     EDEXgrib    :: not running
     EDEXrequest :: not running
     ldmadmin    :: not running


     edex (status|start|stop|setup|log|purge|users)

## `edex start`

    Starting EDEX PostgreSQL: 
    Starting logging service:                                  [  OK  ]
    Starting httpd: nohup: redirecting stderr to stdout       [  OK  ]
    Starting QPID
    QPID is running (PID  7911)
    Starting EDEX Camel (request): 
    Starting EDEX Camel (ingest): 
    Starting EDEX Camel (ingestGrib): 
    EDEX Camel (ingest) is running (wrapper PID 8175)
    EDEX Camel (ingest) is running (java PID 8376)
    EDEX Camel (request) is running (wrapper PID 8176)
    EDEX Camel (request) is running (java PID 8258)
    EDEX Camel (ingestGrib) is running (wrapper PID 8177)
    EDEX Camel (ingestGrib) is running (java PID 8318)
    Cleaning LDM:	                                           [  OK  ]
    Deleting the ldm queue:	                                   [  OK  ]
    Creating the ldm queue:	                                   [  OK  ]
    Starting AWIPS II LDM:The product-queue is OK.
    Checking pqact(1) configuration-file(s)...
        /awips2/ldm/etc/pqact.conf: syntactically correct
    Checking LDM configuration-file (/awips2/ldm/etc/ldmd.conf)...
    Starting the LDM server...

## `edex stop`

    Stopping EDEX Camel (request): 
    Stopping EDEX Camel (ingest): 
    Stopping EDEX Camel (ingestGrib): 
    EDEX request shutdown
    EDEX ingestGrib shutdown
    Waiting for EDEX ingest to shutdown
    EDEX ingest shutdown
    Stopping QPID
    Session terminated, killing shell... ...killed.
    Stopping httpd: 
    Stopping logging service:                                  [  OK  ]
    Stopping EDEX PostgreSQL: 
    Stopping AWIPS II LDM:Stopping the LDM server...
    Waiting for the LDM server to terminate...


# Other Options

## `edex setup` 
to configure (or confirm) that the EDEX hostname and IP address definitions exist.  If these definitions are missing, `edex start` will run `edex setup` for you.

    edex setup
    [edex] EDEX IP and Hostname Setup
     Checking /awips2/data/pg_hba.conf [OK]
     Checking /awips2/edex/bin/setup.env [OK]
    
    [edit] Hostname edex.unidata.ucar.edu added to /awips2/ldm/etc/ldmd.conf
    [done]


## `edex log` 
to view the Ingest JVM log (default) and others such as `edex log grib`, `edex log request`, `edex log ldm`.

    edex log
    [edex] EDEX Log Viewer

     :: No log specified - Defaulting to ingest log
     :: Viewing /awips2/edex/logs/edex-ingest-20151209.log. Press CTRL+C to exit
    
    INFO  2015-12-09 18:34:42,825 [Ingest.binlightning-1] Ingest: EDEX: Ingest - binlightning:: /awips2/data_store/entlightning/20151209/18/SFPA42_KWBC_091833_38031177.2015120918 processed in: 0.0050 (sec) Latency: 0.0550 (sec)
    Time spent in persist: 68
    INFO  2015-12-09 18:34:45,951 [Ingest.obs-1] Ingest: EDEX: Ingest - obs:: /awips2/data_store/metar/20151209/18/SAIN31_VABB_091830_131392869.2015120918 processed in: 0.0810 (sec) Latency: 0.1800 (sec)

## `edex users` 
to view user information for your EDEX server (account username and domain name are recorded by each edex server for localization purposes).

## `edex purge` 
to view any stuck purge jobs in PortgreSQL (a rare but serious problem if your disk fills up).  The solution to this is to run `edex purge reset`.
