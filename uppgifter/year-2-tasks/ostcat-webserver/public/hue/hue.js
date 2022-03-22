const allOnbutton = document.querySelector("#all-lights-on-button");
const allOffbutton = document.querySelector("#all-lights-off-button");

allOnbutton.addEventListener("click", onAllOnbuttonClicked);

function onAllOnbuttonClicked() {
    let data = {on: true}
    fetch("https://10.0.0.2/api/XKrpQFm7LHyCljd6roSjdMJ-Rr1nLIKlQEz-6Pth/lights/9/state", {
        method: "put",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then((res) => res.json())
    .then(data => console.log(data));
}