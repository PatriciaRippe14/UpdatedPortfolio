$(document).ready(function() {
	setBindings();

});

function setBindings(){
	$("btn").click(function(e){
		e.preventDefault();
		var sectionID = e.currentTarget.id + "Section";

		$("html body").animate({
			scrollTop: $('#' + sectionID).offset().top
		}, 1000)
	})
}