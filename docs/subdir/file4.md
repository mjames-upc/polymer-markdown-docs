---
layout: default
type: guide
shortname: Docs
title: Install EDEX
subtitle: Install & Config
---

# Download

For 64-bit RHEL/CentOS 5 and 6, download and run the script [installEDEX.sh](http://www.unidata.ucar.edu/software/awips2/installEDEX.sh):

    wget http://www.unidata.ucar.edu/software/awips2/installEDEX.sh
    chmod 755 ./installEDEX.sh
    ./installEDEX.sh

This will install to `/awips2/edex`, `/awips2/data` and other directories.

> CentOS/RHEL 5 and 6 are the only supported operating systems for EDEX (Though you may have luck with Fedora Core 12 to 14 and Scientific Linux). Not supported for EDEX: Debian, Ubuntu, SUSE, Solaris, OS X, Fedora 15+, CentOS/RHEL 7, Windows

selinux should be **disabled** [(read more about selinux at redhat.com)](https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/6/html/Security-Enhanced_Linux/sect-Security-Enhanced_Linux-Enabling_and_Disabling_SELinux-Disabling_SELinux.html)
    

# EDEX Config

1. create user `awips` and group `fxalpha` and create AWIPS II directories

        groupadd fxalpha && useradd -G fxalpha awips
        mkdir -p /awips2/data_store

2. `/etc/security/limits.conf`
 
    Qpid is known to crash on some systems which have not defined a higher security limit for user processes and files. To be sure that Qpid can handle the high number of messages from edexBridge, add the following two lines to `/etc/security/limits.conf`
    
        awips soft nproc 65536
        awips soft nofile 65536

    or with the command

        printf "awips soft nproc 65536\nawips soft nofile 65536\n" >> /etc/security/limits.conf

3. `/etc/sysconfig/iptables`

    To serve data from an EDEX server, iptables must allow TCP connections on ports **5672**, **9581** and **9582**. The following lines added to `/etc/sysconfig/iptables`, followed by the command `service iptables restart`, will configure iptables for EDEX.
    
        -A INPUT -p tcp -m tcp --dport 5672 -j ACCEPT
        -A INPUT -p tcp -m tcp --dport 9581 -j ACCEPT
        -A INPUT -p tcp -m tcp --dport 9582 -j ACCEPT


# What does installEDEX.sh do?

1. Downloads [http://www.unidata.ucar.edu/software/awips2/doc/awips2.repo](http://www.unidata.ucar.edu/software/awips2/doc/awips2.repo) to `/etc/yum.repos.d/awips2.repo`
2. Runs `yum clean all`
3. Runs `yum groupinstall awips2-server`
