(function(){


/* Created by @harveytoro hosted on www.betaconnexions.com lab*/


	function Bookmarklet() {
		(window.myBookmarklet = function() {
	
			if ($("_bookmarklet").length == 0) {
			
					var locationurl = window.location;
			
				
				var lands = false;
				
				if (locationurl != "") {
					$("body").append("\
					<div id='_bookmarklet'>\
						<div id='_background_bookmarklet_image'>\
						</div>\
						<div id='ipne'><iframe id='ifr' src='"+locationurl+"' onload=\"$('#_bookmarklet iframe').slideDown(500);\"></iframe><div>\
						<style type='text/css'>\
							#_background_bookmarklet_image { z-index: 100; position: fixed; width: 100%; height: 100%; top: 0; left: 0; background: url('http://betaconnexions.com/bookmarklet/plainblur.png') no-repeat; background-size:cover; cursor: pointer; z-index: 900;  }\
							#_bookmarklet iframe {position: fixed; top: 185px; left:75px; z-index: 999; width:320px; height:465px; }\
							#ipne{z-index:900;background-image: url('http://betaconnexions.com/bookmarklet/iphonemockup.png'); background-repeat: no-repeat;width:370px; height:1500px; position: fixed; top: 50px; left:50px;};\
							.land{width:800px; height:900px;};\
						</style>\
					</div>");
					function position(){
var window_width = window.innerWidth;

var border_width = 370;
var cal_widths = window_width - border_width;
var px_distance = cal_widths/2;
var pixels = px_distance + "px";
$('#ipne').css("left", pixels); 		

var iframe_width = 320;
var _2_cal_widths = window_width - iframe_width;
var _2_px_distance = _2_cal_widths/2;
var _sub_value_1 = _2_px_distance- 1;
var pixel = _sub_value_1 + "px";
$('#_bookmarklet iframe').css("left", pixel); 


}
function change(){
$('#ipne').click(function(event){
	lands = true;
	$("#ipne").addClass("land");
	$('.land').css({"background-image":"url('http://betaconnexions.com/bookmarklet/iphonemockuplandscape.png')","background-repeat":"no-repeat","width":"720px","height":"400px"}); 
	$('#_bookmarklet iframe').css({"width":"480px","height":"300px"}); 
	
function _land_position(){
var _land_window_width = window.innerWidth;

var _land_border_width = 720;
var _land_cal_widths = _land_window_width - _land_border_width ;
var _land_px_distance = _land_cal_widths/2;
var _land_pixels = _land_px_distance + "px";
$('#ipne').css("left", _land_pixels); 	

var _land_iframe_width = 480;
var _2_land_cal_widths = _land_window_width - _land_iframe_width;
var _2_land_px_distance = _2_land_cal_widths/2;
var _land_sub_value_1 = _2_land_px_distance- 1;
var _land_pixel = _land_sub_value_1 - 2 + "px";
$('#_bookmarklet iframe').css({"left":_land_pixel,"top":"93px"}); 
 }
 _land_position()

$('.land').click(function(event){
	lands = false;
  $("#ipne").removeClass("land");
  $('#ipne').css({"background-image":"url('http://betaconnexions.com/bookmarklet/iphonemockup.png')","background-repeat":"no-repeat","width":"370px","height":"1500px","position":"fixed","top":"50px"});
  $('#_bookmarklet iframe').css({"width":"320px","height":"465px","position":"fixed","top":"185px"}); 
  position();

change();
});


});
}
					position();
				
			
			

		
		
		
		


change();


		

					}$("#_background_bookmarklet_image").fadeIn(1000);
				
			} else {
				$("#_background_bookmarklet_image").fadeOut(300);
				$("#_bookmarklet iframe").slideUp(300);
				setTimeout("$('#_background_bookmarklet_image').remove()", 300);
			}
			$("#_background_bookmarklet_image").click(function(event){
				$("#_background_bookmarklet_image").fadeOut(300);
				$("#_bookmarklet iframe").slideUp(300);
				setTimeout("$('#_bookmarklet').remove()", 300);
			});
		})();
	}

	if(window.jQuery === undefined){

		var addScript = document.createElement("script");
		addScript.src = "http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js";
		addScript.onload = addScript.onreadystatechange = function(){
			if (!addScript.readyState || addScript.readyState == "loaded" || addScript.readyState == "complete") {
			
				addScript.onreadystatechange = null;
				Bookmarklet();
			}
		};
		document.getElementsByTagName("head")[0].appendChild(addScript);
} else {
   
		Bookmarklet();
}

})();