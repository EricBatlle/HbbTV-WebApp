

 setTimeout(hideButton, 10000);

 setTimeout(showButton, 15000);
 
 setTimeout(hideButton, 20000);
 
 setTimeout(showButton, 80000);
 
 setTimeout(hideButton, 85000);
 
 
function hideButton(){
		$("#redButton").css('visibility', 'hidden');
}

function showButton(){
		$("#redButton").css('visibility', 'visible');
}

function destroyApp(){
	$("#divGraphic").empty();
	
}