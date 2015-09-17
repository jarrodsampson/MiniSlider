# MiniSlider
For the Minimalist who just needs a basic slideshow in a complex world.

[![Build Status](https://travis-ci.org/stevenbenner/jquery-powertip.svg?branch=master)](https://travis-ci.org/stevenbenner/jquery-powertip)
![License](https://img.shields.io/packagist/l/doctrine/orm.svg)

![Atom](http://planlodge.com/github/record.gif)

## Getting Started

 1. Include jQuery in your code.
 2. Download and include the minislider.js file.
 3. Pick your selector and apply minislider method and include images.

## Example

    <!DOCTYPE html>
	<html lang="en-US">
	<head>
	  <meta charset="utf-8">
	  <meta name="viewport" content="width=device-width, initial-scale=1">
	  <title>Mini-Slider</title>
	  <meta name="description" content="">
	  <link rel="shortcut icon" href="http://palakmathur.in/images/icons/github.png" />
	  <link rel="stylesheet" href="css/minislider.min.css" />
	  <!-- demo purposes only -->
	  <link rel="stylesheet" href="demo/demo.css" />
	</head>
	<body>

	<center>
	<div id="wrapper">

		<header>
			<h1>Mini-Slider</h1>
			<p>For the Minimalist.</p>
		</header>
		<!-- the slides -->
		<div id="slideshow"></div>
		
		<footer>
			<p>2015 Planlodge</p>
		</footer>
		
	</div>
	</center>

		<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script> 
		<script src="src/minislider.min.js"></script> 
		<script>
		$(function(){

		  $('#slideshow').miniSlider({
				
				width: 500,
				height: 300,
				delay:	5000,
				fadeSpeed: 1900,
				images: [
					'images/feature-11.png',
					'images/feature-22.png',
					'images/feature-33.png'
				]
				
		  });

		});
		</script>
		
	</body>
	</html>

## License

Transimg is licensed under the [MIT license](http://opensource.org/licenses/MIT).
