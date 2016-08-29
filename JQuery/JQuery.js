$(document).ready(function()
	{
		$("#hide").click(function()
		{
			$("#intro").hide();
			//alert("Name is hide");
		});
		
		$("#show").dblclick(function()
		{
			$("#intro").show().css("text-align","center");
			//alert("Name is show");
		});
		
	//	$("#name").mouseenter(function(){
	//		alert("you select HTML element whose id=name");
	//	});
		
		$("#txtname").focus(function(){
			$(this).css("background-color", "red");
		});
		
		$("p.intro1").on("click",function(){
			$(this).hide();
		});
		
		
		$(".siblings h3").siblings("h1").css({"color": "red", "border": "2px solid red"});
		$(".siblings h3").next().css({"color":"brown", "font-size": "20px", "border": "2px solid blue"});
		$(".previous span").prev().css({"color": "pink"});
		$(".index span").parent().css({"text-decoration": "underline", "color": "red"});
		$(".index span").parents().css({"text-decoration": "underline", "color": "red"});
		$(".child ul").children().css({"text-decoration": "underline", "color": "blue"});
		$(".findChild div").find("span").css({"text-decoration": "underline", "color": "orange", "border": "10px solid red"})
		$("#toggle").click(function(){
			$("h2").toggle();
		});
		
		$("#flip").click(function(){
        $("#panel").slideToggle("slow");
		});
});





 




