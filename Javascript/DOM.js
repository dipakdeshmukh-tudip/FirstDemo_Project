	function person(FirstName,LastName,age,city)
	{ 
			this.FirstName = firstName; 
			this.LastName = lastName;
			this.age = age;
			this.city =city;
			fullName= function(){
				return this.FirstName + " " + this.LastName;
				}	
	};	
	function jsObject()
	{
		var person ={ 
			FirstName:"dipak", 
			LastName:"Deshmukh",
			Education:"MCA", 
			city:"nagapur",
			fullName: function(){
				return this.FirstName + " " + this.LastName;
				}	
			};	
			document.getElementById("info").innerHTML = "My name is "+ person.FirstName + ". I have completed " + person.Education + ". I'm from " +person.city ;
		
			document.getElementById("Myname").innerHTML = person.fullName();
			document.getElementById("Myname").style.color = "Red";
			
	}
			
	//Finding HTML Element By ID. 
	function FindElementById()
	{
			var myElement = document.getElementById("intro");
			document.getElementById("demo").innerHTML ="Finding HTML Element By ID " + myElement.innerHTML;
			var findele = document.getElementById("name");
			document.getElementById("demo0").innerHTML ="Finding HTML Element By ID " + findele.innerHTML;
	}
				
			
	// Finding HTML element by class  name
	function FindElementByClassName()
	{
			var x = document.getElementsByClassName("intro");
			// Finding element at index 0 
			document.getElementById("demo1").innerHTML ='Finding HTML element by class  name class="intro": ' + x[0].innerHTML;
				
			// Finding element at index 2 
			document.getElementById("demo2").innerHTML ='Finding HTML element by class  name class="intro": ' + x[2].innerHTML;
	}
	
	// FInding HTML element by CSS selector.	
	function FindElementByCSSSecector()
	{
			var x = document.querySelectorAll("p.intro");
			document.getElementById("demo3").innerHTML ='FInding HTML element by CSS selector.class="intro": ' + x[0].innerHTML;	
	}
	
	//Changing the value of Attribute
	function changeAttributeValue()
	{
		document.getElementById("name").align ="left";
	}	
			
	// Changing HTML Style  
	function changeHtmlStyle()
	{
		document.getElementById("name").style.color = "Red";
	}	
	