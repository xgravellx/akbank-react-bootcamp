function faktoriyel(num) {
    if (num > 1) {
        return num * faktoriyel(num-1);
    }
    else if (num == 1) {
        return 1
    }
    else {
        return undefined;
    }
}
console.log(faktoriyel(5));