const postElement = document.createElement("div");
const postMediaElement = document.createElement("div");
const aElement = document.createElement("a");
const iElement = document.createElement("i");
const spanElement = document.createElement("span");
const postContentElement = document.createElement("div");

const date = new Date();

let timeNow = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} `

document.body.append(createPostElement("sebbe", "ost", "Thebest", timeNow, "Jag gillar ost!"));
document.body.append(createPostElement("sebbe", "ost", "Thebest", timeNow, "Jag gillar ost!"));


function createPostElement(firstname, lastname, username, date, content) {

    document.body.appendChild(postElement)
    postElement.appendChild(postMediaElement);
    postMediaElement.appendChild(aElement);
    aElement.appendChild(iElement);
    postMediaElement.appendChild(spanElement);
    postElement.appendChild(postContentElement);

    postElement.setAttribute("class", "post");
    postMediaElement.setAttribute("class", "post-media");
    aElement.setAttribute("href", "#")
    postContentElement.setAttribute("class", "post-content");

    aElement.append(`${firstname} ${lastname} `, iElement);
    iElement.append("@" + username);
    spanElement.append(date);
    postContentElement.append(content);
}






//postElement.style.height = 50px
/*

if (typeof(elementCount) === "undefined") {
    let elementCount = 1; 
}

elementCount += 1;

console.log(elementCount);

elementCount = document.createElement("div");
document.body.append(elementCount);

elementCount.setAttribute("class", elementCount);

console.log(elementCount);

*/