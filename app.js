const modalBox = document.getElementById("modal-box")
const modal = document.getElementById("modal")
const mainPage = document.getElementById("main-Page")


function fetchData(productId) {
    fetch(`https://dummyjson.com/products/${productId}`)
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById("container")
            const section = document.createElement('section')

            section.innerHTML = `
                <img src = "${data.thumbnail}" />
                <span>${data.title}</span>
            `;

            section.id = `productSection${productId}`
            container.appendChild(section)

            section.addEventListener("click", function() {
                // console.log(`section ${productId} clicked!`)
                modalBox.style.display = "flex"
                mainPage.style.backgroundColor = "#e5e5e5"

                modal.innerHTML = `
                    <img src = "${data.thumbnail}" />
                    <ul>
                        <li>${data.description}</li>
                        <hr>
                        <li>Brand: ${data.brand}</li>
                        <li>Category: ${data.category}</li>
                        <li>Price: ${data.price}</li>
                        <li>Discount: ${data.discountPercentage}</li>
                        <li>Rating: ${data.rating}</li>
                        <li>Stock: ${data.stock}</li>
                    </ul>
                    <button>დახურვა</button>
                    <button>წაშლა</button>
                `
                
            })
        })
}

// Only 5 products
for(let i = 1; i <= 5; i++) {
    fetchData(i)
}


