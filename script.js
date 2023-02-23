function copyBillingAddress() {
    var name = document.getElementById("name");
    var mobile = document.getElementById("mobile");
    var street = document.getElementById("street");
    var postal = document.getElementById("postal");
    var city = document.getElementById("city");
    var country = document.getElementById("country");

    var bname = document.getElementById("bname");
    var bmobile = document.getElementById("bmobile");
    var bstreet = document.getElementById("bstreet");
    var bpostal = document.getElementById("bpostal");
    var bcity = document.getElementById("bcity");
    var bcountry = document.getElementById("bcountry");
    var check = document.getElementById("check");

    console.log(name);


    if (check.checked == true) {
        bname.value = name.value;
        bmobile.value = mobile.value;
        bstreet.value = street.value;
        bpostal.value = postal.value;
        bcity.value = city.value;
        bcountry.value = country.value;

    }
    else {
        bname.value = "";
        bmobile.value = "";
        bstreet.value = "";
        bpostal.value = "";
        bcity.value = "";
        bcountry.value = "";
    }

}

function validateaddress() {
    var name =
        document.forms.address.name.value;
    var mobile =
        document.forms.address.mobile.value;
    var street =
        document.forms.address.address.value;
    var postal =
        document.forms.address.postal.value;
    var city = document.forms.address.city.value;
    var country = document.forms.address.country.value;

    var regName = /^[A-Za-z ]+$/;
    var regnum = /^[0-9]*$/;
    var letters = /^[A-Za-z]+$/;

    if (!regName.test(name)) {
        window.alert("Please enter your name properly.");
        return false;
    }
    if (mobile.length != 10 || !regnum.test(mobile)) {
        window.alert("Mobile Number Incorrect")
        return false;
    }
    if (postal.length != 6 || !regnum.test(postal)) {
        window.alert("Postal Code Incorrect")
        return false;
    }
    if (!letters.test(country)) {
        window.alert("Country Incorrect")
        return false;

    }

    if (!letters.test(city)) {
        window.alert("City Incorrect")
        return false;

    }

    var bname =
        document.forms.address.bname.value;
    var bmobile =
        document.forms.address.bmobile.value;
    var bstreet =
        document.forms.address.baddress.value;
    var bpostal =
        document.forms.address.bpostal.value;
    var bcity = document.forms.address.bcity.value;
    var bcountry = document.forms.address.bcountry.value;

    if (!regName.test(bname)) {
        window.alert("Please enter your name properly.");
        return false;
    }
    if (bmobile.length != 10 || !regnum.test(bmobile)) {
        window.alert("Mobile Number Incorrect")
        return false;
    }
    if (bpostal.length != 6 || !regnum.test(bpostal)) {
        window.alert("Postal Code Incorrect")
        return false;
    }
    if (!letters.test(bcountry)) {
        window.alert("Country Incorrect")
        return false;

    }

    if (!letters.test(bcity)) {
        window.alert("City Incorrect")
        return false;

    }

    window.alert("Order Placed")
    return true;
}