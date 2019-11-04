const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const isFloat = (n) => {
    return Number(n) === n && n % 1 !== 0;
}

export { numberWithCommas, isFloat };

