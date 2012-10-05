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
		makeGameinfo = document.createElement('gameinfos');
		makeGameinfo.setAttribute("id","groups");
	for (var i = 0, j = priorityGroups.length; i<j; i++){
		var makeOption = document.createElement('option');
		var optText = priorityGroups[i];
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

function getCheckboxGametype(){

};

function getCheckboxCategory(){
	
};

	function storeData(){
		var id 				= Math.floor(Math.random()*1000000001);
		var item 			= {};
		item.gname 			=["Game name:",$('gname').value];
		item.rday 			=["Relise date:",$('rday').value];
		item.aat 			=["Available at:",$('aat').value];
		item.pri 			=["Price:",$('pri').value];

/*		item.gametype 			=["Game name:",$('gname').value];
		item.category 			=["Game name:",$('gname').value];
		item.console 			=["Game name:",$('gname').value];
		item.priority 			=["Game name:",$('gname').value];*/

		localStorage.setItem(id, JSON.stringify(item));
		alert("Game added");
	}

	var priorityGroups = ["1","2","3","4","5","6","7","8","9","10"],
		consoleValue
	; 
	makeChoises();

	// //click events
	// var displayLink = $('displayLink');
	// displayLink.addEventListener("click", getData);
	// var clearLink = $('clear');
	// clearLink.addEventListener("click", clearLocal);
	var save = $('submit');
	save.addEventListener("click", storeData);













	

});