function validation() {
	// body...
	var name = document.forms["feedback"]["name"].value;
	var email = document.forms["feedback"]["email"].value;
	if(name !== "" && email !==""){
		if(emailValidation()){
			alert("Form submitted");
		}
	}else if(name === "" && email !== ""){
		if(emailValidation()){
			alert("Name field is empty!!");
		}
	}else if(name !== "" && email === ""){
		alert("Email field is empty!!");
	}else{
		alert("Name and Email fields are empty!!");
	}

	return false;
}

function emailValidation(){
	var email = document.forms["feedback"]["email"].value;
	var pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
	if(pattern.test(email) === false){
		alert("Please enter a valid email!!");
		return false
	}else{
		return true;
	}
}
var btn;
var jsondoc = [
{
	imageUrl:"http://wondersofdisney.webs.com/disxd/kick/kickbuttowski.png",
	name:"kickbuttowski",
	imageInfo:"",
	uploadedDate: "2017-10-30"
},
{
	imageUrl:"http://braincrook.com/wp-content/uploads/2015/04/Ninja1024x1024-1024x1024.png",
	name:"BrainCrook",
	imageInfo:"",
	uploadedDate: ""
},
{
	imageUrl:"http://www.pngall.com/wp-content/uploads/2016/06/Cartoon-Free-PNG-Image.png",
	name:"POkemon",
	imageInfo:"",
	uploadedDate: ""
},
{
	imageUrl:"https://cdn.pixabay.com/photo/2013/07/13/11/44/penguin-158551_960_720.png",
	name:"ubuntu",
	imageInfo:"",
	uploadedDate: ""
},
{
	imageUrl:"https://www.khwiki.com/images/thumb/f/f9/Pumbaa_KHII.png/250px-Pumbaa_KHII.png",
	name:"Pumba",
	imageInfo:"",
	uploadedDate: ""
},
{
	imageUrl:"http://vignette3.wikia.nocookie.net/angrybirdsfanon/images/f/f0/Angry_Bird_red.png/revision/latest?cb=20130304122242",
	name:"Angry_Bird_red",
	imageInfo:"",
	uploadedDate: ""
},
{
	imageUrl:"https://vignette.wikia.nocookie.net/marvel_dc/images/8/87/LEGO_Batman.jpg/revision/latest?cb=20120604080057",
	name:"Batman Lego",
	imageInfo:"",
	uploadedDate: ""
},
{
	imageUrl:"https://images.hellogiggles.com/uploads/2017/03/12030129/Wall-E-22-1024x690.jpg",
	name:"Wall e",
	imageInfo:"",
	uploadedDate: ""
},
{
	imageUrl:"../media/9.jpg",
	name:"Srinivas",
	imageInfo:"",
	uploadedDate: ""
}
];


function loadPictures(){
	var table = document.getElementById("myTable");
	var rowCount = 0;
	var cellCount = 0;
	var sequenceGenerator = 0;
	var identity = "image"+sequenceGenerator;
	for(var i = 0; i<jsondoc.length; i++){
		if(cellCount%3 === 0){
			var row = table.insertRow(rowCount);
			row.insertCell(0);
			row.insertCell(1);
			row.insertCell(2);
			rowCount++;
		}
		var cell = table.rows[rowCount-1].cells[i%3];
		var s = "<div id = \"image0\" class=\"img-wrap\"><span class=\"edit\"><button onclick=\"editPic('image"+sequenceGenerator+"')\">edit</button></span><span class=\"close\" onclick=\"deletePic('image"+sequenceGenerator+"')\">&times;</span><img src=\""+jsondoc[i].imageUrl+"\"/></div>";
		cell.innerHTML = s;
		cellCount++;
		sequenceGenerator++;
		identity = "image" +  sequenceGenerator;
	}	
}

window.onload = function loadPics(){
	var table = document.getElementById("myTable");
	var rowCount = 0;
	var cellCount = 0;
	var sequenceGenerator = 0;
	var identity = "image"+sequenceGenerator;
	for(var i = 0; i<jsondoc.length; i++){
		if(cellCount%3 === 0){
			var row = table.insertRow(rowCount);
			row.insertCell(0);
			row.insertCell(1);
			row.insertCell(2);
			rowCount++;
		}
		var cell = table.rows[rowCount-1].cells[i%3];
		var s = "<div id = 'image"+sequenceGenerator+"' class=\"img-wrap\"><span class=\"edit\"><button onclick=\"editPic('image"+sequenceGenerator+"')\">edit</button></span><span class=\"close\" onclick=\"deletePic('image"+sequenceGenerator+"')\">&times;</span><img src=\""+jsondoc[i].imageUrl+"\" onclick=\"viewImage('image"+sequenceGenerator+"')\"/></div>";
		cell.innerHTML = s;
		cellCount++;
		sequenceGenerator++;
		identity = "image" +  sequenceGenerator;
	}	
}

