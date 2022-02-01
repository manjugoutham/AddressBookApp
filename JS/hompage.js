let addressBookList;
window.addEventListener('DOMContentLoaded', (event) => {
    addressBookList = getPersonDataFromStorage();
    // console.log(addressBookList);
    // document.querySelector(".emp-count").textContent = addressBookList.length;
     createInnerHtml();
   // localStorage.removeItem('editEmp');
});

const getPersonDataFromStorage = () => {
    return localStorage.getItem("AddressBookData") ? JSON.parse(localStorage.getItem("AddressBookData")) : [];
}

const createInnerHtml = () => {
    const headerHtml = `<tr><th>FullName</th><th>Address</th><th>City</th><th>State</th><th>Zip Code</th><th>Phone number</th></tr>`;

    if (addressBookList.length != 0) {
        let innerHtml = `${headerHtml}`;
        for (const addressBookData of addressBookList) {
            innerHtml = `${innerHtml}
            <tr>
                <td>${addressBookData._name}</td>
                <td>${addressBookData._address}</td>
                <td>${addressBookData._city}</td>
                <td>${addressBookData._state}</td>
                <td>${addressBookData._zip}</td>
                <td>${addressBookData._phoneNumber}</td>
                <td>
                    <img id="1" src="/assets/icons/delete-black-18dp.svg" alt="delete" onclick="remove(this)">
                    <img id="1" src="/assets/icons/create-black-18dp.svg" alt="edit" onclick="update(this)">
                </td>
            </tr>
            `;
        }
        document.querySelector('#table-display').innerHTML = innerHtml;
    } else return;
}