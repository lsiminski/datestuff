$.getJSON('list.json', function(data) { 

//  var d = new Date();
//  var n = d.getHour();
//  var moda = n + 1;

	Date date = new Date();   // given date
	Calendar calendar = GregorianCalendar.getInstance(); // creates a new calendar instance
	calendar.setTime(date);   // assigns calendar to given date 
	calendar.get(Calendar.HOUR_OF_DAY); // gets hour in 24h format
    
  $.each(data, function(data) {
	  if ( this.hour === Calendar.HOUR_OF_DAY ) {
		  $("#list_name p").html("<a href='" + this.url + "' target=blank>" + this.name + "</a>");
		  $("#list_day p").text(this.day);
		  $("#list_hour p").text(this.hour);
		  $("#list_category p").text(this.category);
	  } else {
	  }
  });
    
});


