define(function(){

this["JST"] = this["JST"] || {};

this["JST"]["public/js/templates/Application.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<h1>' +
((__t = ( title )) == null ? '' : __t) +
'</h1>\n<p><em><span class="red">Red</span> text is the current live segment.</em></p>\n<button id="pollingToggle">Stop Polling</button>\n<ul>\n\t';
 for(var i = 0; i < segments.length; i++) { ;
__p += '\n\t<li ';
 if( segments[i].type == 'live') { ;
__p += 'class="red" ';
 } ;
__p += '>\n\t\t<h4>' +
((__t = ( segments[i].title )) == null ? '' : __t) +
' (id: ' +
((__t = ( segments[i].segment_id )) == null ? '' : __t) +
')</h4>\n\t\t<ul>\n\t\t\t<li>GMT: ' +
((__t = ( segments[i].segment_start_date_gmt )) == null ? '' : __t) +
'</li>\n\t\t\t<li>ET: ' +
((__t = ( segments[i].segment_start_date_et_format )) == null ? '' : __t) +
'</li>\n\t\t\t<li>Local: ' +
((__t = ( segments[i].segment_start_date_gmt_format )) == null ? '' : __t) +
'</li>\n\t\t</ul>\n\n\t</li>\n\t';
 } ;
__p += '\n</ul>';

}
return __p
};

  return this["JST"];

});