firstjs.html

<html>
<body>
<p id="demo"></p>

<script>
var employeeArray = [{"id":"1","employee_name":"bappi gillu","employee_salary":"2147483647","employee_age":"61","profile_image":""},
{"id":"2","employee_name":"sandeep reddy","employee_salary":"25007","employee_age":"27","profile_image":""},
{"id":"3","employee_name":"rogue_now","employee_salary":"27888","employee_age":"26","profile_image":""},
{"id":"4","employee_name":"CodeME-TEST","employee_salary":"123","employee_age":"23","profile_image":""},
{"id":"5","employee_name":"hello 123456","employee_salary":"5 0000","employee_age":"26","profile_image":""},
{"id":"6","employee_name":"Donold Cerrone","employee_salary":"22322","employee_age":"36","profile_image":""},
{"id":"7","employee_name":" tst2 ","employee_salary":"35000","employee_age":"27","profile_image":""},
{"id":"8","employee_name":" test111 ","employee_salary":"123","employee_age":"23","profile_image":""},
{"id":"9","employee_name":" madhukar reddy","employee_salary":"34222","employee_age":"52","profile_image":""},
{"id":"10","employee_name":"gd","employee_salary":" 0","employee_age":"59","profile_image":""},
{"id":"11","employee_name":"ekesh","employee_salary":"123","employee_age":"23","profile_image":""},
{"id":"11","employee_name":"x","employee_salary":"0","employee_age":"54","profile_image":""}];



var salary = employeeArray.map(function(d) { return d.employee_salary; });
console.log(salary);

var ints= salary.map(parseFloat);
console.log(ints);

var Sum = ints.reduce( function CalculateSalary(sum, d) {
  return sum + d;
});
console.log(Sum);
/* -------------------------------------*/
var filteremp = employeeArray.filter(function filterEmployee(d){
 return d.employee_age>60;
});
console.log(filteremp);
/*---------------------------------------*/

 /*var parse_obj = JSON.parse(employeeArray);
  parse_obj["emp"].push({"id":"12","employee_name":"xyz","employee_salary":"0","employee_age":"56","profile_image":""});
  employeeArray = JSON.stringify(parse_obj); 
  console.log(parse_obj); */
var newEmp= employeeArray.push({"id":"12","employee_name":"xyz","employee_salary":"0","employee_age":"56","profile_image":""});
  console.log(newEmp);
  console.log(JSON.stringify(employeeArray));

var clean = employeeArray.filter((employeeArray, index, self) =>
    index === self.findIndex((t) => (t.id === employeeArray.id )))

console.log(clean);
/*--------------------------------------*/
var newsal = employeeArray.filter(d => d.employee_age > 50 ).map(d => ({"id" : d.id, "employee_name" :d.employee_name,
"employee_age":d.employee_age,"employee_salary":parseInt(d.employee_salary )+10000,"profile_image":d.profile_image}));
	console.log(newsal);
/*--------------------------------------*/

function getName(firstName, lastName){
  return firstName.concat(lastName);
}
//calling the function and assigning the return to a variable
var fullname = getName("Brad", "Pitt");

console.log(fullname)


//document.getElementById("demo").innerHTML = ;
</script>

</body>
</html>


          /* var theEvent = evt || window.event;
           var key = theEvent.keyCode || theEvent.which;
           key = String.fromCharCode( key ); */
 --------------------------------------------------------------------------------
 secondjs.html
 
 <html>
    <body>
        <form id="basicform" >
            ID: <input type="text" id="ID" name ="ID" oninput=" return validateNumber(this)"><br><br>
            Firstname:<input type="text" id="name" name="firstname" oninput="return validateChar(this)"><br><br>
            Lastname:<input type="text" id="name" name="lastname" oninput="return validateChar(this)"><br><br>
            Salary:<input type="text" id="salary" name="salary" oninput=" return validateNum(this)"><br><br>
            DOB: <input type="text" id="dob" name="dob" (onclick)="age(event)"><br><br> 
			Enter your birthday&nbsp;&nbsp;<input type="text" name="txtBday" size="2"><br/>
           Enter your birth Month(1-12)<input type="text" name="txtBmo"size="2"><br/>
           Enter your 4 digit birth year<input type="text" name="txtByr"size="4" ><br/>
          
         </form>
		 <p id="demo"></p>
         <button onclick="myFunction()">Submit</button>


        <script>
		   var idfield = document.getElementById("ID").value;
           var validNumber = new RegExp(/^\d*\.?\d*$/);
        function validateNumber(elem) {
           if( validNumber.test(elem.value) ) {
           idfield = elem.value;
		  } else {
		  elem.value = idfield; }
   } 
        
      var textfield =document.getElementById("name").value;
	  var ValidChar = new RegExp(/^[a-zA-Z]+$/);
	  function validateChar(elem){
	     if (ValidChar.test(elem.value)){
		    textfield = elem.value; }
			else { elem.value = textfield; }
			}
			
   var salfield =document.getElementById("salary").value;
	  var ValidSal = new RegExp(/^\d*\.?\d*$/);
	  function validateNum(elem){
	     if (ValidSal.test(elem.value)){ 
		    salfield = elem.value; 
			console.log("val is"+ salfield);}
			else { elem.value = salfield; }
			}
			

