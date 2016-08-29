		// Prototype in Javascript 
		
		function Person(first, last, age, eye)
		{
				this.firstName = first;
				this.lastName = last;
				this.age = age;
				this.eyeColor = eye;
		}
		function exec()
		{
				var myFather = new Person("John", "Doe", 50, "blue");
				var myMother = new Person("Sally", "Rally", 48, "green");
				document.getElementById("demo").innerHTML ="My father is " + myFather.age + ". My mother is " + myMother.age;

		}