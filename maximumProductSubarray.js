function maximumProductSubarray(array) {
    let max_product = Number.MIN_SAFE_INTEGER;
    let max_prod_here = 0;
    array.forEach((element, i) => {
        console.log(max_prod_here, max_product)
        max_prod_here = max_prod_here * element
        console.log(max_prod_here)
        if(max_prod_here<element) max_prod_here = element
        if(max_product<max_prod_here) max_product = max_prod_here
    });
    return max_product
}