function Age()
{
var bday=parseInt(document.forms[0].txtBday.value);
var bmo=(parseInt(document.forms[0].txtBmo.value)-1);
var byr=parseInt(document.forms[0].txtByr.value);
var byr;
var age;
var now = new Date();
tday=now.getDate();
tmo=(now.getMonth());
tyr=(now.getFullYear());
{
if((tmo > bmo)||(tmo==bmo & tday>=bday))
{age=byr}
else
{age=byr+1}
alert("As of today, "+now+' \n'+", you are:"+(tyr-age)+ " years old");
console.log((tyr-age));
}}

/*function myFunc(formArray) {//serialize data function

  var jsonArray = {};
  for (var i = 0; i < formArray.length; i++){
    console.log(formArray.length);
    jsonArray[formArray[i]['name']] = formArray[i]['value'];
  }
  console.log(jsonArray);
  
}*/
/*function myFunction() {
  var x = document.getElementById("basicform").elements[0].value;
  document.getElementById("demo").innerHTML = x;
}*/
function myFunction() {
    var elements = document.getElementById("basicform").elements;
    var obj ={};
    for(var i = 0 ; i < elements.length ; i++){
        var item = elements.item(i);
		document.getElementById("basicform").innerHTML = JSON.stringify(item);
        obj[item.name] = item.value;
    }

    document.getElementById("demo").innerHTML = JSON.stringify(obj);
	console.log(obj);
}

        </script>
    </body>

</html>
------------------------------------------------------------
thirdjs.html
<!DOCTYPE html>
<html>

<body>
<p id="demo"></p>
<script>
function upload() {
  /*var http = new XMLHttpRequest();
  http.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML ="test";
      this.responseText;
    }
  };
  http.open("GET", "C:/Roja/EmployeeArray.txt", true);
  http.send();*/
    var url = "file:///C:/Roja/EmployeeArray.txt";
   
    var http = new XMLHttpRequest();

    http.open("GET", url);
    http.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    http.setRequestHeader("Access-Control-Allow-Origin", "*");
  

    var text = {"command":"PUSH"};
    http.send(text);
}
document.getElementById("demo").innerHTML = upload();
</script>

</body>
</html>
----------------------------------

diff working codes

     -------------------for numbers---------
  ID: <input type="text" id="ID" oninput=" return validateNumber(this)"><br><br>
   var idfield = document.getElementById("ID").value;
          var validNumber = new RegExp(/^\d*\.?\d*$/);
       function validateNumber(elem) {
         
          if( validNumber.test(elem.value) ) {
          idfield = elem.value;
		  } else {
		  elem.value = idfield; }
   } 
   /*function validate(evt) {
var theEvent = evt || window.event;
var key = theEvent.keyCode || theEvent.which;
key = String.fromCharCode( key );
var regex = /[0-9]|\./;
if( !regex.test(key) ) {
theEvent.returnValue = false;
if(theEvent.preventDefault) theEvent.preventDefault();
}
}*/

/* function myFunction() {
  var number = $("#num").val();
  var compare = '[0][1-9]\d{9}$|^[1-9]\d{9}$';
  if (number.match(compare)) {
    return true;

  } else {
    alert('not match');
    return false;
  }
}<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<input type="text" id="num" onblur="myFunction()">
var compare=/^[0-9]{1,10}$/g
 */
   -----------------------------------------------
   
   var fullname = employeeArray.map(function(firstName, lastName) {
 var firstName = employeeArray.map(function(d) { return d.employee_name.split(' ').slice(0,-1).join(' ')});

var lastName = employeeArray.map(function(d) { return d.employee_name.split(' ').slice(-1).join(' ')});
return firstName.concat(lastName);
});
console.log(fullname);


var firstName = employeeArray.map(function(d) { return d.employee_name.split(' ').slice(0,-1).join(' ')});

var lastName = employeeArray.map(function(d) { return d.employee_name.split(' ').slice(-1).join(' ')});
console.log(firstName);
console.log(lastName);


^[0-9]*$

var numbersOnly = /^\d+$/;
 var decimalOnly = /^\s*-?[1-9]\d*(\.\d{1,2})?\s*$/;
 var uppercaseOnly = /^[A-Z]+$/;
 var lowercaseOnly = /^[a-z]+$/;
 var stringOnly = /^[A-Za-z0-9]+$/;
 -------------------------------------------------------------------
