
function goPage(numPage){
	switch (numPage){
		case 2:
			if ($("#redButton").length > 0){
				$("#redButton").remove();
			}
			
			var val = Math.floor(1000 + Math.random() * 9000);

			var syncNumber =  $(document.createElement("p")).text(val);
				syncNumber.attr('id', "syncNumber");
			
			var div_g = $(document.createElement("div"));
				div_g.attr('id', "gPanel");
			
			var div_syncPanel = $(document.createElement("div"));
				div_syncPanel.attr('id', "syncPanel");
			
			var syncText = $(document.createElement("p")).text("Sync number");
				syncText.attr('id', "syncText");
				
			var div_okPanel = $(document.createElement("div"));
				div_okPanel.attr('id', "okPanel");
				
			var option = $(document.createElement("p")).text("Press OK to continue");
			
			div_syncPanel.append(syncText);
			div_syncPanel.append(syncNumber);
			div_okPanel.append(option);
			
			div_g.append(div_syncPanel);
			div_g.append(div_okPanel);
			
			$("#divGraphic").append(div_g);
			break;
		case 3: 
			
			break;
		default:
			console.log("OJO CUIDAO");
	}
	
	
}
