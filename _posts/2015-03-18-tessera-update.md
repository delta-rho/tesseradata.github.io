---
layout: post
title: Tessera Update
category : blog
tags : [tessera]
author: ryan
permalink: blog/tessera-update
---

It has been a long time since the last post!  Fortunately this is not because of lack of activity on Tessera, but because things have been incredibly busy.  In this post we'll update you on what's been going on.  Expect posts much more frequently in the future!

<!--more-->

We have been engaged in many activities, including career changes, which have caused us to be a bit neglectful of the blog.  The good news is that the things we've been working on will provide plenty of material for future posts.  Some of the activities are described below, with links for more information where avaiable.

### Development ###

A major amount of our time has been spent writing code.  Here are some of the things we've been working on:

- **datadr** - several improvements to the (still experimental) SparkR backend
- **[rbokeh](http://hafen.github.io/rbokeh/)** - a new package that is an interface to [Bokeh](http://bokeh.pydata.org/en/latest/) for creating interactive web-based visualizations - we plan to eventually integrate this with Trelliscope to provide a simple declarative way to make web-based panel functions
- **trelliscopejs**: we are starting to work toward a compartmentalized Trelliscope, writing a pure javascript application with ember.js and designing it in a way that various back ends (including a standalone client-side only option, shiny, REST, etc.) can be supported
- **RHIPE**: updates to allow usage of s3 for HDFS storage on Amazon ElasticMapReduce
- Bug fixes / maintenance

### Applications ###

As part of the charge from the DARPA XDATA program, we are hard at work analyzing many data sets with Tessera.  Also, we are working on some open data sets to provide good accessible examples of Tessera in use.

Much of our work on applications will provide good material for blog posts, although unfortunately some of the data sets we are spending a lot of effort on are proprietary.

Here are some of the data sets we've been working on:

- NYC Taxi data
- High frequency trading data
- Airline on time performance data
- Building power utilization
- Life expectancy data from Quandl
- UN voting records
- Spatiotemporal weather data
- Visualizing large collections of growth profiles for the Bill & Melinda Gates Foundation
- and more...

Expect some posts related to some of these in the future.

### Devops / Environment Setup ###

Setting up a scalable Tessera environment can be complicated.  We've continued our work on various utilities for getting an environment set up.

- [EMR scripts](https://github.com/tesseradata/install-emr/tree/master/emr-3.2.1) - updated to EMR-3.2.1 AMI (Hadoop 2), greatly simplified setup, EMRFS support, documentation
- [Vagrant VM with Spark/Hadoop/Tessera](https://github.com/tesseradata/install-vagrant/tree/master/hadoop2.4-spark1.2-rhipe0.75) - useful for testing out the experimental SparkR support
- [OSX dev environment](https://github.com/tesseradata/install-osx)
- [Docker image](https://github.com/tesseradata/install-docker) (to be documented)
- Work toward using docker image with shippable for fast CI for RHIPE / datadr
- Work on detailed installation instructions for private clusters

Expect some posts going through how to set up and use some of these in the future.

### Presentations / Writing ###

- Talks
    - [Bay Area R User Group](https://air.mozilla.org/bay-area-user-group-official-meetup/)
    - [HP Workshop on Distributed Computing in R](http://www.hpl.hp.com/research/systems-research/R-workshop/)
    - Genentech
- Tutorials
    - The PNNL team gave a [tutorial at the Conference on Statistical Practice](http://tessera.io/docs-csp2015/)
- Book chapter for an upcoming handbook of big data.

That's what we've been up to.  Stay tuned for more posts.
