var myArray = [
{
"display": "JavaScript Tutorial",
"url": "http://www.w3schools.com/js/default.asp"
},
{
"display": "HTML Tutorial",
"url": "http://www.w3schools.com/html/default.asp"
},
{
"display": "CSS Tutorial",
"url": "http://www.w3schools.com/css/default.asp"
}
];

function myFunction(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) 
	{
        out += '<a href="' + arr[i].url + '">' +arr[i].display + '</a><br>';
    }
    document.getElementById("demo").innerHTML = out;
}
myFunction(myArray);

//JSONExample.js
			var text = '{"employees":[' +
			'{"firstName":"John","lastName":"Doe","City":"Pune" },' +
			'{"firstName":"Anna","lastName":"Smith","City":"Mumbai" },' +
			'{"firstName":"Dipak","lastName":"Deshmukh","City":"Nagpur"},' +
			'{"firstName":"Peter","lastName":"Jones","City":"Delhi" }]}';

			obj = JSON.parse(text);
			document.getElementById("demo1").innerHTML =
			obj.employees[3].firstName + " " + obj.employees[3].lastName + " " + obj.employees[3].City;
			
			var empDetail=[{"firstName":"John","lastName":"Doe","City":"Pune" }];
			obj2= JSON.parse(empDetail);
			document.getElementById("info1").innerHTML=obj2.empDetail.lastName;
		
		


