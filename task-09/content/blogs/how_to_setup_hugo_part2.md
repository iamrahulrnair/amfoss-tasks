---
title: 'How_to_setup_hugo_part2'
date: 2021-11-03T10:54:27+05:30
draft: true
author: 'Rahul R'
tags: ['hugo', 'themes']
---

### Front Matter

You can define something called front matter in hugo which by default will be generated from **archetypes/default.md** file. You can define default variables in there in yaml/ json/ toml and these variables can be used across the html with {{.<Variable_name>}}, they are also called metadata about a page.You can also define global variables in config.toml file, and these can be accessed as {{.Site.Params.<variable_name>}}, with this i was able to define favicons, some site specific variables.

{{< highlight go >}}
variables should be defined in config.toml as:
[params]
bio_desc = "A static site designed by me, but built on Hugo ❤️"
favicon_url = "/icon/"
author = "iamrahulrnair"

---

some vaiables includes:

1. .URL
2. .Content
3. .Title
   etc..

{{< /highlight >}}

### Taxonomy

Another great feature is taxonomy for organising the content,its like hastags in insta such that tags defined in a page will be clustered to that particular tags.
{{< highlight go >}} some vaiables includes:
You can define tags with tags: ["hugo", "themes"] in the front-matter,such that the page will belong the both tags
{{< /highlight >}}

### Custom templates

You can override the template defined for you in the themes by defining html in the layouts folder of your main project not in themes!!, if this is not possible then we cannot create custom github cards my styles. with this feature i was able to include global styles of themes along with my own layout feature
