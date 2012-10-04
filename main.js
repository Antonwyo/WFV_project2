
//Isayev Anton
// VFW Project 2 

window.addEventListner("DOMContentLoader",function(){
	


	function $ (x){
		var theElement = document.getElementById(x);
		return theElement;
	};
	
function myChose (){
	var formTag = document.getElementsByTagName("li")
		selectLi = $('select'),
		makeSelect = document.createElement('select');
		makeSelect.setAttribute("id","groups");
	for (var i = 0, j = priorityGroups.length; i<j; i++){
		var makeOption = document.createElement('option');
		var optText = priorityGroups[i];
		makeOption.setAttribute("value", optText);
		makeOption.innerHTML = optText;
		makeSelect.appendchild(makeOption);
	}
	selectLi.appendchild(makeSelect);
};

	var priority = ["1","2","3","4","5","6","7","8","9","10"]; 

	//click events
	var displayLink = $('displayLink');
	displayLink.addEventLister("click", getData);
	var clearLink = $('clear');
	clearLink.addEventLister("click", clearLocal);
	var save = $('sumit');
	save.addEventLister("click", storeData);













	

});