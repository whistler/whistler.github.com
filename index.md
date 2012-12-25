---
layout: page
title: Ibrahim Muhammad
tagline: Rails, Entreprenuership & Computational Intelligence
---
{% include JB/setup %}
    
Hello
=====

My name is Ibrahim Muhammad and I love to build things.
<img id="me" src="images/ib.jpg"><br/>
I love technology and innovation. I code in a dozen languages.

<a href="https://twitter.com/#!/ibrahimm"><img src="images/twitter.png"></a>
<a href="https://github.com/whistler"><img src="images/github.png"></a>

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>


