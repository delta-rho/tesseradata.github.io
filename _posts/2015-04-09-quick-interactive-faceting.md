---
layout: post
title: Quick Interactive Faceting with Trelliscope
category : blog
tags : [tessera, trelliscope, datadr, rbokeh]
author: ryan
permalink: blog/quick-interactive-faceting/
---

We've been pushing a lot of updates and fixes to several of our projects lately and we'd like to show a few examples of some of the new features.  In this post we'll cover some new features in datadr and trelliscope that provide a quick mechanism for generic faceting, a very powerful visualization technique, along with examples of embedding [htmlwidgets](http://www.htmlwidgets.org) in trelliscope displays and plugging trelliscope into the [dplyr](http://cran.rstudio.com/web/packages/dplyr/vignettes/introduction.html) pipeline.

<!--more-->

Here are some of the most significant updates that we'll discuss in this post.

- [trelliscope](https://github.com/tesseradata/trelliscope)
  - `qtrellis()` function that provides quick faceting
  - experimental support for [htmlwidget](http://www.htmlwidgets.org) panel functions
- [rbokeh](https://github.com/tesseradata/datadr): simplified embedding of rbokeh plots in shiny (and trelliscope)
- [datadr](https://github.com/bokeh/rbokeh): `to_ddf()` function that helps datadr and trelliscope fit in nicely with the dplyr pipeline when working with more modest-sized data frame objects

### qtrellis()

While trelliscope has been designed for [scalable detailed visualization](http://ml.stat.purdue.edu/docs/trelliscope.ldav.2013.pdf) of large data sets, it also provides a nice generic mechanism for generating and interactively viewing a [faceted small multiples](http://en.wikipedia.org/wiki/Small_multiple) plot with data of any size, using most any R visualization package.

In order to make trelliscope more accessible for quick generation of faceted displays in a simplified setting, we have created a function `qtrellis()`, which can be easily injected into a data analysis pipeline.  All that is needed for `qtrellis()` is an input a data frame, grouped dplyr tbl, or datadr ddo/ddf object and a panel function.

As an example, let's re-create the housing example that is in the [quickstart](http://tessera.io/docs-trelliscope/#quickstart).

First, to make sure your environment is up-to-date, install the following packages (note that the examples assume you already have devtools, dplyr, and shiny installed from CRAN):

```{r}
devtools::install_github("hafen/housingData")
devtools::install_github("ramnathv/htmlwidgets")
devtools::install_github("tesseradata/datadr")
devtools::install_github("tesseradata/trelliscope")
devtools::install_github("bokeh/rbokeh")

library(trelliscope)
library(rbokeh)
library(dplyr)
library(housingData)
```

Suppose we are using datadr to divide the housing data by county and state:

```{r}
byCounty <- divide(housing, c("county", "state"))
```

Now we want to make a quick display of the median list price vs. time for each county.  Here we will use the [rbokeh package](http://hafen.github.io/rbokeh/), which is an htmlwidget, to illustrate the new feature of being able to embed htmlwidgets in trelliscope.

```{r}
panel <- function(x)
  figure() %>%
    ly_points(time, medListPriceSqft, data = x, hover = medListPriceSqft)
```

This basically creates a plot that will use points to mark the list price and time, and will show the list price when hovered.  rbokeh is a nice package for declaratively building interactive web-based plots, and more information on it is available [here](http://hafen.github.io/rbokeh/).

Now with `qtrellis()`, we simply supply the data and the panel function.

```{r}
qtrellis(byCounty, panel)
```

There is no need to initialize a visualization database or give the display a name or group or anything like that, although all of these can optionally be done.  See `?qtrellis` for more details.

### dplyr-friendly faceting

Now suppose we have been working with the data in dplyr and we want to pipe a grouped tbl to trelliscope:

```{r}
housing %>%
  group_by(county, state) %>%
  qtrellis(panel, layout = c(2, 4))
```

That's a very small number of lines of code for the resulting interactive faceted display of nearly 3000 panels that you get:

<img src="{{ site.baseurl }}images/qtrellis.gif" width="100%"></img>

Note that here we also specified that by default we want 2 rows and 3 columns.

Under the hood `qtrellis()` is making use of the new `to_ddf()` function in datadr.  `to_ddf()` can also be used explicitly when transitioning an analysis from data frames with dplyr to potentially more arbitrary objects with datadr.

### htmlwidgets

Faceting is a powerful visualization technique (stay tuned for a post about the benefits of interactive small multiples vs. other interactive visualization techniques), and while some systems like lattice and ggplot have nice faceting features, there are an astounding number new visualization packages in R, including a growing number of [great htmlwidgets](http://www.htmlwidgets.org/showcase_leaflet.html) that may not have have this capability built in, and trelliscope can act as a nice general mechanism for providing this.

The examples above illustrate using the rbokeh htmlwidget with trelliscope.  We are still working out some issues with general support for all htmlwidgets but we will keep you updated with new examples as we work things out.

