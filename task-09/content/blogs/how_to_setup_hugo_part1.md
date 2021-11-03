---
title: 'How_to_setup_hugo_part1'
date: 2021-11-02T20:34:32+05:30
draft: false
author: 'Rahul R'
iamrahulrnair: 'https://github.com/iamrahulrnair'
tags: ['hugo', 'themes']
---

### Introduction

First thing is I was new to go and seemed overwhelmed when i put my hands in hugo, but eventualy after experimenting a lot this seemed a lot of fun. Hugo is the first static site generating framework i have ever used and it didn't disappointed me.

first thing i did was to download hugo for linux:

{{< highlight go >}} sudo apt-get install hugo {{< /highlight >}}
i am using ubuntu so check out the docs for downloading **hugo** based on the distribution you are using.

Then comes the fun part, you have to intialize a project with:
{{< highlight go >}} hugo new site <project name> {{< /highlight >}}
The above will create a new Hugo site in a folder with the specified project name.This gives the required framework for creating our own static websites.Personally for this project i have used a [theme](https://themes.gohugo.io/themes/hugo-theme-m10c/),with built in styles so that you dont have start from scratch.
{{< highlight go >}}
Steps to get the theme to work:

1. check out https://themes.gohugo.io/themes/
2. choose the theme and go to their github repo
3. copy the repo link for cloning
4. clone the repo to the themes folder in you project
   {{< /highlight >}}
   All the assests including the sass files and required icons with template html for that theme will be available and it will be lot easier to make use of that.
