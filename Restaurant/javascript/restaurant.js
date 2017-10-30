var foodItems = [
	{
		name:"French Fries",
		price:106
	},
	{
		name:"Chilli Cheese Toast",
		price: 115
	},
	{
		name:"Chilli Cheese Garlic Toast",
		price: 115
	},
	{
		name:"Pasta Spicy Tomato / Classical Cheese",
		price: 190
	},
	{
		name:"Capsicum, Onion Pizza",
		price: 210
	},
	{
		name:"Capsicum, Onion, Mashroom Pizza",
		price: 250
	},
	{
		name:"Paneer Salsa Wrap",
		price: 133
	},
	{
		name:"Maccroni Hotpot ",
		price: 205
	},
	{
		name:"Plain Cheese Pizza",
		price: 190
	},
	{
		name:"Hot Choclate Fudge",
		price: 165
	},
	{
		name:"Fruit Salad Sundae ",
		price: 165
	},
	{
		name:"Vanilla/Strawberry icecream",
		price: 50
	},
	{
		name:"Chocolate Almond Fudge icecream",
		price: 100
	},
	{
		name:"Chilly Garlic Rice ",
		price: 180
	}
];

var orders = [
	{
		items:[],
		quantity:[],
		price:[],
		totalItems:0,
		bill:0
	},
	{
		items:[],
		quantity:[],
		price:[],
		totalItems:0,
		bill:0
	},
	{
		items:[],
		quantity:[],
		price:[],
		totalItems:0,
		bill:0
	},
	{
		items:[],
		quantity:[],
		price:[],
		totalItems:0,
		bill:0
	},
	{
		items:[],
		quantity:[],
		price:[],
		totalItems:0,
		bill:0
	},
	{
		items:[],
		quantity:[],
		price:[],
		totalItems:0,
		bill:0
	},
	{
		items:[],
		quantity:[],
		price:[],
		totalItems:0,
		bill:0
	},
	{
		items:[],
		quantity:[],
		price:[],
		totalItems:0,
		bill:0
	},
];

//var span = document.getElementsByClassName("close")[0];

var span;
window.onload = function (){
	var id;
	var menu = document.getElementById("card");
	span = document.getElementsByClassName("close")[0];
	span.addEventListener('click',function (){ 
	var modal = document.getElementById("modal");
	var body = document.getElementById("table-contents");
	var footer = document.getElementsByClassName("modal-footer")[0];
	var head = modal.getElementsByClassName("modal-header")[0];
	var heading = modal.getElementsByTagName("h2")[0];
	var id = heading.innerHTML;
	var division = document.getElementById(id.toLowerCase());
	division.style.backgroundColor = "#ffffff";
	modal.style.display = "none";
});
	for(var i=0;i<foodItems.length;i++){
		id = "food-item-"+i;
		var division = document.createElement('DIV');
		division.setAttribute("id",id);
		division.setAttribute("class","food");
		division.setAttribute("draggable","true");
		division.setAttribute("ondragstart","drag(event)");
		menu.appendChild(division);
		division.innerHTML = "<p class=\"food-name\">"+foodItems[i].name+"</p><p class=\"item-price\">Rs."+foodItems[i].price+"</p>";
	}
}

function allowDrop(ev){
	ev.preventDefault();
}

function onDragEnter(ev){
	var id = ev.target.id;
	if(id !==""){
	var division = document.getElementById(id);
	division.style.borderColor = "rgb(0, 102, 255)";
	division.style.boxShadow = "6px 6px 8px rgba(0,102,255,0.5)";
	}	
}

function drag(ev){
	ev.dataTransfer.setData("text",ev.target.id);
	console.log("12214");
}

function drop(ev){
	ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var id = ev.target.id;
    console.log(id);
    var table = document.getElementById(id);
    var foodItem = document.getElementById(data);
    var i = data[data.length-1];
    var no = id[id.length-1]-1;
    var itemPrice = foodItem.getElementsByClassName("item-price")[0];
    var bill = table.getElementsByClassName("bill")[0];
    var items = table.getElementsByClassName("total")[0];
    console.log(itemPrice.innerHTML);
    var total = Number(bill.innerHTML);
    var num = Number(items.innerHTML);
    bill.innerHTML = total + foodItems[i].price;
    items.innerHTML = num + 1;
    if(orders[no].items.includes(foodItems[i].name)){
    	orders[no].quantity[orders[no].items.indexOf(foodItems[i].name)]++;
    }else{
    	orders[no].items.push(foodItems[i].name);
    	orders[no].quantity.push(1);
    	orders[no].price.push(foodItems[i].price);
    }
    orders[no].bill = total + foodItems[i].price;
    orders[no].totalItems = num + 1;
    table.style.borderColor = "#f1f1f1";
    table.style.boxShadow = "2px 2px 4px rgba(0,0,0,0.1)";
}

