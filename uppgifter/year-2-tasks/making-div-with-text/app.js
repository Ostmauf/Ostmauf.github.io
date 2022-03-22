const containerElement = document.getElementById("container");
const div1 = document.createElement("div");
const div2 = document.createElement("div");
const div3 = document.createElement("div");

containerElement.appendChild(div1);
containerElement.appendChild(div2);
containerElement.appendChild(div3);

div1.addEventListener("click", () => {
    if (div1.style.textDecoration == "line-through")  {
        div1.style.textDecoration = "none"
    } else {
        div1.style.textDecoration = "line-through";
    }
})
div2.addEventListener("click", () => {
    if (div2.style.textDecoration == "line-through")  {
        div2.style.textDecoration = "none"
    } else {
        div2.style.textDecoration = "line-through";
    }
})
div3.addEventListener("click", () => {
    if (div3.style.textDecoration == "line-through")  {
        div3.style.textDecoration = "none"
    } else {
        div3.style.textDecoration = "line-through";
    }
})

div1.innerHTML = "hej";
div2.innerHTML = "på";
div3.innerHTML = "dig";



