# Ember Blur Up [![Build Status](https://travis-ci.org/Ludu/ember-blur-up.svg?branch=master)](https://travis-ci.org/Ludu/ember-blur-up)

Sexy progressive loading for large background images in your Ember app!

![Preview](https://raw.github.com/Ludu/ember-blur-up/tests/dummy/public/images/blur-up.gif)

## Why?
Making the user wait for a large image to download is a bad user experience. Read more about this problem on [Facebook's blog](https://code.facebook.com/posts/991252547593574/the-technology-behind-preview-photos).

## Installation

```bash
ember install ember-blur-up
```

## Usage

Just drop the `{{blur-up}}`-component wherever you need a large background-image.

The component requires 2 arguments to work:
* `url`: The URL to the original full-size image;
* `base64`: A base64-string of a tiny (max 100x100px) version of the same image (make sure it has the same dimensions).
