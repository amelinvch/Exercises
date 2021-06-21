function defangIPaddr(address) {
    let array = address.split('.');
    var gog = array.join('[.]');
    console.log(gog);

}

defangIPaddr("1.1.1.1");