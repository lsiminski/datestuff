$.getJSON('list.json', function(data) { 

  var d = new Date();
  var mo = d.getMonth();
  var da = d.getDate ();
  var ho = d.getHours ();
//   var moda = ho + 1;
    
  $.each(data, function(data) {
	  if ( this.hour === ho ) {
		  $("#list_name p").html("<a href='" + this.url + "' target=blank>" + this.name + "</a>");
		  $("#list_day p").text(this.day);
		  $("#list_category p").text(this.category);
		  $("#list_hour p").text(this.hour);
// 		  $("body.random").css("background-image","url(" + this.image + ")");
	  } else {
	  }
  });
    
});


