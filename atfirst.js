$(document).ready(function() {



$("#introduce").click(function(){
    	$("#exit").show();
      $("#made").show();
      $("#myname").show();
      $("#link").show();
      $("#introduce").hide()
    	});
      $("#exit").click(function(){
          	$("#exit").hide();
            $("#made").hide();
            $("#myname").hide();
            $("#link").hide();
            $("#introduce").show()
          	});
})
