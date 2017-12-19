/*var day=document.getElementById('day');
var mon=document.getElementById('month');
var year=document.getElementById('year');*/
var f=0;
function checkForm(){
	checkName();
	checkGender();
	checkAge();
	checkPlace();
	saveSettings();
}
function checkName(){
	//alert("function called");
	var name=document.getElementById('name');
	if((name.value=="")||(!isNaN(name.value))){
		f=1;
		document.getElementById('nameError').innerHTML="Enter a valid Name";
		//exit();
	}
	else{
		document.getElementById('nameError').innerHTML="";
		//alert("Changes Saved");
	}
}
function checkGender(){
	var gender=document.getElementById('gender');
	if(!gender){
		f=1;
		document.getElementById('genderError').innerHTML="select a gender";
		//exit();
	}
	else{
		document.getElementById('genderError').innerHTML="";
		//alert("Changes Saved");
	}
}	
function checkAge(){
	var age = document.getElementById('age');
	if(age.value<1||age.value>150){
		f=1;
		document.getElementById('ageError').innerHTML="Enter a valid age";
		//exit();
	}	
	else{
		document.getElementById('ageError').innerHTML="";
		//alert("Changes Saved");
	}
}
function checkPlace(){
	var city=document.getElementById('city');
	var country=document.getElementById('country');
	if((city.value=="")||(!isNaN(city.value))){
		f=1;
		document.getElementById('cityError').innerHTML="Enter a valid City name";
		//exit();
	}
	else{
		document.getElementById('cityError').innerHTML="";
		//alert("Changes Saved");
	}
	if((country.value=="")||(!isNaN(country.value))){
		f=1;
		document.getElementById('countryError').innerHTML="Enter a valid Country name";
		//exit();
	}
	else{
		document.getElementById('countryError').innerHTML="";
		//alert("Changes Saved");
	}	
}

function likePost(){
	//alert("function called");
	if(document.getElementById("likebutton").attributes[1].value.localeCompare("../IMAGES/like1.png")==0){
		
		document.getElementById("likebutton").src ="../IMAGES/like2.png";
	}
	else {
		document.getElementById("likebutton").src ="../IMAGES/like1.png";
	}
}
function changeDp(){
	document.getElementById("changemydp").innerHTML = 
	'<form action="/action_page.php"><input type="file" name="dp" accept="image/*"><section id="dochange"><button type="submit" class="textbox btn" onclick="">Change</section></form>';
}
function getPostImage(){
	document.getElementById("postnow").innerHTML = 
	'<form action="/action_page.php"><input type="file" name="mypost" accept="image/*"><section id="dopost"><button type="submit" class="textbox btn" onclick="">Post</section></form>';
}