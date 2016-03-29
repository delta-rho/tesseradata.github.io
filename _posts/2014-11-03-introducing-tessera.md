---
layout: post
title: Introducing Tessera
category : blog
tags : [tessera]
author: ryan
permalink: blog/introducing-tessera/
---

We are very pleased to announce Tessera, an open source statistical computing environment for deep analysis of large, complex data.

<!--more-->

Tessera is a computational environment that allows analysis of potentially very large data to be performed with simple commands entirely within R.  In the case of smaller data, the environment consists of a few R packages to be installed on a workstation.  When data gets larger, these packages are augmented with connectors to various back ends such as Hadoop.  No matter what the back end, the analyst performs the same commands and the details of the back end are hidden.  Tessera is designed so that as more advanced back end technology is introduced, it can easily be extended.

Tessera is powered by the Divide & Recombine (D&R) statistical approach that enables simple parallel computation and replaces the need to develop parallel algorithms for the 1000s of methods of statistics, machine learning, and visualization.  With D&R, you can get statistically valid results using all of the existing implementations of these methods available in the powerful R language, regardless of the size of the data.

To learn more about Tessera, we encourage you to take a good look at our website, [tessera.io](http://tessera.io).  There you can learn more about the components that go into Tessera, how to install them, find in-depth tutorials, and learn how to get help or contribute to the project.

You can also [subscribe to this blog]({{ site.baseurl }}atom.xml) and come back often to learn more.  You will find things like the following on this blog:

- Hands-on examples of Tessera in use
- Showcases of new features
- Software release announcements
- Plans for upcoming features or exciting new technologies
- Screencasts of the software in use
- Interesting new research in Divide and Recombine
- Miscellaneous posts on related statistical concepts
- Coverage of other people's analyses using Tessera

This is the beginning for Tessera - we have a lot of ideas in mind for the future, and we're hoping for a lot of input and discussion with the R community to help make Tessera as good as it can be!

