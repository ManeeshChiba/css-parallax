# Super Simple Parallax
#### Version 1.0

A super simple parallax is a sub 100kb plugin to add parallax movement on scroll to your website.

#### [See Demo](http://maneeshchiba.github.io/super-simple-parallax/)

## Get Started

### Downlaod
You need to download required files from [Github](https://github.com/ManeeshChiba/css-parallax)

### Install
You need the files from the `dist` directory. Place `ssparallax.min.css` in your projects `css` directory and `ssparallax.min.js` in the `js` directory.

Next you will need to link the css file in the head of your document like so:
```html
<link rel="stylesheet" href="path/to/the/file/ssparallax.min.css">
```

Add the javascript to the document before your bodys closing tags like so:
```html
<script src="path/to/the/file/ssparallax.min.js"></script>
```

### Usage
In order to use Super Simple Parallax you need to do two things. First, initalize the script by envoking it on the load event of your document.
``` javascript
window.onload = function(){
    var superSimpleParallax = new ssparallax;
}
```

Then you can simply include a data atrribute onto the elements you would like to have the effect:
```html
<div class="your-class-here" data-ssparallax="1"></div>
```
The number value controls the parallax effect. Numbers 1 to 100 are catered for.


### SASS & Modification
Should you wish to use this as part of your SCSS project, the `src` directory contains the scss file which controls the effect.

If you would like to modify the javascript, you can find it in the `js` folder.

### License
[MIT](http://opensource.org/licenses/MIT)