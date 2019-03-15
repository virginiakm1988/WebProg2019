var todo_list_data = [];
var items_cnt = 0;

//add new input
const input = document.getElementById('todo-input');
input.addEventListener('keyup', event => {
  if (event.keyCode === 13 && event.target.value !== '')  {
  	addElements(input);
  	deleteElement();
  	itemCompleted();
  	count();
  }
});

const clear = document.getElementById("clear");
clear.addEventListener("click",event=>{
	deleteAll();
})


var deleteElement = function()
{
	var close = document.getElementsByClassName("todo-app__item-x");
	var i;
	for (i = 0; i < close.length; i++) {
	  	close[i].onclick = function() {
	    var div = this.parentElement;
	    div.style.display = "none";
	    var textNode = div.children[1].innerHTML;
	    todo_list_data.splice( todo_list_data.indexOf(textNode), 1 );
	    items_cnt --;
	  	count();
	  }
	}
}

var addElements= function(input){
  	// <div class="todo-app__item">
  	const list = document.getElementById("todo-list");
  	addNewElements(list,input.value,false);
  	var newItem = { node: input.value , isComplete: false };
  	todo_list_data[items_cnt] = newItem;
  	items_cnt++;
	count();
	input.value="";
}


var itemCompleted=function()
{
	const complete_checkbox = document.getElementsByClassName("todo-app__checkbox");
	var cnt;
	for(cnt = 0 ; cnt < complete_checkbox.length ; cnt++)
	{
		complete_checkbox[cnt].onclick = function() {
	    var div = this.parentElement;
	    const node = div.children[1];
	    const checklabel = div.children[0].children[1];

	    let i = 0;
	    for(i = 0; i < items_cnt; i++){
	    	if(node.innerHTML == todo_list_data[i]["node"])
	    	{
	    		if(todo_list_data[i]["isComplete"] == false)
	    		{
	    			node.style["textDecoration"] = "line-through";
					node.style["opacity"] = 0.5;
					todo_list_data[i]["isComplete"] = true;	
					checklabel.style["background-color"]="green";

	    		}
	    		else{
	    			node.style["textDecoration"] = "none";
					node.style["opacity"] = 1;
					todo_list_data[i]["isComplete"] = false;
					checklabel.style["background-color"]="grey";
	    		}
	    		count();
	    		
	    	}
	    }
		
		}
  	}
}


var addNewElements=function(list,item_text,isCompleted)
{	
  	const todo_item = document.createElement("LI");//<li class="todo-app__item">;
  	const checkbx = document.createElement("DIV");//<div class = "todo-app_checkbox">;
  	const checkbx_input = document.createElement("INPUT");//document.<input id = "0">;
  	const checkbx_label = document.createElement("LABEL");//<label for "0">;
  	const todo_item_detail = document.createElement("H1");//<h1 class = "todo-app__item-detail">("this is the first TODO");
  	const del =document.createElement("IMG");// document.<img src="./img/x.png" class = "todo-app__item-x">;

  	todo_item.setAttribute("class","todo-app__item");
  	checkbx.setAttribute("class","todo-app__checkbox");
  	checkbx_input.setAttribute("id","0");
  	checkbx_label.setAttribute("id","todo-app__checkbox-label")
  	checkbx_input.setAttribute("type","checkbox");
  	todo_item_detail.setAttribute("class","todo-app__item-detail");
  	del.setAttribute('src',"./img/x.png");
  	del.setAttribute('class', "todo-app__item-x");

  	 if(isCompleted){
  		todo_item_detail.style["textDecoration"] = "line-through";
		todo_item_detail.style["opacity"] = 0.5;
		checkbx_label.style["background-color"]="green";
  	}
  
  	var textNode = document.createTextNode(item_text);
  	todo_item_detail.appendChild(textNode);
  	checkbx.appendChild(checkbx_input);
  	checkbx.appendChild(checkbx_label);
  	todo_item.appendChild(checkbx);
  	todo_item.appendChild(todo_item_detail);
  	todo_item.appendChild(del);
 
  	list.appendChild(todo_item);
}

var showElements = function(status){
	const list = document.getElementById("todo-list");
    var lis = list.getElementsByTagName("li")
	while(lis.length > 0) {
	list.removeChild(lis[0]);
	} 
	var i = 0;
	for (i = 0; i < items_cnt; i++){	
		var item_text = todo_list_data[i]["node"];
		if(status=="Completed"){
			if(todo_list_data[i]["isComplete"] == true){
				addNewElements(list,item_text,true)
			}
		}
		else if (status == "active"){
			if(todo_list_data[i]["isComplete"] == false){
				addNewElements(list,item_text,false)
			}
		}
		else if (status == "all"){
			addNewElements(list,item_text,todo_list_data[i]["isComplete"])
		}
				
	}
	deleteElement();
  	itemCompleted();
  	count();
}

var deleteAll = function()
{
    var ul = document.getElementById("todo-list");
    var lis = ul.getElementsByTagName("li")
	while(lis.length > 0) {
	ul.removeChild(lis[0]);
	}  
	while(items_cnt>0){
		todo_list_data.pop();
		items_cnt--;
	}
	count();
}

var count = function(){
	let todoCount = document.getElementById("todo-count");
	let left = todoCount.innerHTML= todo_list_data.filter(ele => !ele.isComplete).length;
	todoCount.innerHTML= todo_list_data.filter(ele => !ele.isComplete).length;
	todoCount.innerHTML = "total: "+items_cnt +" , "+left+" left";
}