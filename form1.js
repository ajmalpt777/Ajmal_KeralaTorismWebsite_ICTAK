var email=document.getElementById("email");
var password=document.getElementById("password");

function validate(){
    if (email.value=="" || password.value=="")
       {
           alert("Fields Cannot Be Empty");
           return false;
       }
    else 
    {
        return true;
    }   
}