function validate() {
    if(document.myForm.fName.value == ""){
        alert("Please provide your First Name!");
        document.myform.first-name.focus();
        return false;
    }
    if(document.myForm.lName.value == ""){
        alert("Please provide your Last Name!");
        document.myForm.lName.focus();
        return false;
    }
    if(document.myForm.email.value == ""){
        alert("I can't get back to you without your Email!");
        document.myForm.email.focus();
        return false;
    }
    if(document.myForm.help.value == ""){
        alert("Please explain what you would like help with!");
        document.myForm.help.focus();
        return false;
    }
    return (true);
}