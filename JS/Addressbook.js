
// window.addEventListener('DOMContentLoaded', (event) => {

//     const name = document.querySelector('#name');
//     const textError =  document.querySelector('.text-error');
//     name.addEventListener('input', function() {
//         if (name.value.length == 0) {
//             textError.textContent = "";
//             return;
//         }
//         try {
//             (new Address()).name = name.value;;
//             textError.textContent = ""; 
//          } catch (e) {
//              textError.textContent = e;
//          }  
//      });
//     });

//     const phoneNumber = document.querySelector("#phoneNumber");
//     const numError =  document.querySelector('.tel-error');
//     phoneNumber.addEventListener("input", function() {
//         if (phoneNumber.value.length == 0) {
//             numError.textContent="";
//             return;
//         }
//         try {
//             (new Address()).phoneNumber = phoneNumber.value;;
//             numError.textContent = ""; 
//          } catch (e) {
//             numError.textContent = e;
//          }  
//      });

    //  const address = document.querySelector("#address");
    //  const addressError =  document.querySelector('.addres-error');
    //  phoneNumber.addEventListener("input", function() {
    //      if (address.value.length == 0) {
    //         addressError.textContent="";
    //          return;
    //      }
    //      try {
    //          (new Address()).address = address.value;;
    //          addressError.textContent = ""; 
    //       } catch (e) {
    //         addressError.textContent = e;
    //       }  
    //   });


    const save = () => {
        try {
            let addressBookPerson = createAddressBookPerson();
            saveToLocalStorage(addressBookPerson);
        } catch (error) {
            return;
        }
    }
    
    function saveToLocalStorage(addressBook) {
    
        let addressBookData = JSON.parse(localStorage.getItem("AddressBookData"));
    
        if (addressBookData != undefined) {
            addressBookData.push(addressBook);
        } else {
            addressBookData = [addressBook]
        }
    
        alert(addressBookData.toString());
        localStorage.setItem("AddressBookData", JSON.stringify(addressBookData));
    
    }

    const createAddressBookPerson = () => {
        let addressBook = new Address();
        addressBook._name = document.querySelector('#name').value;
        addressBook._phoneNumber = document.querySelector('#phoneNumber').value;
        addressBook._address = document.querySelector('#address').value;
        addressBook._zip = document.querySelector('#zip').value;
        addressBook._city = document.querySelector('#city').value;
        addressBook._state = document.querySelector('#state').value;
        alert(addressBook.toString());
        return addressBook;
    }

     
    

