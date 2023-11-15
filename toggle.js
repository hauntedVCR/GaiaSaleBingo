
function tableHover(){
    $("#row1").hover(function() { $(".row1").toggleClass("hover"); });
    $("#row2").hover(function() { $(".row2").toggleClass("hover"); });
	$("#row3").hover(function() { $(".row3").toggleClass("hover"); });
	$("#row4").hover(function() { $(".row4").toggleClass("hover"); });
	$("#row5").hover(function() { $(".row5").toggleClass("hover"); });

	$("#col1").hover(function() { $(".col1").toggleClass("hover"); });
	$("#col2").hover(function() { $(".col2").toggleClass("hover"); });
	$("#col3").hover(function() { $(".col3").toggleClass("hover"); });
	$("#col4").hover(function() { $(".col4").toggleClass("hover"); });
	$("#col5").hover(function() { $(".col5").toggleClass("hover"); });

	$("#tlbr").hover(function() { $(".tlbr").toggleClass("hover"); });
	$("#bltr").hover(function() { $(".bltr").toggleClass("hover"); });
}
    
function squareToggle(t){
	$(t).toggleClass("greensquare");
}

//toggle the rows or columns
function toggleLines(target){

	var name=$(target).attr("id");
	squareToggle($("."+name));
}

//dark mode css stuff
function darkModeSwitch(){
	var LM="lightMode";

	$("body").toggleClass(LM);
	$(".sideBar1").toggleClass(LM);
	$("button").toggleClass(LM);
	$(".checkbox-label").toggleClass(LM);
	$("#bingo").toggleClass(LM);
	$("footer").toggleClass(LM);
	$("td").toggleClass(LM);
}