---
layout: default
tagline: Rails, Entreprenuership & Computational Intelligence

---
<div class="index">

  <h1>Talks</h1>
  <div class="list">
    {% for talk in site.data.talks %}
        <div class="list-item">
            <a href="{{ talk.url }}"><h3>{{ talk.title }}</h3></a>
            <p>
              {{ talk.description }} <br/>
            </p>
            <footer class="light">
              <span class="date">{{ talk.date | date_to_string}}</span>
              <span> - {{ talk.event }}</span>
            </footer>
        </div>
    {% endfor %}
  </div>

  <h1>Projects</h1>
  <div class="list">
    {% for page in site.pages %}
      {% if page.category == 'project' %}
        <div class="list-item">
          <div class="image">
            <img class="float-left" src="{{ page.image }}"/>
          </div>
          <div class="text">
            <h3>{{ page.title }}</h3>
            {{ page.content | markdownify }}
          </div>
          <div class="float-clear"></div>
        </div>
      {% endif %}
    {% endfor %}
  </div>

  <h1>Thoughts</h1>
  <div class="list">
    {% for post in site.posts limit: 15 %}
      <div class="list-item">
        <a href="{{ post.url }}">
          <h3>{{ post.title }}</h3>
        </a>
        <p>
          {{ post.content | markdownify | outline }}
        </p>
        <footer class="light">
          <span class="">{{ post.date | date_to_string}}</span>
        </footer>
      </div>
    {% endfor %}
    <p class="center"><a href="thoughts/">more</a></p>
  </div>
</div>
