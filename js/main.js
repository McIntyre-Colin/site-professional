// JS for personal site

//Changes the active class in the navbar
function active_class_changer() {
    let btnContainer = document.getElementById('btnContainer');
    let btns = btnContainer.getElementsByClassName('Nav-tab');
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        // If there's no active class
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        // Add the active class to the current/clicked button
        this.className += " active";
        });
    }
}

// Function to scroll page down to the projects
    const scrollIntoViewWithOffset = (id, offset) => {
        window.scrollTo({
          behavior: 'smooth',
          top:
            document.getElementById(id).getBoundingClientRect().top -
            document.body.getBoundingClientRect().top -
            offset,
        })
      }
      
function showNotification() {
    var showDiv = document.getElementById('copied')
    showDiv.style.display = "block"
    
}

// Function to copy text specifically for the email

function copyText() {
    var copiedDiv = document.getElementById('email');
    var content = copiedDiv.innerText;
    navigator.clipboard.writeText
        (content);
    
}

//Function to delete annoying popup elements from KwesForms
// Redundent for css override
function err () {
    const err = document.querySelector(".kw-alert")
    console.log('the error is: ', err)
    err.style.display = 'none';
}

// Tab to circumvent the free version of kwesforms opening a form submission window
function openWindow() {
    sessionStorage.setItem("reloading", "true");
    setTimeout(function () {
        console.log('waiting')
        // window.open("Contact.html")
        window.location.href = "Contact.html"; //will redirect to your blog page (an ex: blog.html)
     }, 100); //will call the function after 2 secs.
     
}

window.onload = function() {
    const submitDropdown = document.querySelector(".submit-dropdown")
    const submitToggle = document.querySelector(".toggle-submit-dropdown");
    var reloading = sessionStorage.getItem("reloading");
    if (reloading) {
        sessionStorage.removeItem("reloading");
        var submital = document.getElementById("formSubmitted");
        submitDropdown.classList.toggle("submit-expanded");
        // setTimeout(() => {dropdown.classList.toggle("submit-expanded")}, 5000);
        // requestAnimationFrame(fadeOutForm);
    }
}

//Function for fun 'copied' animation on about page

const dropdown = document.querySelector(".dropdown");
const toggle = document.querySelector(".toggle-dropdown");

toggle.addEventListener("click", () => {
  var div = document.getElementById("copied");
  dropdown.classList.toggle("expanded");
  setTimeout(() => {dropdown.classList.toggle("expanded")}, 3000);
  requestAnimationFrame(fadeOut);
});

var opacity = 100;
function fadeOut() {
    var div = document.getElementById("copied");
    opacity--;
    div.style.opacity = opacity/100;
    if (opacity > 0){
        requestAnimationFrame(fadeOut);
    } else if (opacity < 0) {
        opacity = 100;
        requestAnimationFrame(fadeOut)
    }
    }

var opacity = 100;
function fadeOutForm() {
        var div = document.getElementById("formSubmitted");
        opacity--;
        div.style.opacity = opacity/100;
        if (opacity > 0){
            requestAnimationFrame(fadeOutForm);
        } else if (opacity < 0) {
            opacity = 100;
            requestAnimationFrame(fadeOutForm)
        }
        }





