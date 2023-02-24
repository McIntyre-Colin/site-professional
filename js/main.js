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