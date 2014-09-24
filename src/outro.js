// CommonJS, AMD, script tag
if ( typeof exports != "undefined" ) {
	module.exports = words;
}
else if ( typeof define == "function" ) {
	define( function () {
		return words;
	} );
}
else {
	global.words = words;
}
} )( this );
