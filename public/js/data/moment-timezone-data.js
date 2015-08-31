require( [
	'moment',
	'moment-timezone',
	'json!/components/moment-timezone/data/packed/latest.json'
],
function( moment, momenttz, tzData ) {
	moment.tz.add( tzData.zones );
} );
