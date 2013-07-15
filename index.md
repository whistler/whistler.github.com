---
layout: page
tagline: Rails, Entreprenuership & Computational Intelligence
---

<div class="posts">
  {% for post in site.posts limit: 5 %}
  <a href="{{ post.url }}"><h1>{{ post.title }}</h1></a>
  <div class="home-post-content">
    {{ post.content | truncatehtml: 400 }}
    <a href="{{ post.url }}">>></a>
    <hr/>
  </div>
  {% endfor %}
  <p class="center"><a href="thoughts/">more...</a></p>
</div>
