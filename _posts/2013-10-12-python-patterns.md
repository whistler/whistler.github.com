---
title: Python Patterns
layout: post
tags: [python, programming, language]
categories: [programming]
published: true
---

I have now been working with Python for more than a month, here are some of the
interesting patterns that I found in the language. Its a nice, clean and easy 
language, in particular I really enjoy the list comprehensions.

##Lists

###Loop over a list

{% highlight python %}
    for item in items:
        print item
{% endhighlight %}

###Loop over a dictionary

{% highlight python %}
    for key, value in dictionaryname.items()
{% endhighlight %}
###Map with list comprehensions

{% highlight python %}
    [func(item) for item in items]
{% endhighlight %}
###Map over list of lists

{% highlight python %}
    [func(item) for list in lists for item in items]
{% endhighlight %}
###Filter list

{% highlight python %}
    [item for item in items if wanted(item)]
{% endhighlight %}
###Conditions in list comprehensions

{% highlight python %}
    #increase magnitude
    [item -1 if item < 0 else item + 1 for item in items]
{% endhighlight %}
##Modules

###Create a module

Create a folder with a blank file named __init__.py

###Import classes from modules

{% highlight python %}
    from modulename import ClassName
{% endhighlight %}
###Relative import or modules

{% highlight python %}
    from ..packagename import modulename
{% endhighlight %}
##Debugging

###Escape in to interpreter

{% highlight python %}
    import code
    code.interact(local=locals())
{% endhighlight %}
##Benchmark

###Simple Benchmark

{% highlight python %}
    from time import time
    t1 = time.time()
    function()
    t2 = time.time()
    print t2-t1
{% endhighlight %}    
##Exceptions

###Raise an exception

{% highlight python %}
    raise Exception("message")
{% endhighlight %}    
Useful built-in types: ValueError, TypeError, ArithmeticError. [Complete List](http://docs.python.org/2/library/exceptions.html)