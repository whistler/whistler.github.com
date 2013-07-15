--- 
layout: post
title: Ruby on Rails Hosts
tags: [rails, hosting]
---

Heroku
------
For testing out your new application, [Heroku](http://www.heroku.com) works 
really well. It's free tier is good enough to run a Rails app which does not
get too many users. The only drawback for the free tier is that if the site is
not being hit for a while it take a 1-2 seconds for it to load. Its not a
problem if visitors come to your site regularly.

EC2
---
Amazon provides a free VPS instance for year. Its a great place to run your
application if you are an established company. But it might be a little 
expensive for hobbists or very early stage startups.

S3
--
S3 is a great way to store assets like images, videos, any other static files.
Its super economical, and easy to incorporate in to Rails.

Low end VPS
-----------
You can get a great bargain for a VPS at [Low end box](www.lowendbox.com). 
While not suitable if you have thousands of visitors coming to your website
everyday. A good way to get started and run computation tasks, scraping scripts
or a CI.

Openshift
---------
Openshift is the Redhat cloud. Somewhat like heroku but was quite buggy when
I tried using it.

Shared Hosting
--------------
Generally this is a big no no to run a Rails project, because the performance 
isn't too great. However, if you just want to run a personal blog it should be
fine.