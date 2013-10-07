# prints the url of a random file in a given directory
# useage: {{ random_file images/cats }}
# this will select a random file from the images/cats directory

module Jekyll
  class RandomFileTag < Liquid::Tag

    def initialize(tag_name, dir, tokens)
      super
      @directory = dir.strip
    end

    def render(context)
      root = context.registers[:site].config["source"]
      dir = File.join(root, @directory)
      file = Dir[dir.to_s+"/*"].sample
      relpath = file.gsub(root,"")
    end
  end
end

Liquid::Template.register_tag('random_file', Jekyll::RandomFileTag)