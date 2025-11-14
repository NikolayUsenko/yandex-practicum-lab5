let button = document.querySelector(".button");

button.addEventListener("click", function()
{

    let input = document.querySelector(".input");
    let value = input.value.trim();

    if (value == "")
    {
        input.style.border = "2px solid red";
    }
    else
    {
        input.style.border = "2px solid green";
    }

});