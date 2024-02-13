
const inputName = document.getElementById("customer-name");
const inputId = document.getElementById("customer-id");
const createButton = document.getElementById("create-customer-btn");
const searchButton = document.getElementById("customer-search");
const cardList = document.getElementById("card-container");

// searchButton.addEventListener("click", () => {
//     const customerId = document.getElementById("customer-id")
// })
document.getElementById('openFormButton').addEventListener('click', function() {
    document.getElementById('modalBackdrop').style.display = 'block';
    document.getElementById('formContainer').style.display = 'block'; 
});

document.getElementById('closeFormButton').addEventListener('click', function() {
    document.getElementById('modalBackdrop').style.display = 'none'; 
    document.getElementById('formContainer').style.display = 'none'; 
});

document.getElementById('idForm').addEventListener('submit', async function(event) {
    event.preventDefault()
    const id = document.getElementById('idInput').value; 
    let result = document.getElementById('result');

    const response = await fetch("http://localhost:3000/customers/" + id)
    const items = await response.json();
    console.log(items.customer)
    if (items.customer !== null) {
        console.log("Success")
        result = document.getElementById('result');
        result.style.color = "green";
        result.textContent = 'Valid';
    } else {
        result = document.getElementById('result');
        result.style.color = "red";
        result.textContent = 'Not Valid';
    }

    // setTimeout(() => {
        
    // document.getElementById('modalBackdrop').style.display = 'none'; 
    // document.getElementById('formContainer').style.display = 'none';
    // document.getElementById('idInput').value = '';
    // result.textContent = "";
    //   }, 2000);
});

createButton.addEventListener("click", async () => {
    const name = inputName.value;

    try {
        const response = await fetch("http://localhost:3000/customers", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: name })
        });

        if (!response.ok) {
            throw new Error('Failed to create customer');
        }

        console.log("Customer created successfully");
        // Clear the input field after successful creation
        inputName.value = "";
        // Update the customer list
        await getAllCustomers();
    } catch (err) {
        console.error("Error creating customer:", err);
    }
});

async function getCustomer(){
    const response = await fetch("")
}

async function getAllCustomers() {

    const response = await fetch("http://localhost:3000/customers")
    const items = await response.json();

    cardList.innerHTML = '';

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

getAllCustomers();