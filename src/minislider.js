  
/**
 * minislider v1.1
 *
 * Copyright (c) 2015 Planlodge (http://www.planlodge.com)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */


(function($) {

  'use strict';

  //variable that will increment through the images
  var currentBg = 0;

  var methods = {

    init: function(options) {

        var defaults = {
			width: 500,
			height: 400,
			delay: 3000,
			fadeSpeed: 1900
        };

        // default settings
        if (options) {
            $.extend(defaults, options);
        }

        return this.each(function(){

          var el = "#" + $(this).attr('id');
		  
		  $(el).wrap("<div id='paper'></div>");

          $('#slideshow').css({
			"background-image": "url("+defaults.images[currentBg++]+")",
			"background-size":  defaults.width + "px "+ defaults.height + "px",
			"width":  defaults.width + "px ",
			"height": defaults.height + "px"
		  });
		  
		  $('#paper').css({
			"width":  defaults.width + "px ",
			"height": defaults.height + "px"
		  });

          setInterval( function() {methods.backgroundSlide(defaults.images, defaults.width, defaults.height, defaults.fadeSpeed);}, defaults.delay);
        });
    },
    backgroundSlide: function(images, width, height, speed) {

      $('#slideshow').hide();
      $('#slideshow').css({
			"background-image": "url("+images[currentBg++]+")",
			"background-size": width + "px "+ height + "px"
		}).fadeIn(speed);
         if (currentBg == images.length) 
        {
            currentBg = 0;
        }
    }

  }

    // function method
    $.fn.miniSlider = function(method) {

        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === "object" || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error("Method " + method + " does not exist");
        }
    };


  }(jQuery));