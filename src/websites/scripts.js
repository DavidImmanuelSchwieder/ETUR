const inputName = document.getElementById("customer-name");
const inputId = document.getElementById("customer-id");
const createButton = document.getElementById("create-customer-btn");

createButton.addEventListener("click", () => {
    const name =  inputName.value;
    
    try{
        fetch("http://localhost:3000/customers", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({name: name})
        } )
        inputName.value = "";
        console.log("success");
    }
    catch(err)
    {
        console.log(err)
    }



  });

function success(){

    if(document.getElementById("customer-name").value==="") { 
        document.getElementById('create-customer-btn').disabled = true; 
    } else { 
        document.getElementById('create-customer-btn').disabled = false;
    }

}