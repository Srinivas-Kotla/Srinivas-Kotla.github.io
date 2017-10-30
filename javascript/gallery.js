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
	name:"",
	imageInfo:"",
	uploadedDate: ""
},
{
	imageUrl:"http://braincrook.com/wp-content/uploads/2015/04/Ninja1024x1024-1024x1024.png",
	name:"",
	imageInfo:"",
	uploadedDate: ""
},
{
	imageUrl:"http://www.pngall.com/wp-content/uploads/2016/06/Cartoon-Free-PNG-Image.png",
	name:"",
	imageInfo:"",
	uploadedDate: ""
},
{
	imageUrl:"https://cdn.pixabay.com/photo/2013/07/13/11/44/penguin-158551_960_720.png",
	name:"",
	imageInfo:"",
	uploadedDate: ""
},
{
	imageUrl:"https://www.khwiki.com/images/thumb/f/f9/Pumbaa_KHII.png/250px-Pumbaa_KHII.png",
	name:"",
	imageInfo:"",
	uploadedDate: ""
},
{
	imageUrl:"http://vignette3.wikia.nocookie.net/angrybirdsfanon/images/f/f0/Angry_Bird_red.png/revision/latest?cb=20130304122242",
	name:"",
	imageInfo:"",
	uploadedDate: ""
},
{
	imageUrl:"https://vignette.wikia.nocookie.net/marvel_dc/images/8/87/LEGO_Batman.jpg/revision/latest?cb=20120604080057",
	name:"",
	imageInfo:"",
	uploadedDate: ""
},
{
	imageUrl:"https://images.hellogiggles.com/uploads/2017/03/12030129/Wall-E-22-1024x690.jpg",
	name:"",
	imageInfo:"",
	uploadedDate: ""
},
{
	imageUrl:"../media/9.jpg",
	name:"",
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
		var s = "<div id = 'image"+sequenceGenerator+"' class=\"img-wrap\"><img src=\""+jsondoc[i].imageUrl+"\" onclick=\"viewImage('image"+sequenceGenerator+"')\"/></div>";
		cell.innerHTML = s;
		console.log(s);
		cellCount++;
		sequenceGenerator++;
		identity = "image" +  sequenceGenerator;
	}	
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
	console.log(myImg);
}

function imageViewClose(){
	var view = document.getElementById('imageview');
	view.style.display = 'none';
	return false;
}