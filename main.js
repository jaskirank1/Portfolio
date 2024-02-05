var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('main');   // having tab main  contents

// when clicking on tags it should remove the content and underline 
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("activeLink");    // removing the active class link 
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("activeTag");    // removing the active class link 
    }
    event.currentTarget.classList.add("activeLink");
    document.getElementById(tabname).classList.add("activeTag");     // ho bhi link pe click kia hoga uski id tagname mein aa gai as specified in onclick function
}

var sideMenu = document.getElementById("sideMenu");

function openMenu(){
    sideMenu.style.right = "0";
}
function closeMenu(){
    sideMenu.style.right = "-200px";
}

// for google form
const scriptURL = 'https://script.google.com/macros/s/AKfycbzSLhpTENo5pP6Nl0S7wiX9Ce-tDDP1RnXaXFUsap_mPq9fDPO64zN4YOOx30o5ZCsS5g/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message Sent Succesfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)   //after 5000 ms the mesage will be made empty
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })