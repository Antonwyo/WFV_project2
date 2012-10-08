//Isayev Anton
// VFW Project 2 
window.addEventListener("DOMContentLoaded", function(){


	function $ (x){
		var theElement = document.getElementById(x);
		return theElement;
	}
	
function makeChoises (){
	var formTag = document.getElementsByTagName("form")
		selectLi = $('gameinfos'),
		makeGameinfo = document.createElement('select');
		makeGameinfo.setAttribute("id","groups");
	for (var i = 0, j = gameGroups.length; i<j; i++){
		var makeOption = document.createElement('option');
		var optText = gameGroups[i];
		makeOption.setAttribute("value", optText);
		makeOption.innerHTML = optText;
		makeGameinfo.appendChild(makeOption);
	}
	selectLi.appendChild(makeGameinfo);
}

function getSelectedRadio(){
	var radio = document.forms[0].console;
	for (var i = 0; i <radio.length; i++) {
		if (radio[i].checked) {
			consoleValue = radio[i].value;
		};
	};
};


function getCheckboxCategory(){
	if($('coop').checked){
		coopValue = $('coop').value;
	}else{
		coopValue = "No"
	}
		if($('multyplayer').checked){
		multyplayerValue = $('multyplayer').value;
	}else{
		multyplayerValue = "No"
	}
		if($('singleplayer').checked){
		singleplayerValue = $('singleplayer').value;
	}else{
		singleplayerValue = "No"
	}
};

function toggleControls(n){
	switch(n){
		case "on":
			$('AddGameForm').style.display = "none";
			$('clear').style.display = "inline";
			$('displayLink').style.display = "none";
			$('addNew').style.display = "inline";
			$('submit').style.display = "none";
			break;
		case "off":
			$('AddGameForm').style.display = "block";
			$('clear').style.display = "inline";
			$('displayLink').style.display = "inline";
			$('addNew').style.display = "none";
			$('items').style.display = "none";
			break;
		default:
			return false;
	}
}

function storeData(){
	var id 				= Math.floor(Math.random( )*1000000001);
	var item 			= {};
	item.gname 			=["Game name:",$('gname').value];
	item.rday 			=["Relise date:",$('rday').value];
	item.aat 			=["Available at:",$('aat').value];
	item.pri 			=["Price:",$('pri').value];
	item.gametype 		=["Game type:",$('groups').value];
	item.console 		=["Console:", consoleValue];
	item.coop 			=["Co-op Game:", coopValue];
	item.multyplayer 	=["Multi-player Game:", multiplayerValue];
	item.singleplayer 	=["Single-player Game:", singleplayerValue];
	item.priority 		=["Priority of the Game:",$('priority').value];
	item.addinfo		=["Aditional Info:",$('aditionalinfo').value]
	localStorage.setItem(id, JSON.stringify(item));
	alert("Game added");
}



function getData(){
	if(localStorage.length === 0){
		alert("There is no game added in your library!");
	}
	makeDiv = document.createElement('div');
	makeDiv.setAttribute("id","items");
	var makeList = document.createElement('ul');
	makeDiv.appendChild(makeList);
	document.body.appendChild(makeDiv);
	$('items').style.display = "block";
	for(var i=0, len=localStorage.length; i<len;i++){
		var makeli = document.createElement('li');
		makeList.appendChild(makeli);
		var key = localStorage.key(i);
		var value = localStorage.getItem(key);
		var obj = JSON.parse(value);
		var makeSubList = document.createElement('ul');
		makeli.appendChild(makeSubList);
		for(var n in obj){
			var makeSubli = document.createElement('li');
			makeSubList.appendChild(makeSubli);
			var optSubText = obj[n][0]+" "+obj[n][1];
			makeSubli.innerHTML = optSubText;
		}
	}
	toggleControls("on");
}
function clearLocal(){
	if(localStorage.length === 0){
		alert("There is no data to clear.")
	}else{
		localStorage.clear();
		alert("All games are deleted!");
		window.location.reload();
		return false;
	}
}

var gameGroups = ["---Chose Game type---","Action","RPG","Strategy","Racing","Simulation","MMO"],
	consoleValue,
	coopValue = "No",
	multiplayerValue = "No",
	singleplayerValue = "No";

makeChoises();

// //click events
var displayLink = $('displayLink');
	displayLink.addEventListener("click", getData);
	var clearLink = $('clear');
	clearLink.addEventListener("click", clearLocal);
	var save = $('submit');
	save.addEventListener("click", storeData);

	

});