function deletePic(x){
	document.getElementById("myTable").innerHTML = "";
	var y = x[x.length-1];
	jsondoc.splice(y,1);
	if(jsondoc.length%3 ===0){
			var divRight=document.getElementById('right');
			var divleft = document.getElementById('left');
			var height = divRight.offsetHeight;
			var newHeight = height - 348;
			divRight.style.height = newHeight + 'px';
			divleft.style.height = newHeight + 'px';
		}
	loadPictures();
	console.log(y);
	return false;
}


function editPic(x){
	var modal  = document.getElementById('myModal');
	var y = x[x.length-1];
	var picDate = jsondoc[y].uploadedDate.split("-");
	document.forms["imageForm"]["field1"].value = jsondoc[y].imageUrl;
	document.forms["imageForm"]["field2"].value = jsondoc[y].name;
	document.forms["imageForm"]["field3"][0].value = picDate[2];
	document.forms["imageForm"]["field3"][1].value = picDate[1];
	document.forms["imageForm"]["field3"][2].value = picDate[0];
	document.forms["imageForm"]["field4"].value = jsondoc[y].imageInfo;
	modal.style.display = "block";
	var submitForm = document.getElementById("popSubmit");
	submitForm.onclick = function popupSubmit(){

		var url= document.forms["imageForm"]["field1"].value;
		var imageName= document.forms["imageForm"]["field2"].value;
		var day= document.forms["imageForm"]["field3"][0].value;
		var month = document.forms["imageForm"]["field3"][1].value;
		var year = document.forms["imageForm"]["field3"][2].value;
		var info= document.forms["imageForm"]["field4"].value;

		console.log(day);
		console.log(month);
		console.log(year);
		var dateString = year+'-'+month+'-'+day;
		var date = new Date(dateString);
		if(dateCheck(date) && urlCheck(url) && check(imageName) && check(info)){
			document.getElementById("myTable").innerHTML = "";
			var newImage ={
				imageUrl:url,
				name:imageName,
				imageInfo:info,
				uploadedDate:dateString
			};
			jsondoc[y] = newImage;
			console.log(jsondoc[y]);
			loadPictures();
			document.getElementsByName("imageForm")[0].reset();
			modal.style.display = "none";
			return false;
		}
		else{
			return false;
		}
	}

}

document.getElementById("myBtn").addEventListener('click',function(){
	var modal = document.getElementById("myModal");
	modal.style.display = "block";
	setDate();
	var submitForm = document.getElementById("popSubmit");
	submitForm.onclick = function popupSubmit(){
		var url= document.forms["imageForm"]["field1"].value;
		var imageName= document.forms["imageForm"]["field2"].value;
		var day= document.forms["imageForm"]["field3"][0].value;
		var month = document.forms["imageForm"]["field3"][1].value;
		var year = document.forms["imageForm"]["field3"][2].value;
		var info= document.forms["imageForm"]["field4"].value;

		console.log(day);
		console.log(month);
		console.log(year);
		var dateString = year+'-'+month+'-'+day;
		var date = new Date(dateString);
		if(dateCheck(date) && urlCheck(url) && check(imageName) && check(info)){
			document.getElementById("myTable").innerHTML = "";
			var newImage ={
				imageUrl:url,
				name:imageName,
				imageInfo:info,
				uploadedDate:dateString
			};
			jsondoc.push(newImage);
			if(jsondoc.length%3 ===1){
				var divRight=document.getElementById('right');
				var divleft = document.getElementById('left');
				var height = divRight.offsetHeight;
				var newHeight = height + 348;
				divRight.style.height = newHeight + 'px';
				divleft.style.height = newHeight + 'px';
			}
			loadPictures();
			document.getElementsByName("imageForm")[0].reset();
			modal.style.display = "none";
			return false;
		}
		else{
			return false;
		}
	}
	return false;

});

function dateCheck(input){
	var today = new Date;
	if(isNaN(input) || input>today){
		alert('Invalid date');
		return false;
	}else
		return true;
}

function urlCheck(input){
	var pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
	if(pattern.test(input)) {
		return true;
	} else {
		alert("Invalid URL");
		return false;    
	}
}

function check(input){
	if(input===""){
		alert("Shouldn't be empty");
		return false;
	}else{
		return true;
	}
}

function setDate(){
	var today = new Date();
	document.forms["imageForm"]["field3"][0].value = today.getDate();
	document.forms["imageForm"]["field3"][1].value = today.getMonth() + 1;
	document.forms["imageForm"]["field3"][2].value = today.getFullYear();
}

function viewImage(id){
	document.getElementById('imageview').style.display = 'block';
	var view = document.getElementById('imageview');
	var division = document.getElementById(id);
	var divInside = view.getElementsByTagName("div")[0];
	divInside.innerHTML = "";
	var imageInside = document.createElement('img');
	divInside.appendChild(imageInside);
	var myImg = division.getElementsByTagName('img')[0];
	imageInside.src = myImg.src;
}

function imageViewClose(){
	var view = document.getElementById('imageview');
	view.style.display = 'none';
	return false;
}