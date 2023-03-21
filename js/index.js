   
var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_error = document.getElementById('email_error');
var password_error = document.getElementById('password_error');

//treat them as object
//once nag input ng email -> everify

function email_Verify() 
    {
        //to check if valid ang email
        if (email.value.length >= 8)
            email.style.border = "1px solid silver";
            email_error.style.display = "none";
            return false;
    }
function password_Verify() 
    {
        //to check if valid ang password
        if (password.value.length >= 5)
            password.style.border = "1px solid silver";
            password_error.style.display = "none";
            return false;
    }
function validated() 
    {
        //to check if valid ang password
        if ((email.value.length < 9) || (password.value.length < 6))
        {
            email.style.backgroundColor = "red";
            email_error.style.display = "block";
            email.focus();


            password.style.backgroundColor = "red";
            password_error.style.display = "block";
            password.focus();
            return false;
        }
    }
