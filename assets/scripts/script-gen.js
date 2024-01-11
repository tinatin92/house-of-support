let affectedElements = document.querySelectorAll('*');
let changedColor = "";
let changedWord = "";
let textStyle = "";
let defFontSize = 0;
let hexWhite = "#fff";
let hexYellow = "#ff0";
let hexGreen = "#0f0";

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('show-gen-box-0100').addEventListener('click', function () { 
        var parentElement = this.parentElement; 
        if (!parentElement.classList.contains('active-0100')) {
            parentElement.classList.add('active-0100');
        } else {
            parentElement.classList.remove('active-0100');
        }
    });

    const changeFontStyle = arg => {
        const currentLang = document.querySelector("html").getAttribute("lang");
    
        if (currentLang === "ka") {
            if (arg === "uppercase") {
                affectedElements.forEach(function(element) {
                    if (!element.classList.contains("fixed-style-item0100")) {
                        element.classList.remove("lowerCaseGeoFont");
                        element.classList.add("uppercaseGeoFont");
                    }
                });
            } else if (arg === "lowercase") {
                affectedElements.forEach(function(element) {
                    if (!element.classList.contains("fixed-style-item0100")) {
                        element.classList.remove("uppercaseGeoFont");
                        element.classList.add("lowerCaseGeoFont");
                    }
                });
            }
        } else if (currentLang === "en") {
            if (arg === "uppercase") {
                affectedElements.forEach(function(element) {
                    if (!element.classList.contains("fixed-style-item0100")) {
                        element.classList.remove("lowerCaseEngFont");
                        element.classList.add("uppercaseEngFont");
                    }
                });
            } else if (arg === "lowercase") {
                affectedElements.forEach(function(element) {
                    if (!element.classList.contains("fixed-style-item0100")) {
                        element.classList.remove("uppercaseEngFont");
                        element.classList.add("lowerCaseEngFont");
                    }
                });
            }
        }
    
        textStyle = arg;
    };

    const checkFontSize = arg => {
        let data = localStorage.getItem("additionalSettings");
        data = JSON.parse(data);
        data.fontSize += arg;
        localStorage.setItem("additionalSettings", JSON.stringify(data));
    };

    const checkChanges = () => {
        const additionalSettings = localStorage.getItem("additionalSettings");  
        if (additionalSettings) {
            const data = JSON.parse(additionalSettings);
             

            if (data.color) {
                changeTextColor(data.color, data.word);
            }

            if (data.textTransform) {
                changeFontStyle(data.textTransform);
            }
        } else {
            const values = {
                color: changedColor,
                word: changedWord,
                textTransform: textStyle,
                fontSize: defFontSize
            };
            localStorage.setItem("additionalSettings", JSON.stringify(values));
        }
    };
    const updateColorLs = (color, word) => {
        let data = localStorage.getItem("additionalSettings");
        data = JSON.parse(data);
        data.color = color;
        data.word = word;
        localStorage.setItem("additionalSettings", JSON.stringify(data));
    };
    
    const updateTextTransform = (transform = "") => { 
        let data = localStorage.getItem("additionalSettings"); 
        data = JSON.parse(data); 
        data.textTransform = transform; 
        localStorage.setItem("additionalSettings", JSON.stringify(data)); 
      };

      const restoreLocalStorage = () => {
        let data = localStorage.getItem("additionalSettings");
        data = JSON.parse(data);  
        data.color = "";
        data.word = "";
        data.textTransform = "";
        data.fontSize = 0; 
    
        localStorage.setItem("additionalSettings", JSON.stringify(data)); 
        window.location.reload();
    };

    function changeTextColor(color, word) {
        affectedElements.forEach(function (element) {
            if (!element.classList.contains("fixed-style-item0110")) {
                element.classList.remove("white", "yellow", "green");
                element.classList.add("colorChanged", word);
                element.classList.add("backgroundColorBlack");
            }
    
            if (element.getAttribute("placeholder")) {
                element.className = ""; // Clear all existing classes
                element.classList.add("colorChanged", word);
            }
        });
    }
 
 
    const changeFontSize = size => {
        affectedElements.forEach(element => {
            let currentFontSize = window.getComputedStyle(element).fontSize; 
            currentFontSize = parseFloat(currentFontSize);
            element.style.fontSize = `${currentFontSize + size}px`;
        });
    };

    let data = localStorage.getItem("additionalSettings");
    data = JSON.parse(data);

    if (data) {
        changeFontSize(data.fontSize);
    }

    checkChanges();
    

    document.getElementById('plus-0100').addEventListener('click', function () {
        changeFontSize(1);
        checkFontSize(1);
    });

    document.getElementById('minus-0100').addEventListener('click', function () {
        changeFontSize(-1);
        checkFontSize(-1);
    });

       // Text color change functions

       document.getElementById('white-gen-0100').addEventListener('click', function () {  
        changeTextColor(hexWhite, 'white');
        changedColor = hexWhite;
        changedWord = 'white';
        updateColorLs(hexWhite, 'white');
        checkChanges();
    });
    
    document.getElementById('green-gen-0100').addEventListener('click', function () {
        changeTextColor(hexGreen, 'green');
        changedColor = hexGreen;
        changedWord = 'green';
        updateColorLs(hexGreen, 'green');
        checkChanges();
    });
    
    document.getElementById('yelllow-gen-0100').addEventListener('click', function () {
        changeTextColor(hexYellow, 'yellow');
        changedColor = hexYellow;
        changedWord = 'yellow';
        updateColorLs(hexYellow, 'yellow');
        checkChanges();
    });

    document.getElementById("uppercase-gen-0100").addEventListener("click", function() { 
        updateTextTransform("uppercase");
        changeFontStyle("uppercase");
        checkChanges();
    });
    
    document.getElementById("lowercase-gen-0100").addEventListener("click", function() { 
        updateTextTransform("lowercase");
        changeFontStyle("lowercase");
        checkChanges();
    }); 
  


    // reload localstorage
    document.getElementById('reset-gen-0100').addEventListener('click', function () {
        affectedElements.forEach(element => {
            if (element.getAttribute('placeholder')) {
                element.classList.remove();
            }
    
            element.style.fontSize = element.dataset.origSizeDefault;
            element.dataset.origSize = element.dataset.origSizeDefault;
    
            element.classList.remove(
                'uppercaseGeoFont', 'lowerCaseGeoFont', 'uppercaseEngFont', 'lowerCaseGeoFont'
            );
    
            element.classList.remove('colorChanged', 'backgroundColorBlack');
    
            restoreLocalStorage();
        }); 
    });
});



 
