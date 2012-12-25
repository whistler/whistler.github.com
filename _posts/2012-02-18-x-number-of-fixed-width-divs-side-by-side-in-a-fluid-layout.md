--- 
layout: post
title: X number of fixed width divs side by side in a fluid layout
tags: []
---
In recent months, I have been experimenting a lot with fluid width layouts. As we now have devices with a range of screen sizes, to create a good user experience across all different resolutions, I think fluid layouts are the way to move forward.

One of the things, I got stuck with was displaying a number of fixed width divs on a fluid layout such that each row has the maximum number of divs it can take. In my initial version, everything floated to the left, but i finally figured out how to center the divs.

Style:
{% highlight css %}
#container {
    text-align: center;
}

.box {
    width: 300px;
    height: 300px;
    margin: 10px;
    background-color: #ccc;
    vertical-align: top;
    display: inline-block;
    *display: inline; /* IE6 */
    zoom: 1
}
{% endhighlight %}

HTML:
{% highlight html %}
<div id="container">
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
</div>
{% endhighlight %}

This is especially useful as lists are becoming more visual, for example each blog post having a picture associated with it.
