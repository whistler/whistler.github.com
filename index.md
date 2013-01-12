---
layout: page
tagline: Rails, Entreprenuership & Computational Intelligence
---

<div class="posts">
  {% for post in site.posts limit:5 %}
  <a href="{{ post.url }}"><h1>{{ post.title }}</h1></a>
  <span>{{ post.content | truncatehtml: 400 }}</span>
  {% endfor %}
</div>


