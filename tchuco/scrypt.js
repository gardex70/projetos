const checkbox = document.getElementsByClassName("myCheckbox");
const resetButton = document.getElementById("reset-btn");

for(let i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener("change",function() {
        localStorage.setItem("checkbox"+i, this.checked);
    });

    const checkboxState = localStorage.getItem("checkbox"+i);
    if(checkboxState === "true") {
        checkbox[i].checked = true;
    } else {
        checkbox[i].checked = false;
    }

}

resetButton.addEventListener("click", function() {
    for(let i = 0; i < checkbox.length; i++) {
        checkbox[i].checked = false;
        localStorage.setItem("checkbox"+i,checkbox[i].checked);
    }
})