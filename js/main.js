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
      
    // var elem = document.getElementById("projectContainer");
    // elem.scrollIntoView({behavior:"smooth", block:"center"});
