//<![CDATA[ 
$(window).load(function(){
$('.blgfunc').click(function() {	
	$('#blogframe').attr('src', 'http://cant-relate.tumblr.com/');  
});
});
setInterval(function() {	 
    if ($(shop).is(":target")) {
		$('#nav').removeClass('nav').addClass('navopen');
		$('#content').removeClass('content').addClass('contenthide');
		$('.bgopen').removeClass('bgopen');
		$('#shpbg').addClass('bgopen');	
    } else if ($(about).is(":target")) {
		$('#nav').removeClass('nav').addClass('navopen');
		$('#content').removeClass('content').addClass('contenthide');
		$('.bgopen').removeClass('bgopen');
		$('#abtbg').addClass('bgopen');	
    } else if ($(contact).is(":target")) {
		$('#nav').removeClass('nav').addClass('navopen');
		$('#content').removeClass('content').addClass('contenthide');
		$('.bgopen').removeClass('bgopen');
		$('#cntbg').addClass('bgopen');	
    } else if ($(blog).is(":target")) {
		$('#nav').removeClass('nav').addClass('navopen');
		$('#content').removeClass('content').addClass('contenthide');
		$('.bgopen').removeClass('bgopen');
		$('#extbg').addClass('bgopen');	
	} else if ($(collective).is(":target")) {
		$('#nav').removeClass('nav').addClass('navopen');
		$('#content').removeClass('content').addClass('contenthide');
		$('.bgopen').removeClass('bgopen');
		$('#colbg').addClass('bgopen');	
	} else if ($(main).is(":target")) {
		$('#nav').removeClass('navopen').addClass('nav');
		$('#content').removeClass('contenthide').addClass('content');
		$('.bgopen').removeClass('bgopen');	
		$('#bgmain').addClass('bgopen');
	} else if ($(pmt).is(":target")) {
		$('#nav').removeClass('nav').addClass('navopen');
		$('#content').removeClass('content').addClass('contenthide');
		$('.bgopen').removeClass('bgopen');
		$('#abtbg').addClass('bgopen');	
 }
 }, 1)                       
$(window).load(function() {
	$("#loading").hide();
	$('#bgmain').addClass('bgopen');
});
var sc_project=8411758; 
var sc_invisible=1; 
var sc_security="01843a23"; 
var scJsHost = (("https:" == document.location.protocol) ?
"https://secure." : "http://www.");
document.write("<sc"+"ript type='text/javascript' src='" +
scJsHost +
"statcounter.com/counter/counter.js'></"+"script>");

if (screen.width <= 800) {
document.location = "mobile.html";
}
//]]>    // Java Document
	