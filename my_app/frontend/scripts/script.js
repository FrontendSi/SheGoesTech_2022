const customerIds =[];


fetchSetCustomer = () => {
    $.getJSON("http://localhost:5000/get-allCustomers",
    function(data){ 
        
        const customers = data.response.customers;
        const customersTabElement = $("#customersTab");
        for(let i = 0; i < customers.length; i++) {
            const customer = customers[i];

            const row = document.createElement("tr");

            const id = document.createElement("td");
            id.innerHTML = customer.id;
            row.append(id);
            customerIds.push(customer.id);

            const firstName = document.createElement("td");
            firstName.innerHTML = customer.firstname;
            row.append(firstName);

            const lastName = document.createElement("td");
            lastName.innerHTML = customer.lastname;
            row.append(lastName);

            const email = document.createElement("td");
            email.innerHTML = customer.email;
            row.append(email);

            const phone = document.createElement("td");
            phone.innerHTML = customer.phone;
            row.append(phone);

            const vip = document.createElement("td");
            vip.innerHTML = Number(customer.vip) == 1 ? 'Yes' : 'No';
            row.append(vip);

            customersTabElement.append(row);
        }

    }).fail(() => {
        console.clear();
        setTimeout(
        fetchSetCustomer(), 5000);
    })
};


$(fetchSetCustomer());


// ----- OPTION 1 ---
// idValid = () => {
//     const deleteIdElement = document.getElementById("deletedId");
//     const valueEntered = Number(deleteIdElement.value);
//     const isValid = customerIds.find((id) => {
//         return id === valueEntered;
//     }) !== undefined;
//     if(isValid)
//         deleteIdElement.setCustomValidity("");
//     else
//         deleteIdElement.setCustomValidity("ID does not exist");
// }

// ----- OPTION 2 with event listener ---


// idValid = (event) => {
//     const deleteIdElement = event.target;
//     const valueEntered = Number(deleteIdElement.value);
//     const isValid = customerIds.find((id) => {
//         return id === valueEntered;
//     }) !== undefined;
//     if(isValid)
//         deleteIdElement.setCustomValidity("");
//     else
//         deleteIdElement.setCustomValidity("ID does not exist");
// }


// ----- OPTION 3 with  add event listener ---


$(document.addEventListener("input", (event) =>{
    idValid(event);
}))

idValid = (event) => {
    const deleteIdElement = event.target;
    const valueEntered = Number(deleteIdElement.value);
    const isValid = customerIds.find((id) => {
        return id === valueEntered;
    }) !== undefined;
    if(isValid)
        deleteIdElement.setCustomValidity("");
    else
        deleteIdElement.setCustomValidity("ID does not exist");
}

