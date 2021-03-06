---
title: Jekyll Tips
layout: post
tags: [blogging, ruby, jekyll]
categories: [thoughts]
published: true
---

While there are a few ready made themes available for Jekyll, if you want you site to be different its not too hard. Here are some tips to make it easier.

#### Setting a custom URL
If you create a page called about.html and you want yoursite.com/about to point to this page, without the .html extention. All you need to do is put a permalink in the yaml front matter:

{% highlight yaml %}
# about.html
---
title: About
permalink: about/
---
{% endhighlight %}


#### Custom post types
If you want to create sections on your site like Projects, Gallery, Notes, etc in a different list then your blog, you can set custom metadata for instance category in the yaml front matter and create a page that loops over all posts but only shows the ones you need. 

{% highlight html %}
	{% raw %}
<!-- projects.html -->
{% for page in site.pages %}
	{% if page.category == 'project' %}
    <a href="{{ page.url }}">
        <h3>{{ page.title }}</h3>
    </a>
	{% endif %}
{% endfor %}
	{% endraw %}
{% endhighlight %}

This example shows pages, but it can be done with posts as well. You can even create subfolders in /_posts to make it easier to organize. 

#### Truncating HTML content
Suppose you are listing all the posts on your blog index and want to truncate html, Jekyll will give you a parse error due to invalid html. [TruncateHTML plugin](https://github.com/MattHall/truncatehtml) comes to the rescue.

#### Discarding HTML tags
If you want to do the same as above but don't care about html formatting in your content, and easier way to do this is

{% highlight html %}
	{% raw %}
...
{{ post.content | strip_html | truncate: 140 }}
...
	{% endraw %}
{% endhighlight %}

	