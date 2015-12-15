module.exports = openRow

function openRow() {
	
	//OPEN FIXTURE ROW TO SHOW MATCH REPORT
	$('.open').on('click', function() {
		$(this).closest('.fixtures__row--match').toggleClass('is-open')
	})	
}


