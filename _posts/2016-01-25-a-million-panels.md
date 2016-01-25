---
layout: post
title: A One Million Panel Trelliscope Display
category : blog
tags : [tessera, trelliscope, rbokeh]
author: ryan
permalink: blog/upcoming-talks
---

Imagine being able to interactively visualize hundreds of gigabytes of high-frequency daily equity trading activity across tens of thousands of stock symbols over a half of a year of data.  And imagine being able to create such a visualization with a few simple commands in R.

<!--more-->

As part of a financial data analysis exercise for the DARPA XDATA program last summer, we created such a Trelliscope display with nearly one million panels (997,204 to be exact).  Watch the video below to see what it looks like.

<iframe width="560" height="315" src="https://www.youtube.com/watch?v=KatkJx9Ui0o" frameborder="0" allowfullscreen></iframe>

In this display, we partitioned billions of transactions into subsets by trading day and stock symbol.  An [rbokeh](http://hafen.github.io/rbokeh/) plot of volume-adjusted average price vs. time at one-second intervals is shown for each subset, and the plots are sortable and filterable by several *cognostics* - metrics computed from each subset - such as the exchange the stock is traded on, the number of trades in the day, the price change for the day, etc.

<!-- Each panel is for one security symbol for one day.  The plot is the volume adjusted average per-second price vs. time, shown in blue, while a red vertical line for each second extends from the low to high values seen during that second.  For time points at which trades have been flagged by the data provider, an orange point is plotted.  Hovering on points provides additional information. -->

This video is not narrated, but what you see are examples of interactively exploring the subsets in different ways, including sorting based on the number of "filtered" transactions (a measure of strange activity), filtering on a particular ticker symbol, filtering on large price jumps, etc.  The goal is to illustrate the ability to potentially look at any area of this very large data set in detail through interactions with the cognostics.

## Creating the Display ##

All of the data for this example was located on a Hadoop cluster on the XDATA cloud.  To create the display, we used the Tessera package [datadr](http://tessera.io/docs-datadr/) backed by [RHIPE](https://github.com/tesseradata/RHIPE) to compute on Hadoop to read in the raw text data, do some preprocessing, and perform some exploratory analysis.  This initial preprocessing and exploration is always an involved iterative process, but for the sake of focusing on the Trelliscope display, we will not go into detail.

Once the preprocessing was complete and we had a good understanding of the variables in the data, we were ready to create the display.  Below is a high-level listing of R code that was used to create the display.

```r
inputData <- hdfsConn("/nxcore/equities")

bySymbolDay <- divide(inputData,
  by = c("symbol", "date"),
  output = hdfsConn("/nxcore/bySymbolDay"))

makeDisplay(bySymbolDay,
  name = "equity_daily_seconds",
  panelFn = nxPanelFn,
  cogFn = nxCogFn)
```

Here we are specifying that we want to take a data set located at `"nxcore/equities"` on the Hadoop distributed file system (HDFS), partition it by variables "symbol" and "date", place the resulting data set on HDFS at `"/nxcore/bySymbolDay"`, and then create a trelliscope display against this new dataset, applying a panel function, `nxPanelFn()`, and a cognostics function, `nxCogFn()` to each subset (note that we have omitted the code for these functions).

This display is backed by Hadoop.  When the user is interacting with the viewer and requests to look at particular subsets of the data, the relevant data is grabbed from HDFS and the plot is rendred on the fly using `nxPanelFn()`.  The user's interactivity with the panels in the viewer is predicated on the cognostics specified in `nxCogFn()`.

A key point to keep in mind is that with Trelliscope, we have the flexibility to specify any way to partition the data, apply any visualization to the subsets of that partitioning, and specify any set of metrics for interacting with the panels, in a scalable and easy-to-code manner.  This is just one view of the data, but we can now very easily add multiple new views the data.  There are also many other ways we might want to divide this data, merging in options quote data, looking at other levels of aggregation, etc.

If you want to learn more about Trelliscope, see the [documentation for the package](http://tessera.io/docs-trelliscope/).

