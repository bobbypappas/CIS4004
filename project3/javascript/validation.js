function validate() {
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var address = document.getElementById('address').value;
  var city = document.getElementById('city').value;
  var state = document.getElementById('state').value;
  var zip = document.getElementById('zip').value;
  var phoneNumber = document.getElementById('phoneNumber').value;
  var email = document.getElementById('email').value;

  var emailID = document.getElementById('email').value;
  atpos = emailID.indexOf("@");
  dotpos = emailID.lastIndexOf(".");


  if(firstName == "")
  {
    alert("Please provide your first name!");
    return false;
  }

  if(lastName == "")
  {
    alert("Please provide your last name!");
    return false;
  }

  if(address == "")
  {
    alert("Please provide your address!");
    return false;
  }

  if(city == "")
  {
    alert("Please provide your city!");
    return false;
  }

  if(state == "-1")
  {
    alert('Please provide your state!');
    return false;
  }

  if(zip == "" || isNaN( zip ) ||  zip.length != 5)
  {
    alert("Please provide a zip in the format #####.");
    return false;
  }

  if(phoneNumber == "" || isNaN( phoneNumber ) ||  phoneNumber.length != 10)
  {
    alert("Please provide a Phone Number in the format ### ### ####.");
    return false;
  }

  if(email == "")
  {
    alert("Please provide your email!");
    return false;
  }

  if(atpos < 1 || ( dotpos - atpos < 2 ))
  {
    alert("Please enter correct email")
    return false;
  }

  return(true);
}
