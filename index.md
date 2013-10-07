---
layout: page
tagline: Rails, Entreprenuership & Computational Intelligence
---
<div class="posts-list">
  {% for post in site.posts limit: 5 %}
  <a href="{{ post.url }}">
    <h1>{{ post.title }}</h1>
    <div class="posts-list-item">
      {{ post.content | outline }}
      <span class="light">{{ post.content | reading_time }}</span>
    </div>
  </a>
  {% endfor %}
  <p class="center"><a href="thoughts/">more</a></p>
</div>
