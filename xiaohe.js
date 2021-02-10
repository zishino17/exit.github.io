$(document).ready(function() {



$("#xiaoheone").click(function(){
    	$("#xiaohetwo").show();
      $("#butterfly").show();
      $("#xiaoheone").hide();
      $("#lake").hide();
      $("#event").hide();
    	});
$("#xiaohetwo").click(function(){
          	$("#fireone").show();
            $("#butterfly").hide();
          	});
            $("#fireone").click(function(){
                      	$("#firetwo").show();
                      	});
            $("#firetwo").click(function(){
                $("#firethree").show();
                $("#huiyi1").show();
                        });
            $("#firethree").click(function(){
            $("#fire4").show();
            $("#huiyi2").show();
                    });
                    $("#fire4").click(function(){
                    $("#fire45").show();
                    $("#huiyi3").show();
                  });
                    $("#fire45").click(function(){
                    $("#fire5").show();
                  });

                            $("#fire5").click(function(){
                            $("#lake").hide();
                            $("#didong").show();
                            $("#fire4").hide();
                            $("#fire45").hide();
                            $("#firethree").hide();
                            $("#firetwo").hide();
                            $("#fireone").hide();
                            $("#xiaohetwo").hide();
                            $("#huiyi1").hide();
                            $("#huiyi2").hide();
                            $("#huiyi3").hide();
                            $("#xiaoheone").show();
                                    });
                                    $("#didong").click(function(){
                                    $("#text2").show();

                                            });
                                            $("#text2").click(function(){
                                            $("#lake").show();

                                                    });

                                    $("#lake").click(function(){
                                    $("#event").show();
                                            });

                                            $('#xiaoheone').hover(function() {
                                          $("#text").css('display', 'block');
                                      }, function() {
                                         $("#text").css('display', 'none');
                                      });

                                      $("#text").hover(function() {
                                         $(this).css('display', 'block');;
                                      }, function() {
                                         $(this).css('display', 'none');
                                      });

                              

})
