const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const messageInput = document.querySelector("#message");

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
    e.preventDefault();
    
    const body = {
      name: nameInput.value,
      message: messageInput.value
    };
  
    fetch('/message', {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });
  }