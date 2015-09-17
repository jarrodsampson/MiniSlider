  
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


  var bgArr = [ 
    'images/feature-11.png',
    'images/feature-22.png',
    'images/feature-33.png' 
  ];


  var methods = {

    init: function(options) {

        var defaults = {

        };

        // default settings
        if (options) {
            $.extend(defaults, options);
        }

        return this.each(function(){

          var el = "#" + $(this).attr('id');

          $('#slideshow').css("background-image", "url("+bgArr[currentBg++]+")").fadeIn(500);

          setInterval(methods.backgroundSlide, 3500);
        });

        
    },
    backgroundSlide: function() {

      $('#slideshow').hide();
      $('#slideshow').css("background-image", "url("+bgArr[currentBg++]+")").fadeIn(900);
         if (currentBg == bgArr.length) 
        {
            currentBg = 0;
        }
    }

  }


    // function method
    $.fn.minislider = function(method) {

        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === "object" || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error("Method " + method + " does not exist");
        }
    };


  }(jQuery));