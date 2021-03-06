---
layout: post
title: Rails upload files to AWS
category: snippet
tags:
- Ruby On Rails
---
There is a very easy way to upload files to AWS S3, however you can easily get lost with different gems and options available. My favorite way is using paperclip with aws-sdk. Here are some quick steps to get you started, look at the gems homepages for more information.

Gemfile
{% highlight ruby %}
gem 'aws-sdk'
gem 'paperclip'
{% endhighlight %}

Then run bundler
{% highlight bash %}
bundle install
{% endhighlight %}

config/initializers/aws.rb
{% highlight ruby %}
AWS.config({
  :access_key_id => 'REPLACE_WITH_ACCESS_KEY_ID',
  :secret_access_key => 'REPLACE_WITH_SECRET_ACCESS_KEY',
})
{% endhighlight %}

Example of what your model might look like:
{% highlight ruby %}
class User < ActiveRecord::Base
  has_attached_file :photo,
    :storage => :s3,
    :bucket => 'mybucket',
    :s3_credentials => {
      :access_key_id => ENV['S3_KEY'],
      :secret_access_key => ENV['S3_SECRET']
    }
end
{% endhighlight %}

Migration:
{% highlight ruby %}
class AddPhotoColumnsToUser < ActiveRecord::Migration
  def change
    change_table :users do |t|
      t.has_attached_file :photo
    end
  end
end
{% endhighlight %}
Note: has_attached_file does not seem to work with create_table

This is how to put it in your form
{% highlight ruby %}
<%= form.file_field :avatar %>
{% endhighlight %}

You also need a create action in your controller. Assuming you used a scaffold, it should work just fine. Enjoy!
