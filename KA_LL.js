var KA_LL = {
rot13: function(inputString) {
	// ROT-13 by Ben Alpert
	// See: http://stackoverflow.com/questions/617647/where-is-my-one-line-implementation-of-rot13-in-javascript-going-wrong
	return inputString.replace(/[a-zA-Z]/g,
	function(c){
		return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);}) 
	}
}