function onDragLeave(ev){
	var id = ev.target.id;
	var division = document.getElementById(id);
	division.style.borderColor = "#f1f1f1";
	division.style.boxShadow = "2px 2px 4px rgba(0,0,0,0.1)";
}

function openModal(id){
	var modal = document.getElementById("modal");
	var body = document.getElementById("table-contents");
	var footer = document.getElementsByClassName("modal-footer")[0];
	var head = modal.getElementsByClassName("modal-header")[0];
	var heading = modal.getElementsByTagName("h2")[0];
	var table = id[id.length-1]-1;
	var division = document.getElementById(id.toLowerCase());
	division.style.backgroundColor = "#ff9900"
	var array = orders[table].items;
	var n = array.length;
	heading.innerHTML = id;
	modal.style.display = "block";
	if(n!==0){
		body.innerHTML = "";
		footer.style.display="block";
		var list = document.createElement("ul");
		var sublist = document.createElement("li");
		var text = document.createTextNode("S.no");
		sublist.appendChild(text);
		list.appendChild(sublist);
		sublist = document.createElement("li");
		var para = document.createElement("div");
		text = document.createTextNode("Item Name");
		para.appendChild(text);
		sublist.appendChild(para);
		sublist.setAttribute("class","item-name");
		list.appendChild(sublist);
		sublist = document.createElement("li");
		text = document.createTextNode("Price");
		sublist.appendChild(text);
		list.appendChild(sublist);
		sublist = document.createElement("li");
		text = document.createTextNode("Quantity");
		sublist.appendChild(text);
		list.appendChild(sublist);
		body.appendChild(list);
		list.setAttribute("class","tags");
		for(var i=0;i<n;i++){
			list = document.createElement("ul");
			sublist = document.createElement("li");
			text = document.createTextNode(i+1+".");
			sublist.appendChild(text);
			list.appendChild(sublist);
			sublist = document.createElement("li");
			para = document.createElement("div");
			text = document.createTextNode(array[i]);
			para.appendChild(text);
			sublist.appendChild(para);
			sublist.setAttribute("class","item-name");
			list.appendChild(sublist);
			sublist = document.createElement("li");
			text = document.createTextNode(orders[table].price[i]);
			sublist.appendChild(text);
			list.appendChild(sublist);
			sublist = document.createElement("li");
			var quantity = document.createElement("input");
			quantity.setAttribute("value",orders[table].quantity[i]);
			quantity.setAttribute("type","number");
			quantity.min = 1; 
			sublist.appendChild(quantity);
			list.appendChild(sublist);
			sublist = document.createElement("li");
			quantity = document.createElement("span");
			quantity.addEventListener("click",deleteList);
			quantity.setAttribute("class","fa fa-trash");
			sublist.appendChild(quantity);
			list.appendChild(sublist);
			body.appendChild(list);
			list.setAttribute("id","order"+i);
			list.setAttribute("class","table-"+table);
		}
	}else{
		body.innerHTML = "";
		footer.style.display="none";
		var para = document.createElement("p");
		var text = document.createTextNode("No Orders.");
		para.appendChild(text);
		body.appendChild(para);
	}
}

//loadItems();

/*document.getElementsByClassName("close")[0].addEventListener('click',function (){ 
	var modal = document.getElementById("modal");
	modal.style.display = "none";
	console.log("ahi");
});*/

for(var i=0;i<document.getElementsByClassName("table").length;i++){
	var x = "Table"+(i+1);
	document.getElementsByClassName("table")[i].addEventListener("click", test);
}

function test(event){
	openModal((event.target.id).toUpperCase());
}

