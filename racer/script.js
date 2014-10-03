$('document').ready(function() {
	move("player1")	
})

function move(player) {
	var active_cell = $('.racer_table #'+player+'_strip .active');
	active_cell.next().addClass("active");
	active_cell.removeClass("active");
}