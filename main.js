function validate(){
    // Validation for first name
    var fn= document.form1.Fname.value;
    if(fn==""){
        document.getElementById("fnv").innerHTML="*Please enter your first name";
        document.form1.Fname.focus();
        return false;
    }
    else{
        document.getElementById("fnv").innerHTML="";
    }

    // Validation for email
     var em= document.form1.Email.value;
     var atpos= em.indexOf("@");
     var dotpos= em.lastIndexOf('.');
     if(em==""){1
        document.getElementById('ev').innerHTML="*Please enter your email";
        document.form1.Email.focus();
        return false;
     }
     else if(atpos<1||(dotpos-atpos<2)){
        document.getElementById('ev').innerHTML="*Please enter a valid email address";
        document.form1.Email.focus();
        return false;
     }
     else{
        document.getElementById('ev').innerHTML="";
     }

     // Validation for mobile number
     var mno= document.form1.Mobile.value;
     if(mno==""){
        document.getElementById("nv").innerHTML="*Please enter your phone number"
        document.form1.Mobile.focus();
        return false;
     }
     else if(mno.length!=10||isNaN(mno)){
      document.getElementById("nv").innerHTML="*Please enter a valid phone number";
      document.form1.Mobile.focus();
      return false;
     }
     else{
        document.getElementById("nv").innerHTML="";
     }

     // Validation for Date of Birth

     var dob= document.form1.DOB.value;
     if(dob==""){
      document.getElementById("dobv").innerHTML="*Please enter your date of birth";
      document.form1.DOB.focus();
      return false;
     }
     else{
      document.getElementById("dobv").innerHTML="";
     }

     // Validation for username
     
     var un= document.form1.Uname.value;
     if(un==""){
      document.getElementById("uv").innerHTML="*Please enter an username";
    document.form1.Uname.focus();
    return false;
     }
     else{
      document.getElementById("uv").innerHTML="";
     }

     // Validation for Password 
     var pw= document.form1.Password.value;
     if(pw==""){
      document.getElementById("pv").innerHTML="*Please enter a password";
      document.form1.Password.focus();
      return false;
     }
     else if(pw.length<=6){
      document.getElementById("pv").innerHTML="*The password must be more than six characters";
      document.form1.Password.focus();
      return false;
     }
     else{
      document.getElementById("pv").innerHTML="";
     }

     // Validation for confirm password
     var cpw= document.form1.Cpassword.value;
     if(cpw==""){
      document.getElementById("cpv").innerHTML="*Renter your password";
      document.form1.Cpassword.focus();
      return false;
     }
     else if(pw!=cpw){
      document.getElementById("cpv").innerHTML="*Password must match";
      document.form1.Cpassword.focus();
      return false;
     }
     else{
      document.getElementById("cpv").innerHTML="";
     }
    // Validation for Gender
    
    var g= document.getElementsByName("radio1");
    if(g[0].checked==true){
      document.getElementById("rgen").innerHTML="";
    }
    else if(g[1].checked==true){
      document.getElementById("rgen").innerHTML="";
    }
    else{
      document.getElementById("rgen").innerHTML="*Please select your gender";
      return false;
    }
    
    // Validation for pincode

    var pc= document.form1.Pincode.value;
    if(pc==""){
      document.getElementById("pinv").innerHTML="*Please enter Pincode";
      document.form1.Pincode.focus();
      return false;
    }
    else if(pc.length!=6){
      document.getElementById("pinv").innerHTML="*Pincode must be 6 digits";
      document.form1.Pincode.focus();
      return false;
    }
    else{
      document.getElementById("pinv").innerHTML="";
    }

    //Validation for country

    var cy= document.form1.Country.value;
    if(cy==-1){
      document.getElementById("cv").innerHTML="Please Select Your Country";
      return false;
    }
    else{
      document.getElementById("cv").innerHTML="";
    }
    return true;
}