--- 
layout: post
title: Wordpress Visual Editor and Syntax Highlighting
tags: [code, editor, highlight, syntax, wordpress]
---
Somehow the visual editor was not working on my wordpress installtion. I 
checked the server log and it turned out that the file permissions were not set
up correctly. Just needed to give do 
{% highlight html %}
  chmod -R +r
{% endhighlight %}
in the wp-includes/js directory to get it working again.

Also the previous syntax highlighter I had installed sucked. I tried out a 
couple and so far I only like [CodeColorer](http://kpumuk.info/projects/wordpre
ss-plugins/codecolorer/) I also really like the syntax highlighter on this 
[website](http://www.communityguides.eu/articles/15) but I dont know if that is
available on wordpress.
