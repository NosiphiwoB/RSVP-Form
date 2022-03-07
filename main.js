let form = document.getElementById("form")
let name = document.querySelector("#name")
let lastName = document.getElementById("lastName")
let dateOfBirth = document.getElementById("dob")
let cellNumber = document.getElementById("number")
let email = document.getElementById("email")
let attend = document.getElementById("attend")
let partner = document.getElementById("partner")
let foodPreference = document.getElementById("food")

function mySubmit(event) {
  event.preventDefault();
  let name = document.querySelector("#name").value
let lastName = document.getElementById("lastName").value
let dateOfBirth = document.getElementById("dob").value
let cellNumber = document.getElementById("number").value
let email = document.getElementById("email").value
let attend = handleRadioButtons(); 
let partner =document.getElementById("partner").value
let foodPreference = document.getElementById("food").value

if (name === "" || lastName === "" || dateOfBirth ==="" || cellNumber ==="" || email ==="" || attend ==="" ) {
  document.getElementById("error").innerHTML = `<h1 style="text-align:center; color:red;">Fill all the required fields</h1>`
}else {
  document.getElementById("success").innerHTML = `<h1 style="text-align:center; color:green;">Successful</h1>`
  document.getElementById("display").innerHTML = `<ol id="display-list" >
  <li>Name: ${name}</li>
  <li>Last Name: ${lastName}</li>
  <li>Date Of Birth: ${dateOfBirth}</li>
  <li>Cell Number: ${cellNumber}</li>
  <li>Email: ${email}</li>
  <li>attend: ${attend}</li>
  
</ol>`
}


}



  function show() {
      
    var yesDisplay = document.getElementById("preference");
    if (yesDisplay.style.display === "none") {
        yesDisplay.style.display = "block";
    } else {
        yesDisplay.style.display = "block";
    }
  }

  const handleRadioButtons = () => {
const radioButtons = document.querySelectorAll('input[name="selection"]');
  let selectedSize;
  for (const radioButton of radioButtons) {
      if (radioButton.checked) {
          selectedSize = radioButton.value;
          break;
      }
  }
  
  return selectedSize
};


function hide() {
    var noDisplay = document.getElementById("preference");
    if (noDisplay.style.display === "block") {
        noDisplay.style.display = "none";
    } else {
        noDisplay.style.display = "none";
    }
  }