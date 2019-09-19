function checkClass(str) {
    let regexp = /^[CAP]+[0-9]{4}([GHIKLM])/;
    if (regexp.test(str)) {
        console.log(str + ' This is the name of a class');
    }else {
        console.log(str+ 'This is not a class name');
    }
}