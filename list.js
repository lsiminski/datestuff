$.getJSON('list.json', function(data) { 

  var d = new Date();
  var n = d.getUTCHours();
  var moda = n - 4;
    
  $.each(data, function(data) {
	  if ( this.hour === moda ) {
		  $("#list_name p").html("<a href='" + this.url + "' target=blank>" + this.name + "</a>");
		  $("#list_day p").text(this.day);
		  $("#list_category p").text(this.category);
// 		  $("body.random").css("background-image","url(" + this.image + ")");
	  } else {
	  }
  });
    
});


