

//JSON STUFF
var channels = getJsonChannels();
var currList = channels.slice(0,2); //First 2 items
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
			if ($("#gPanel").length > 0){
				$("#gPanel").remove();
			}

            var div_g = $(document.createElement("div"));
				div_g.attr('id', "g3Panel");


            var div_catalog = createCatalogPanel(channels);


			var div_info = $(document.createElement("div"));
				div_info.attr('id', "infoPanel");
			
			var div_preview = $(document.createElement("div"));
				div_preview.attr('id',"previewPanel");
				var div_item = createItem(channels[1]);
				div_preview.append(div_item);
			//ToDo: Uncomment de video
			// var video = $(document.createElement("object"));
			// 	video.attr('id',"video");
			// 	video.attr('type', "video/broadcast");
			// 	div_preview.append(video);

				
			var div_related = $(document.createElement("div"));
				div_related.attr('id',"relatedPanel");
				var div_item = createItem(channels[1]);
				div_related.append(div_item);
				
				div_info.append(div_preview);
				div_info.append(div_related);
				
			var div_buttons = createButtonPanel();			
				
				div_g.append(div_catalog);
				div_g.append(div_info);
				$("#divGraphic").append(div_g);
				// var	video2 = document.getElementById("video");
				// video2.bindToCurrentChannel();
				$("#divGraphic").append(div_buttons);
				

			break;
		default:
			console.log("OJO CUIDAO");
	}
	
	
}
function  channelUp() {
    //pick element with focus
    var currElement = $(".focus");
    //saw their id
    var id = currElement.attr('id');

    //if is the first item of the currList -> can't go up
    if(currList[0]['id'] == id ){
        //If it is the first item also of the entire list
        if(channels[0]['id'] == id){
            console.log("First item, can't go up");
        }
        else{
            for(i = currList.length-1; i > 0; i--) {
                currList[i] = currList[i - 1];
            }
            id--;
            currList[i] = channels[id];
            currList[i+1]['name'] = "";
            currList[i]['name'] = "focus";
        }
    }
    else{
        for (i = 0; i < currList.length; i++){
            if(currList[i]['id'] == id){
                $(".item.focus").removeClass("focus");
                currList[i]['name'] = "";
                currList[i-1]['name'] = "focus";
            }
        }
    }

    //Redraw list
    $("#catalogPanel").empty();
    for(var i = 0; i < currList.length; i++){
        var div_item = createItem(currList[i]);
        $("#catalogPanel").append(div_item);
    }

}

function channelDown() {
    //pick element with focus
    var currElement = $(".focus");
    //saw their id
    var id = currElement.attr('id');

    //if is the last item of the currList -> can't go down
    if(currList[currList.length-1]['id'] == id ){
    	//If it is the last item also of the entire list
    	if(channels[channels.length-1]['id'] == id){
    		console.log("Last item, can't go down");
		}
		else{
    		for(i = 0; i < currList.length-1; i++) {
                currList[i] = currList[i + 1];
            }
            id++;
			currList[i] = channels[id];
            currList[i-1]['name'] = "";
            currList[i]['name'] = "focus";
		}
    }
    else{
        for (i = 0; i < currList.length; i++){
			if(currList[i]['id'] == id){
                $(".item.focus").removeClass("focus");
                currList[i]['name'] = "";
                currList[i+1]['name'] = "focus";
			}
		}
    }

    //Redraw list
	//Primero vaciarla
    $("#catalogPanel").empty();
	//Luego repintarla
    for(var i = 0; i < currList.length; i++){
        var div_item = createItem(currList[i]);
        $("#catalogPanel").append(div_item);
    }

}

function getJsonChannels() {
    var json = {
        "conUsers": [
            {
                "username": "Alumne 1"
            },
            {
                "username": "Alumne 2"
            },
            {
                "username": "Alumne 3"
            }
        ],
        "channels": [
            {
                "thumbnail": "thumbnail 1",
                "numPlaybacks": "29",
                "albumName": "Album name 1",
                "artistName": "Artist name 1",
                "Description": "Description 1"
            },
            {
                "thumbnail": "thumbnail 2",
                "numPlaybacks": "49",
                "albumName": "Album name 2",
                "artistName": "Artist name 2",
                "Description": "Description 2"
            },
            {
                "thumbnail": "thumbnail 3",
                "numPlaybacks": "69",
                "albumName": "Album name 3",
                "artistName": "Artist name 3",
                "Description": "Description 3"
            }
        ]
    };
	for (i = 0; i < json.channels.length; i++){
		json.channels[i].id = i;
		json.channels[i].name = "";
	}
	json.channels[0].name = "focus";
    return json.channels;
}

function createItem(channel){

    var div_item = $(document.createElement("div"));
		div_item.attr('class',"item");
    	div_item.attr('id',channel['id']);
    	if(channel['name'] === 'focus'){
            div_item.addClass('focus');
        }
	//ToDo:end the thumbnail
    var div_item_img = $(document.createElement("img"));
		div_item_img.attr('src',"https://www.youtube.com/yts/img/yt_1200-vfl4C3T0K.png");
		div_item_img.attr('class',"itemImg");

	var div_item_data = $(document.createElement("div"));
		div_item_data.attr('class',"item_data");
	
	var div_item_album = $(document.createElement("p")).text(channel['albumName']);
	
	var div_item_artist = $(document.createElement("p")).text(channel['artistName']);
		div_item_data.append(div_item_album);
		div_item_data.append(div_item_artist);
	
	var div_item_badge = $(document.createElement("div"));
		div_item_badge.attr('class',"itemBadge");
		
	var div_item_count = $(document.createElement("p")).text(channel['numPlaybacks']);
		div_item_badge.append(div_item_count);
		
		div_item.append(div_item_img);
		div_item.append(div_item_data);
		div_item.append(div_item_badge);
		
	return div_item;
}

function createCatalogPanel(channels, currList) {
    var div_catalog = $(document.createElement("div"));
    div_catalog.attr('id', "catalogPanel");

    //Create channel List
    for(var i = 0; i < 2; i++){
        var div_item = createItem(channels[i]);
        div_catalog.append(div_item);
    }

	return div_catalog;
}

function createButtonPanel(){
	var div_buttons = $(document.createElement("div"));
		div_buttons.attr('id', "buttonsPanel");
		
	var red_button_img = $(document.createElement("img"));
		red_button_img.attr('src',"./img/redbutton.gif");
		red_button_img.attr('id',"button");
	var green_button_img = $(document.createElement("img"));
		green_button_img.attr('src',"./img/redbutton.gif");
		green_button_img.attr('id',"button");
	var yellow_button_img = $(document.createElement("img"));
		yellow_button_img.attr('src',"./img/redbutton.gif");
		yellow_button_img.attr('id',"button");
	var blue_button_img = $(document.createElement("img"));
		blue_button_img.attr('src',"./img/redbutton.gif");
		blue_button_img.attr('id',"button");
	
		div_buttons.append(red_button_img);
		div_buttons.append(green_button_img);
		div_buttons.append(yellow_button_img);
		div_buttons.append(blue_button_img);

	return div_buttons;
}
