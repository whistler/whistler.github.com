# Shows images stored in a directory
# Usage:
#     {% images /path/to/images %}
require 'pry'

module Jekyll
  class FileListTag < Liquid::Tag

    def initialize(tag_name, dir, tokens)
      super
      @directory = dir.strip
    end

    def render(context)
      root = context.registers[:site].config["source"]
      dir = File.join(root, @directory)
      files = Dir[dir.to_s+"/*"]
      relfiles = files.map{|file| file.gsub(root,"")}
      html = relfiles.map do |file|
        "<img src='#{file}' class='image'/>"
      end
      html
    end
  end
end

Liquid::Template.register_tag('images', Jekyll::FileListTag)