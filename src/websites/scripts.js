const inputName = document.getElementById("customer-name");
const inputId = document.getElementById("customer-id");
const createButton = document.getElementById("create-customer-btn");
const searchButton = document.getElementById("customer-search");
const cardList = document.getElementById("card-container");

createButton.addEventListener("click", () => {
    const name = inputName.value;

    try {
        fetch("http://localhost:3000/customers", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: name })
        })
        inputName.value = "";
        console.log("success");
    }
    catch (err) {
        console.log(err)
    }
});

async function getAllCustomer() {

    const response = await fetch("http://localhost:3000/customers")
    const items = await response.json();
    for(const item of items.customers){
        createCardItem(item.name, item.customerId);
    }
}

function createCardItem(name, id){
    const cardItem = document.createElement("div");
    cardItem.classList.add("card");
    cardItem.innerHTML = `
    <h3>Name: ${name}</h3>
    <h3>Kundennummer: ${id}</h3>

    `;
   cardList.appendChild(cardItem);
}


function success() {

    if (document.getElementById("customer-name").value === "") {
        document.getElementById('create-customer-btn').disabled = true;
    } else {
        document.getElementById('create-customer-btn').disabled = false;
    }

}

getAllCustomer();