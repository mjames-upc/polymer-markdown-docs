---
layout: default
type: guide
shortname: Docs
title: Gridded Data
subtitle: Data Types
---

{% include toc.html %}


## Data distribution file

**/awips2/edex/data/utility/edex_static/base/distribution/grib.xml**

    <requestPatterns>
        <!-- Super Set of all possible WMO grib patterns -->
        <regex>^[EHLMOYZ][A-Z]{3}\d{2}</regex>
        <!-- This to match Unidata CONDUIT products w/o standard headers -->
        <regex>.*grib.*</regex>
        <regex>^US058.*</regex>
        <regex>^CMC_reg.*</regex>
    </requestPatterns>

## Important files and directories

|---|---|
| location on disk  | **/awips2/edex/data/hdf5/grid**  |
| definition files  | **/awips2/edex/data/utility/edex_static/base/grib/models**  |
| navigation files  | **/awips2/edex/data/utility/edex_static/base/grib/grids**  |
| grib1 definitions | **/awips2/edex/data/utility/common_static/base/grid** |
| D2D files  | **/awips2/edex/data/utility/edex_static/base/grib/grids**  |
| metadata tables | **grid** |
|                 | **grid_info** |
|                 | **gridcoverage** |

## Default feed types in /awips2/ldm/etc/ldmd.conf




## Default pattern actions in /awips2/ldm/etc/pqact.conf

### GFS 0.5 degree

      CONDUIT ^data/nccf/com/.*gfs.t[0-9][0-9]z.(pgrb2.0p50).*!(grib2)/[^/]*/(SSIGFS|GFS)/#([^/]*)/([0-9]{8})([0-9]{4})(F[0-9]..)/([^/]*)/.*! (......)
              FILE    -overwrite -log -close -edex    /awips2/data_store/grib2/conduit/GFS/\5_\6Z_\7_\8-(seq).\1.grib2
              
### NAM-40km
      CONDUIT ^data/nccf/com/nam/.*nam.*(awip3d).*!(grib2)/ncep/(NAM_84)/#([^/]*)/([0-9]{8})([0-9]{4})(F[0-1]..)/([^/]*)/.*! (......)
              FILE    -overwrite -log -close -edex    /awips2/data_store/grib2/conduit/\3/\5_\6Z_\7_\8-(seq).\1.grib2

### DGEX

      NGRID   ^[LM].E... KWBD ...... !grib2/[^/]*/([^/]*)/#[^/]*/([0-9]{8})([0-9]{4})(F[0-9]{3})/([^/]*)
              FILE    -overwrite -log -close -edex    /awips2/data_store/grib2/noaaport/DGEX/\1_\2_\3Z_\4_\5-(seq).grib2

### NOAAport HRRR

      NGRID   Y.C.[0-9][0-9] KWBY ...... !grib2/[^/]*/[^/]*/#[^/]*/([0-9]{12})F(...)/(.*)/.*
              FILE    -overwrite -log -close -edex    /awips2/data_store/grib2/noaaport/HRRR/\1_F\2_\3_(seq).grib2
              
### GFS212 40km
      NGRID   ^[LM].R... KWBC ...... !grib2/[^/]*/([^/]*)/#(212)/([0-9]{8})([0-9]{4})(F[0-9]{3})/([^/]*)
              FILE    -overwrite -log -close -edex    /awips2/data_store/grib2/noaaport/GRID\2/\1_\3_\4Z_\5_\6-(seq).grib2
              
### RAP-13km

      NGRID   ^[LM].D... KWBG ...... !grib2/[^/]*/([^/]*)/#([^/]*)/([0-9]{8})([0-9]{4})(F[0-9]{3})/([^/]*)
              FILE    -overwrite -log -close -edex    /awips2/data_store/grib2/noaaport/GRID\2/\1_\3_\4Z_\5_\6-(seq).grib2
              
              
### RTMA 197 (5km)

      NGRID   ^[LM].M... KWBR ...... !grib2/[^/]*/([^/]*)/#([^/]*)/([0-9]{8})([0-9]{4})(F[0-9]{3})/([^/]*)
              FILE    -overwrite -log -close -edex    /awips2/data_store/grib2/noaaport/GRID\2/\1_\3_\4Z_\5_\6-(seq).grib2
              
              
### RTMA-Mosaic (2.5km)

      NGRID   ^[LM].[IQ]... KWBR ...... !grib2/[^/]*/([^/]*)/#([^/]*)/([0-9]{8})([0-9]{4})(F[0-9]{3})/([^/]*)
              FILE    -overwrite -log -close -edex    /awips2/data_store/grib2/noaaport/GRID\2/\1_\3_\4Z_\5_\6-(seq).grib2
              
              
### NamDNG 2.5 and 5km
      NGRID   ^[LM].[IM]... KWBE ...... !grib2/[^/]*/([^/]*)/#([^/]*)/([0-9]{8})([0-9]{4})(F[0-9]{3})/([^/]*)
              FILE    -overwrite -log -close -edex    /awips2/data_store/grib2/noaaport/GRID\2/\1_\3_\4Z_\5_\6-(seq).grib2
              
              
### NAM12 (#218)
      NGRID   ^[LM].B... KWBE ...... !grib2/[^/]*/([^/]*)/#([^/]*)/([0-9]{8})([0-9]{4})(F[0-9]{3})/([^/]*)
              FILE    -overwrite -log -close -edex    /awips2/data_store/grib2/noaaport/GRID\2/\1_\3_\4Z_\5_\6-(seq).grib2

### CMC

      CMC     CMC_reg_(.*)km_(..........)_P(...).grib2
              FILE    -overwrite -log -close -edex    /awips2/data_store/grib2/cmc/cmc_reg_\1km_\2_P\3.grib2

### FNMOC

      FNMOC   ^US058.*(0018_0056|0022_0179|0027_0186|0060_0188|0063_0187|0110_0240|0111_0179|0135_0240|0078_0200)_(.*)_(.*)_(.*)-.*
              FILE    -log -overwrite -close -edex /awips2/data_store/grib2/fnmoc/US_058_\1_\2_\3_\4-(seq).grib
      
                     
