---
layout: default
type: guide
shortname: Docs
title: Surface Menu
subtitle: D2D User Guide
---

{% include toc.html %}

Several of the data sets in the Obs menu can be interrogated (sampled) for more detailed information by clicking mouse Button 1 (B1) over a site. These data sets include METAR, Maritime, and Local. The Obs menu is subdivided into sections that contain related products. These sections are described below.

## METAR

This section contains automatically updating METAR observations, ceiling and visibility plots, wind chill and heat indices, precipitation plots at various time intervals, and quality-checked MSAS observations. The 24hr Chg METAR plot provides the difference between the observed temperature, dewpoint, pressure, and wind from those observed 24 hours earlier. The calculation of the wind difference involves vector subtraction of the "u" and "v" components.

## Synoptic

This section contains automatically updating Synoptic observations, and 6 hour and 24 hour precip plots. Note that this section of the menu is not present at most sites.

## Maritime

This section contains buoy and ship report plots, plus SAFESEAS for the Marine WFOs.

* **MAROB** displays include Station Plots
* The **Other Maritime Plots** cascading menu contains options to display the Fixed and Moving Sea State plots, MAROB Sea State and Cloud/Vis plots, Maritime Clouds/Visibility plots, as well as the Scatterometer Winds.
	* **Sea State** plots provide information on the wave period and height and swell period and height. The wave type, whether a standard wave or a wind wave, is denoted at the origin of the plot by a "+" or a "w", respectively. An "x" at the plot origin signifies that no wave type was reported. If reported, the directions of the primary and secondary swells are denoted with arrows labeled "1" and "2", respectively. The arrows point in the direction the swell is moving.
	* **Maritime Clouds/Visibility** plots contain a station circle denoting sky coverage and the visibility along with standard symbols for obstructions to visibility.
	* **Scatterometer Winds** are obtained from the ASCAT instrument on EUMETSAT's MetOp-A polar orbiting satellite. This instrument sends pulses of radiation to the ocean surface and measures the amount of energy, called backscatter, it receives back. When you sample these observations, the time, satellite ID, wind direction, and wind speed are provided. With the polar orbiting scanning, a given region will generally be sampled about every 12 hours. ASCAT Winds (25 km retrieval resolution but interpolated and displayed at 12.5 km resolution) can be launched from either the CAVE Obs menu or from the Satellite menu You can access the Scatterometer Winds menu options by
selecting **Surface** > **Other Maritime Plots** > **Scatterometer Winds**. The ASCAT Scatterometer Ocean Winds product is displayable on CAVE at all scales: N. Hemisphere, North America, CONUS, Regional, State(s), and WFO.
	* **SAFESEAS** is the System on AWIPS for Forecasting and Evaluation of Seas and Lakes. It is a set of AWIPS applications that continuously monitor marine and adjacent overland conditions for specific marine and weather hazards. SAFESEAS helps make faster, earlier, and higher-quality decisions regarding marine watches and warnings. SAFESEAS is primarily intended to support any WFO with marine forecast responsibilities; however, non-marine WFOs also may find its monitoring capabilities to be of practical use. The SAFESEAS menu option is available under the OBs menu's Maritime section; but only available at marine WFOs; local WFOs can be reconfigured to include this option. The SAFESEAS menu has two Fog Monitoring products. These products include a Fog Monitoring Table tool and a Fog Monitor Levels color table. For more information about the Fog Monitor, refer to the Fog Monitor User's Guide. You can access the Fog Monitor from the Obs menu under the Hazards section and also through the SAFESEAS monitor threat level CAVE icon on the main menu. This guide opens in Adobe® Reader®.

## Hazards

The Hazards section covers local and regional plots, marine warnings, local storm reports, lightning plots, and monitoring of fog and winter weather hazards.

* **SNOW**: the System for Nowcasting Of Winter weather (SNOW) is an application suite for
continuously monitoring surface observations for detecting winter weather threats.

* **Lightning**: this menu option plots cloud-to-ground (CG) lightning flashes for specified time intervals. The data is then used to determine the intensity or frequency of CG lightning accompanying a thunderstorm for a particular area.

* **Fog**: This menu option plots the fog threat level and displays the Fog Threat Level
Zone/County table. You can also access the Fog Monitor from the SAFESEAS monitor threat
level CAVE icon on the main menu, only available at marine WFOs.

* **Other Warning Displays**: This section of the menu is defined locally, and may not be
present at your site.

