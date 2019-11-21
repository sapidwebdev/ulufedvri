	<script src="//code.jquery.com/jquery.min.js"></script>
	<script src="jQuerySimpleCounter.js"></script>
 Create a container for the counter plugin.

	<div id="count-example"></div>

 Initialize the plugin and set the start & end numbers.

	$('#count-example').jQuerySimpleCounter({

	  start:  100,

	  end:    0,

	});

 Plugin's default settings.

	$('#count-example').jQuerySimpleCounter({

	 

	  // start number

	  start:  0,

	 

	  // end number
07
	  end:    100,
08
	 
09
	  // easing effect
10
	  easing: 'swing',
11
	 
12
	  // duration time in ms
13
	  duration: 400,
14
	 
15
	  // callback function
16
	  complete: ''
17
	 
18
	});