$.getJSON('list.json', function(data) { 

  var d = new Date();
  var n = d.getHours();
  var moda = n - 4;
    
  $.each(data, function(data) {
	  if ( this.hour === moda ) {
		  $("#list_name p").html("<a href='" + this.url + "' target=blank>" + this.name + "</a>");
		  $("#list_day p").text(this.day);
		  $("#list_hour p").text(this.hour);
		  $("#list_day p").text(this.day);
		  $("#list_category p").text(this.category);
	  } else {
	  }
  });
    
});