* **Local Storm Reports**: Local Storm Report (LSR) plots are generated from spotter reports
that were entered into the LSR text database and decoded into the correct point data format. The LSR graphical user interface (GUI) is a stand-alone AWIPS application designed to provide forecasters with an easy and quick way to create, manage, and send the LSR public text product. This text product contains noteworthy weather events for which the forecaster has either received or sought out real-time observations.


## Surface, Metar, Synoptic, Other Station Plots

![image](../images/Rathudf.png)

![image](../images/s7YS0cg.png)

## National Convective Weather Forecast (AWC)

The [National Convective Weather Forecast](https://www.aviationweather.gov/products/ncwf/) (NCWF) is an automatically generated depiction of current convection and extrapolated significant current convection.  It is a supplement to, but does not substitute for, the report and forecast information contained in [Convective SIGMETs](). The NCWF contains both GRIB and BUFR output. The GRIB output delineates the current convection. The BUFR output includes hazardous convection area polygons, movement arrows, and storm top and speed text information.

The NCWF display bunlde renders **storm tops and movement**, **previous performance polygons**, **1-hour extrapolation polygons**, and **current convective interest grid** (colorbar).

![image](../images/JwRbQMl.png)

## Center Weather Advisories (CWA)

The [CWA](https://aviationweather.gov/cwamis/help) is an aviation weather warning for conditions meeting or approaching national in-flight advisory (AIRMET, SIGMET or SIGMET for convection) criteria. The CWA is primarily used by air crews to anticipate and avoid adverse weather conditions in the en route and terminal environments. It is not a flight planning product because of its short lead time and duration.

Shown with NEXRAD DHR composite:

![image](../images/II5BIKb.png)

## MOS Products

These plots are derived from the MOS BUFR Bulletins. The previous MOS plots were derived from the MOS Text Bulletins. The plots display forecast data for GFS MOS, GFS-Extended MOS, and NGM MOS. Submenus under each model reveal the element choices. These displays include:

* Station Model Plots (Wind, T, Td, Sky Cover, Wx)
* MaxT/MinT (°F)
* Ceiling (agl) / Visibility (ft × 100) (Categorical)
* Probabilities Submenu (6h/12h PoP, 6h/12h Tstorm, 6h/12h Svr-Tstorm, Conditional precipitation types; %)
* QPF 12h (Categorical mid-points; inches)
* QPF 6h (Categorical mid-points; inches)
* Snowfall (6h/12h/24h, Categorical; inches)

![image](../images/cpXcdBh.png)


## Lightning

(only available for US-based .edu domains)

#### USPN

* 1 hour plot
* 15 minute plot
* 15 minute plot Pos/Neg
* 5 minute plot
* 1 hour lightning sequence plot
* 1 minute lightning sequence plot


## ASCAT Winds

The Advanced Scatterometer (ASCAT)  25 km windsoverlaid on top of GOES East water wapor:

![image](../images/X8MpdM4.png)


## Maritime

### Maritime Plots

* Fixed Buoys
* Moving Maritime
* MAROB
* Fixed Sea State
* Moving Sea State
* MAROB Sea State
* Maritime Clouds/Vis
* MAROB Clouds/Vis





### SAFESEAS

need to do with linux client


* Configure SAFESEAS Monitor Area



* Configure SAFESEAS Thresholds for Alertviz Monitoring

## Hazards

### Warnings

### Flood Warnings

### Marine Warnings

### Storm Reports

### SPS

### All Warnings

### Lightning

#### NLDN

* 1 hour plot
* 15 minute plot
* 15 minute Pos/Neg plot
* 5 minute plot
* 1 minute lightning sequence plot
* 1 minute cloud flash sequence plot

#### NLDN Grid

Available at 1km, 3km, 5km, 8km, 20km, 40km resolution

* 60 min cloud to ground density
* 60 min cloud flash density
* 60 min total flash density
* 60 min pulse density
* 15 min cloud to ground density
* 15 min cloud flash density
* 15 min total flash density
* 15 min pulse density
* 5 min cloud to ground density
* 5 min cloud flash density
* 5 min total flash density
* 5 min pulse density

## Fog Monitor

### Configure Fog Monitor Area

### Configure Algorithm Thresholds

### Configure Visibility Thresholds for Alertviz Monitoring


## SNOW

### Configure SNOW Monitor Area

### Configure SNOW Thresholds for Alertviz Monitoring
