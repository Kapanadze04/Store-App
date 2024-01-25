function fetchData(productId) {
    fetch(`https://dummyjson.com/products/${productId}`)
        .then(res => res.json())
        .then(data => console.log(data))
}

// Only 5 products
for(let i = 1; i <= 5; i++) {
    fetchData(i)
}






