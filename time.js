function checkTime(i) {
	if (i < 10) 
		i = "0" + i	// add zero in front of numbers < 10
	return i
}
function twelvehour(h) {
	if (h>12)
		return h-"12"
	if (h==0)
		return "12"
}
//return post or ante
function get_ampm(h){
	if (h<12)
		return "AM"
	if (h>12)
	   return "PM"
}
function start() {
	var today = new Date()
	var h = today.getHours()
	var m = today.getMinutes()
	var ampm = get_ampm(h)
	
	//clean both sources
	m = checkTime(m)	//add 0 for nums > 10
	h = twelvehour(h)	//changes to 12hr format
    
	//write time to screen
    document.getElementById('txt').innerHTML = h + ":" + m + " " + ampm
	//Since we aren't printing seconds, we can wait longer to call the function again
    var t = setTimeout(start, 2*1000) //every 2 seconds
}