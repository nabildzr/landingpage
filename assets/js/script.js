const collegeButton = document.querySelector(".college-btn");
const collegeContent = document.querySelector(".dropdown-content-big");
const divisionButton = document.querySelector(".division-btn");
const divisionContent = document.querySelector(".dp-2");

const caretCollege = document.querySelector(".caret-college");
const caretDivision = document.querySelector(".caret-division");

const collegeText = document.querySelector(".college-btn");
const divisionText = document.querySelector(".division-btn");

let lastClickedButton = null;

function resetButtonStyle(button, text, caret) {
    button.style.backgroundColor = "var(--dark-p)";
    text.style.color = "var(--fourth)";
    caret.style.color = "white";
}

function toggleDropdown(content) {
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

collegeButton.addEventListener("click", (event) => {
    event.stopPropagation();

    if (lastClickedButton && lastClickedButton !== collegeButton) {
        resetButtonStyle(divisionButton, divisionText, caretDivision);
    }

    toggleDropdown(collegeContent);
    collegeText.style.color = "black";
    collegeButton.style.backgroundColor = "var(--white)";
    caretCollege.style.color = "black";
    divisionContent.style.display = "none";

    lastClickedButton = collegeButton;
});

divisionButton.addEventListener("click", (event) => {
    event.stopPropagation();

    if (lastClickedButton && lastClickedButton !== divisionButton) {
        resetButtonStyle(collegeButton, collegeText, caretCollege);
    }

    toggleDropdown(divisionContent);
    divisionText.style.color = "black";
    divisionButton.style.backgroundColor = "var(--white)";
    caretDivision.style.color = "black";
    collegeContent.style.display = "none";

    lastClickedButton = divisionButton;
});

document.addEventListener("click", (event) => {
    if (!collegeContent.contains(event.target) && !divisionContent.contains(event.target)) {
        collegeContent.style.display = "none";
        divisionContent.style.display = "none";
        if (lastClickedButton) {
            if (lastClickedButton === collegeButton) {
                resetButtonStyle(collegeButton, collegeText, caretCollege);
            } else if (lastClickedButton === divisionButton) {
                resetButtonStyle(divisionButton, divisionText, caretDivision);
            }
            lastClickedButton = null;
        }
    }
});

collegeContent.addEventListener("click", (event) => {
    event.stopPropagation();
});

divisionContent.addEventListener("click", (event) => {
    event.stopPropagation();
});

const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".logo");
const rightElements = document.querySelectorAll(".nav-cant-top");
const bottomElements = document.querySelectorAll(".nav-cant-bottom");
const inputElements = document.querySelectorAll(".nav-cont-container");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 20) {
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed");
    }

    if (window.scrollY > 0) {
        logo.classList.add("hidden");
        navbar.style.padding = "0";
        navbar.style.paddingTop = "10px";

        rightElements.forEach(element => {
            element.classList.add("hidden");
        });

        // add absolute for centering the btn contentx
        bottomElements.forEach(element => {
            element.classList.add("nav-bottom-absolute");
        });

    } else {
        logo.classList.remove("hidden");
        navbar.style.padding = "25px";

        rightElements.forEach(element => {
            element.classList.remove("hidden");
        });

        // remove absolute effect
        bottomElements.forEach(element => {
            element.classList.remove("nav-bottom-absolute");
        });

    }
});

const barDrop = document.querySelectorAll(".bar-drop-container");
const barBtn = document.querySelector(".bar-after-bar-container");
const faBars = document.querySelector(".fa-bars");
const collegeTable = document.querySelector(".dropdown-content-big")

// with visible

function toggleVisible(content) {
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

barBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    barDrop.forEach((drop) => {
        toggleVisible(drop);
    });

    lastClickedButton = barBtn;
});

document.addEventListener("click", (event) => {
    if (![...barDrop].some(drop => drop.contains(event.target))) {
        barDrop.forEach((drop) => {
            drop.style.display = "none";
        });

        if (lastClickedButton) {
            if (lastClickedButton === barBtn) {
                // reset place
            }
            lastClickedButton = null;
        }
    }
});


barDrop.forEach((drop) => {
    drop.addEventListener("click", (event) => {
        event.stopPropagation();
    });
});

window.addEventListener("scroll", (event) => {
    if (window.scrollY > 300) {
        collegeTable.style.display = "none";
    }
})