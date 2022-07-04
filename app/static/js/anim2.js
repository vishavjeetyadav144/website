window.onload = function get_body() {
    var w=screen.width;
    var elem = document.getElementById("mbox");
    if(w<1000){
    elem.style.width="80vw";
    var myElements = document.getElementsByClassName('address');
    for (var i = 0, ii = myElements.length; i < ii; i++) {
    myElements[i].style.height="200px";
    }
    var myElements = document.getElementsByClassName('city');
    for (var i = 0, ii = myElements.length; i < ii; i++) {
    myElements[i].style.marginRight="60%";
    }
    }
 }

// address check start
 var closeIcons=document.getElementsByClassName("pcode");
    for (i = 0; i < closeIcons.length; i++) {
    closeIcons[i].addEventListener("change", check);
    }
 function check(){
 var elem = document.getElementsByClassName("pcode")
 for (var i = 0, ii = elem.length; i < ii; i++) {

    var url='https://api.postalpincode.in/pincode/'+elem[i].value;

    fetch(url)
    .then((resp) => resp.json()) // Transform the data into json
    .then(function(data) {

        var error = document.getElementById("pincode_check");
    error.style.display="none";
        var country=document.getElementsByClassName("country");
            for (i = 0; i < country.length; i++) {
                country[i].value=data[0]["PostOffice"][0]['Country'];
                }
        var state=document.getElementsByClassName("state");
            for (i = 0; i < state.length; i++) {
                state[i].value=data[0]["PostOffice"][0]['State'];
                }
        var city=document.getElementsByClassName("city");
            for (i = 0; i < city.length; i++) {
            city[i].value=data[0]["PostOffice"][0]['District'];
            }
    })
  .catch(function(error) {
    var error = document.getElementById("pincode_check");
    error.style.display="block";
    var closeIcons=document.getElementsByClassName("pcode");
    for (i = 0; i < closeIcons.length; i++) {
    closeIcons[i].value='';
    }
    var country=document.getElementsByClassName("country");
            for (i = 0; i < country.length; i++) {
                country[i].value='';
                }
        var state=document.getElementsByClassName("state");
            for (i = 0; i < state.length; i++) {
                state[i].value='';
                }
        var city=document.getElementsByClassName("city");
            for (i = 0; i < city.length; i++) {
            city[i].value='';
            }
  });

    }
       }
      //ending address check
  // checking username
    var userName=document.getElementsByClassName("username");
    for (i = 0; i < userName.length; i++) {
    userName[i].addEventListener("change", checkusername);
    }

function checkusername() {
        //var phone = document.forms["form"]["phone"].value;
        var user=document.getElementsByClassName("username");
        for (i = 0; i < user.length; i++) {

            if(user[i].value.length>=6) {
                var error = document.getElementById("check_username");
                error.style.display="none";
                return ;
            }
            else {
                var error = document.getElementById("check_username");
                error.style.display="block";
                user[i].value=''
                return ;
            }


        }
        }

  //username check end
      //checking phone number
var phoneNumber=document.getElementsByClassName("phone");
    for (i = 0; i < phoneNumber.length; i++) {
    phoneNumber[i].addEventListener("change", checkPhone);
    }

function checkPhone() {
        //var phone = document.forms["form"]["phone"].value;
        var phone=document.getElementsByClassName("phone");
        for (i = 0; i < phone.length; i++) {
            var phone=phone[i].value
            var phoneNum = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/;
            if(phone.match(phoneNum)) {
                var error = document.getElementById("number_check");
                error.style.display="none";
                return ;
            }
            else {
                var error = document.getElementById("number_check");
                error.style.display="block";
                var phoneNumber=document.getElementsByClassName("phone");
                for (i = 0; i < phoneNumber.length; i++) {
                phoneNumber[i].value=''
                }
                return ;
            }


        }
        }
//phone number checking end
      //checking email number
