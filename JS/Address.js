class Address {

    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }

    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{3,}$');
        if (nameRegex.test(name))
            this._name = name;
        else
            throw new Error("Name is incorrect..Please Enter valid Name");
    }

    get phoneNumber() {
        return this._phoneNumber;
    }

    set phoneNumber(phoneNumber) {
        let phoneNumberRegex = RegExp("^[0-9]{2}?[\\s,-]{0,1}[7-9]{1}[0-9]{9}$");
        let phoneNumberRegex1 = RegExp("^[7-9]{1}[0-9]{9}$");
        if (phoneNumberRegex.test(phoneNumber)||(phoneNumberRegex1.test(phoneNumber))) {
            this._phoneNumber = phoneNumber;
        } else {
            throw new Error("Invalid Number");
        }
    }

    get address() {
        return this._address;
    }
    set address(address) {
        // let addressRegex = RegExp('^[a-zA-Z0-9#,/,&,$,%,@,$\\s]{4,}$');
        // if (addressRegex.test(address)) {
        this._address = address;
        // } else {
        //     throw new Error("Enter valid Address...");
        // }
    }

    get city() {
        return this._city;
    }
    set city(city) {
        this._city = city;
    }

    get state() {
        return this._state;
    }
    set state(state) {
        this._state = state;
    }

    get zip() {
        return this._zip;
    }
    set zip(zip) {
        let zipRegex = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");
        if (zipRegex.test(zip)) {
            this._zip = zip;
        } else {
            throw new Error("Enter 6 digit PinCode");
        }
    }

    toString() {
        return ("id= "+this._id+", name= "+this._name+", phoneNumber= "+this._phoneNumber+", address= "+this._address+", city= "+this._city+", state= "+this._state+
        ", zip= "+this._zip);
    }

}