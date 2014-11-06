---
layout: post
title: Trelliscope Quickstart Visual Walkthrough
category : blog
tags : [tessera, trelliscope]
author: ryan
permalink: blog/trelliscope-quickstart-video
---

Here is a video going through the Trelliscope quick start in the [Trelliscope tutorial](http://tessera.io/docs-trelliscope/#quickstart).

<!--more-->

<iframe width="560" height="315" src="//www.youtube.com/embed/wRFXdycUaNs" frameborder="0" allowfullscreen></iframe>

If all you want to see is the Trelliscope viewer in action (not the part about creating the display), skip to about 12:30.

At the end of the video, we add one more thing that is not in the quick start, which is deploying the result to shinyapps.io.  To get your environment in a state to do that, we point to some references.  First is the shinyapps.io [getting started guide](https://github.com/rstudio/shinyapps/blob/master/guide/guide.md).  On that page, you need to follow the instructions for "Installing the shinyapps package".  Then you can scroll down to "Configuring ShinyApps" and make sure your account is configured (we did it with method 2):

```
shinyapps::setAccountInfo(name="<ACCOUNT>", token="<TOKEN>", secret="<SECRET>")
```

Once that is set up, you simply need to call

```
deployToShinyApps()
```

And you are ready to share it!

Hopefully this video provides a better feel for what Trelliscope is and how it can be used, and maybe has given you some inspiration for something you'd like to try it on.  We'd love to hear about any interesting displays you create - if you deploy any to shinyapps.io, please let us know!

Also please keep in mind that this software is still in a beta state but is at a point where we want to get it out and get it used.  Please let us know of issues or feedback.  See the [resources](http://tessera.io/#resources) section of our page for how to do this.

There are many other aspects of Trelliscope to cover and we'll be posting more in the future.  You can also visit the [Trelliscope tutorial](http://tessera.io/docs-trelliscope), which is currently not complete, but we plan to complete it soon.  If this was useful we also plan to post videos covering other components of Tessera and different ways of standing up Tessera beyond the single workstation case (Vagrant, AWS).  Stay tuned!

<!-- http://resizemybrowser.com -->
<!-- 1440x810 -->