var emailAddress=document.getElementsByClassName("email");
    for (i = 0; i < emailAddress.length; i++) {
    emailAddress[i].addEventListener("change", checkemail);
    }

function checkemail() {
        var email=document.getElementsByClassName("email");
        for (i = 0; i <email.length; i++) {
            var email=email[i].value
            var emailAdd = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            if(email.match(emailAdd)) {
                var error = document.getElementById("email_check");
                error.style.display="none";
                return ;
            }
            else {
                var error = document.getElementById("email_check");
                error.style.display="block";
                var emailAddress=document.getElementsByClassName("email");
                for (i = 0; i < emailAddress.length; i++) {
                emailAddress[i].value=''
                }
                return ;
            }


        }
        }
//email checking end

// password check
function pcheck(){
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    var password=document.getElementsByClassName("password");
    for (i = 0; i < password.length; i++) {
    var value=password[i].value;

    if((/[a-z]/.test(value))==true && (/[A-Z]/.test(value))==true && (/[0-9]/.test(value))==true && value.length>=8){
    return 'True';
    }
    else{
    return 'False';
    }
    }
}



var password=document.getElementsByClassName("password");
    for (i = 0; i < password.length; i++) {
    password[i].onfocus= function(){
    document.getElementById("message").style.display = "block";
    document.getElementById("check_password").style.display = "none";
    };
    password[i].onblur= function(){
    document.getElementById("message").style.display = "none";

    if(pcheck()=='True'){
        return;
    }
    else{
    document.getElementById("check_password").style.display = "block";
    password[i].value=''
    }
    };
    password[i].onkeyup= function(){
    var letter = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var number = document.getElementById("number");
    var length = document.getElementById("length");
    var pass=document.getElementsByClassName("password");
                for (i = 0; i <pass.length; i++) {
                var lowerCaseLetters = /[a-z]/g;
                if(pass[i].value.match(lowerCaseLetters)) {
                    letter.classList.remove("invalid");
                    letter.classList.add("valid");
                } else {
                    letter.classList.remove("valid");
                    letter.classList.add("invalid");
                }

  // Validate capital letters
                var upperCaseLetters = /[A-Z]/g;
                if(pass[i].value.match(upperCaseLetters)) {
                    capital.classList.remove("invalid");
                    capital.classList.add("valid");
                } else {
                    capital.classList.remove("valid");
                    capital.classList.add("invalid");
                }

  // Validate numbers
                var numbers = /[0-9]/g;
                if(pass[i].value.match(numbers)) {
                number.classList.remove("invalid");
                number.classList.add("valid");
                 } else {
                number.classList.remove("valid");
                number.classList.add("invalid");
                    }

  // Validate length
                  if(pass[i].value.length >= 8) {
                    length.classList.remove("invalid");
                    length.classList.add("valid");
                  } else {
                    length.classList.remove("valid");
                    length.classList.add("invalid");
                  }
            }

    };

    }

// password check end

//confirm password check start
var cp=document.getElementsByClassName("confirm_password");
    for (i = 0; i < cp.length; i++) {
    cp[i].onblur= function(){
          var cpwd=document.getElementsByClassName("confirm_password");
          for (i = 0; i < cpwd.length; i++){
            var pwd=document.getElementsByClassName("password");
            for(j=0;j<pwd.length;j++){
                console.log(pwd[j],cpwd[i]);
                if(pwd[j]!=''){

                    if(pwd[j].value==cpwd[i].value){
                    var ele=document.getElementById("check_confirm_password");
                    ele.style.display="none";
                    return;
                    }
                    else{
                    var ele=document.getElementById("check_confirm_password");
                    ele.style.display="block";
                    cpwd[i].value='';
                    return;
                    }
               }
               else{
                    console.log(pwd[j]);
                    var ele=document.getElementById("check_confirm_password");
                    ele.style.display="block";
                    cpwd[i].value='';
                    return;
               }
            }
          }
    };
    }
