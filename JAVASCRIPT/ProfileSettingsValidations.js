/*var day=document.getElementById('day');
var mon=document.getElementById('month');
var year=document.getElementById('year');*/
var f=0;
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
	var gender=document.getElementById('mgender').checked||document.getElementById('fgender').checked;
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
function checkCity(){
	var city=document.getElementById('city');
	if((city.value=="")||(!isNaN(city.value))){
		f=1;
		document.getElementById('cityError').innerHTML="Enter a valid City name";
		//exit();
	}
	else{
		document.getElementById('cityError').innerHTML="";
		//alert("Changes Saved");
	}
}
function checkCountry(){
	var country=document.getElementById('country');
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