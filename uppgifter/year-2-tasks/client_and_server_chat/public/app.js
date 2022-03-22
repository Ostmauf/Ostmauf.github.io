const usrText = document.querySelector("#user-text");
const sendButn = document.querySelector("#send-button");
const serverTextHolder = document.querySelector("#server-conformation-text-holder");

sendButn.addEventListener("click", async ()=>{
    data = {text: usrText.value}
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    };

    response = await fetch("/chat", options);
    const json = await response.json();
    
    serverTextHolder.textContent = json.status;
})