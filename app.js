function fetchData(productId) {
    fetch(`https://dummyjson.com/products/${productId}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById("container").innerHTML += `
                <section>
                    <img src = "${data.thumbnail}" />
                    <span>${data.title}</span>
                </section>
                
            `
        })
}

// Only 5 products
for(let i = 1; i <= 5; i++) {
    fetchData(i)
}


