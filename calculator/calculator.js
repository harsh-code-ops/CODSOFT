let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
    button.addEventListener('click',(e) => {
        if(e.target.value == "DE"){
           document.querySelector(".input").value = document.querySelector(".input").value.toString().slice(0,-1);
           string = document.querySelector(".input").value
        }
        else if(e.target.value == "AC"){
            document.querySelector(".input").value = "";
            string = " " 
        }
        else if (e.target.value == "=") {
            string = eval(string);
            document.querySelector(".input").value = string;
        }
        else
            {string = string + e.target.value;
                document.querySelector(".input").value = string;}
    })
})