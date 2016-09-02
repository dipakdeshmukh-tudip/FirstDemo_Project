
	
       function nameValid() {
           var nm = document.getElementById("txtFname").value;
           if (nm == "" || nm == null) {
               alert("name must be enter");
               return false;
           }
           var letters = /^[A-Za-z]+$/;
           if (nm.match(letters)) {
               // return true;
           }
           else {
               alert("Name contain only character");
               return false;
           }
       }
 
    function emailValid()
    {
           var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
           var email = document.getElementById("txtEmail").value;
           if (email == "" || email == null) {
               alert("Enter email id");
               return false;
           }
           if (email.match(expr)) {
               //return true;
           }
           else {
               alert("You have enter invalid email address");
               return false;
           }
       }
	
		function isEmpty()
		{
			var name = document.getElementById("txtFname").value;
			if(name.trim() == "" || name == null)
			{
				alert("True");
				return false;
			}
			else
			{
				alert("false");
				return true;
			}			
		}  

  
		function myFunctionMultipication() {
			var num1=document.getElementById("TextBox1").value;
			var num2=document.getElementById("TextBox2").value;
			//document.write(a);
			var result;
			try
			{
				result = num1 * num2;
			}
			catch(err) {
				message.innerHTML = "Input is " + err;
			}
			finally
			{
				document.getElementById("res").value = result;
			}		
		}
	   function myFunctiondivision() 
	   {

		   var num5 = 7;
	        var num4 = 7;
			var num1=document.getElementById("TextBox1").value;
			var num2=document.getElementById("TextBox2").value;
			//document.write(a);
			var result;
			try
			{
				result = num1 / num2;
			}			
			catch(err) {
				message.innerHTML = "Input is " + err;
			}
			finally
			{
				document.getElementById("res").value = result;
			}		
		
		}
	 
	   document.getElementById("FormTitle").style.color = "Red";
	   
	   
			
		
	