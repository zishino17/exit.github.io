$(document).ready(function() {






                                              (function animation() {
                                             var options = {
                                                duration: 2000,
                                                easing: 'linear'
                                             };

                                             $('.loop')
                                                .find('.sun')
                                                .animate({
                                                      left: 280,
                                                      top: 70,
                                                   },
                                                   options
                                                )
                                                .animate({
                                                      left: 0,
                                                      top:140,
                                                   },
                                                   options
                                                )
                                                .animate({
                                                      left: -280,
                                                      top: 70,
                                                   },
                                                   options
                                                )
                                                .animate({
                                                      left: 0,
                                                      top:0,
                                                   },
                                                   $.extend(true, {}, options, {
                                                      complete: function() {
                                                         animation();
                                                      }
                                                   })
                                                );
                                          })();





})
