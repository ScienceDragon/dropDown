// JavaScript Document

$(document).ready(function() {
	
	//targets button with the id "btn-students" 
	$('button#btn-students') .on('click', function() {
		var students = new Array('Ryan', 'Steve', 'Meg', 'Nik');
		
		$('#dropdown').find('option').remove();
		
													/*for loop example:
													for (var x = 1; x <= 3; x = x+1) {
													}
													*/
		
		// for loop to loop over an array
		for (var n = 0; n <= students.length-1; n++) {
			$("#dropdown") .append('<option value="' + students[n] + '">' + students[n] + '</option>');
		}
	});
	
	$('button#btn-tennis-players') .on('click', function() {
		var Tplayers = new Array('Billy Bashum', 'Whiffy McSwingenstein', 'Clara Whackall');
		
		$('#dropdown').find('option').remove();
		
		for (var p = 0; p <= Tplayers.length-1; p++) {
			$("#dropdown") .append('<option value="' + Tplayers[p] + '">' + Tplayers[p] + '</option>');
		}
	});
	
	$('button#btn-clear') .on('click', function() {
		$('#dropdown').find('option').remove();
	});
	
});