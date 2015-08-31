define(function(){

this["JST"] = this["JST"] || {};

this["JST"]["public/js/templates/Application.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<h1>' +
((__t = ( title )) == null ? '' : __t) +
'</h1><p><em><span class="red">Red</span> text is the live segment.</em></p>\n<ul>\n\t';
 for(var i = 0; i < segments.length; i++) { ;
__p += '\n\t<li ';
 if( segments[i].type == 'live') { ;
__p += 'class="red" ';
 } ;
__p += '>\n\t\t<strong>' +
((__t = ( segments[i].segment_start_date_gmt )) == null ? '' : __t) +
'<br/>\n\t\t' +
((__t = ( segments[i].segment_start_date_et )) == null ? '' : __t) +
' :</strong>\n\t\t' +
((__t = ( segments[i].title )) == null ? '' : __t) +
' (' +
((__t = ( segments[i].segment_id )) == null ? '' : __t) +
')\n\t</li>\n\t';
 } ;
__p += '\n</ul>';

}
return __p
};

  return this["JST"];

});