function deleteList(event){
	var span = event.target;
	var firstParent = span.parentNode;
	var secondParent = 	firstParent.parentNode;
	var id = secondParent.id;
	console.log(id);
	var className = secondParent.className;
	console.log(className);
	var itemNumber = id[id.length-1];
	var j = className[className.length-1];
	var tableNo = "table " + (Number(j)+1);
	console.log(tableNo);
	var table = document.getElementById(tableNo);
	orders[j].items.splice(itemNumber,1);
	orders[j].bill -= orders[j].price[itemNumber] * orders[j].quantity[itemNumber];
	orders[j].totalItems -= orders[j].quantity[itemNumber];
	orders[j].quantity.splice(itemNumber,1);
	orders[j].price.splice(itemNumber,1);
	var spanBill = table.getElementsByClassName("bill")[0];
	var spanTotal = table.getElementsByClassName("total")[0];
	spanBill.innerHTML =  orders[j].bill;
	spanTotal.innerHTML = orders[j].totalItems
	var modal = document.getElementById("modal");
	var body = document.getElementById("table-contents");
	var footer = document.getElementsByClassName("modal-footer")[0];
	var array = orders[j].items;
	var n = array.length;
	if(n!==0){
		body.innerHTML = "";
		footer.style.display="block";
		var list = document.createElement("ul");
		var sublist = document.createElement("li");
		var text = document.createTextNode("S.no");
		sublist.appendChild(text);
		list.appendChild(sublist);
		sublist = document.createElement("li");
		var para = document.createElement("div");
		text = document.createTextNode("Item Name");
		para.appendChild(text);
		sublist.appendChild(para);
		sublist.setAttribute("class","item-name");
		list.appendChild(sublist);
		sublist = document.createElement("li");
		text = document.createTextNode("Price");
		sublist.appendChild(text);
		list.appendChild(sublist);
		sublist = document.createElement("li");
		text = document.createTextNode("Quantity");
		sublist.appendChild(text);
		list.appendChild(sublist);
		body.appendChild(list);
		list.setAttribute("class","tags");
		for(var i=0;i<n;i++){
			var list = document.createElement("ul");
			var sublist = document.createElement("li");
			var text = document.createTextNode(i+1+".");
			sublist.appendChild(text);
			list.appendChild(sublist);
			sublist = document.createElement("li");
			var para = document.createElement("div");
			text = document.createTextNode(array[i]);
			para.appendChild(text);
			sublist.appendChild(para);
			sublist.setAttribute("class","item-name");
			list.appendChild(sublist);
			sublist = document.createElement("li");
			text = document.createTextNode(orders[j].price[i]);
			sublist.appendChild(text);
			list.appendChild(sublist);
			sublist = document.createElement("li");
			var quantity = document.createElement("p");
			quantity = document.createElement("input");
			quantity.setAttribute("value",orders[j].quantity[i]);
			quantity.setAttribute("type","number");
			quantity.min = 1; 
			sublist.appendChild(quantity);
			list.appendChild(sublist);
			sublist = document.createElement("li");
			quantity = document.createElement("span");
			quantity.addEventListener("click",deleteList);
			quantity.setAttribute("class","fa fa-trash");
			sublist.appendChild(quantity);
			list.appendChild(sublist);
			body.appendChild(list);
			list.setAttribute("id","order"+i);
			list.setAttribute("class","table-"+j);
		}
	}else{
		body.innerHTML = "";
		footer.style.display="none";
		var para = document.createElement("p");
		var text = document.createTextNode("No Orders.");
		para.appendChild(text);
		body.appendChild(para);
	}
}

function changeOrder(event){
	var modal = document.getElementById("modal");
	var myBtn = event.target;
	var firstParent = myBtn.parentNode;
	var secondParent = firstParent.parentNode;
	var inputElements = secondParent.getElementsByTagName("input");
	var heading = secondParent.getElementsByTagName("h2")[0];
	var id = heading.innerHTML;
	var division = document.getElementById(id.toLowerCase());
	division.style.backgroundColor = "#ffffff";
	var index = id[id.length-1]-1;
	orders[index].bill = 0;
	orders[index].totalItems = 0;
	for(var i=0;i<orders[index].quantity.length;i++){
		orders[index].quantity[i] = Number(inputElements[i].value);
		orders[index].bill += orders[index].price[i] * orders[index].quantity[i];
		orders[index].totalItems += orders[index].quantity[i];
		console.log(orders[index].totalItems);
	}
	var tableNo = "table " + (Number(index)+1);
	var table = document.getElementById(tableNo);
	var spanBill = table.getElementsByClassName("bill")[0];
	var spanTotal = table.getElementsByClassName("total")[0];
	spanBill.innerHTML =  orders[index].bill;
	spanTotal.innerHTML = orders[index].totalItems;
	modal.style.display = 'none';
	alert("Order Received");
}

function closeOrder(){
	var modal = document.getElementById("modal");
	var heading = modal.getElementsByTagName("h2")[0];
	var id = heading.innerHTML;
	var division = document.getElementById(id.toLowerCase());
	division.style.backgroundColor = "#ffffff";
	var index = id[id.length-1]-1;
	var totalBill = orders[index].bill;
	orders[index].items = [];
	orders[index].quantity = [];
	orders[index].price = [];
	orders[index].bill = 0;
	orders[index].totalItems = 0;
	var tableNo = "table " + (Number(index)+1);
	var table = document.getElementById(tableNo);
	var spanBill = table.getElementsByClassName("bill")[0];
	var spanTotal = table.getElementsByClassName("total")[0];
	spanBill.innerHTML =  orders[index].bill;
	spanTotal.innerHTML = orders[index].totalItems;
	modal.style.display ="none";
	alert("Pay Rs."+totalBill);
}

function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('search2');
    filter = input.value.toUpperCase();
    var card = document.getElementById("card");
    var items = card.getElementsByTagName('div');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < items.length; i++) {
        itemsName = items[i].getElementsByTagName("p")[0];
        if (itemsName.innerHTML.toUpperCase().indexOf(filter) > -1) {
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }
    }
}