---
title: Jekyll Tips
layout: post
tags: blogging, ruby, jekyll
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
	