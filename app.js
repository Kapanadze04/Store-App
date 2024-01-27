const modalBox = document.getElementById("modal-box")
const modal = document.getElementById("modal")
const mainPage = document.getElementById("main-Page")
const deletedBox = document.getElementById("deleted-box")
const deletedProductsTitle = document.getElementById("deleted-products-title")
const returnBtn = document.getElementById("returnBtn")
const container = document.getElementById("container")


// Function to create a product section
function createProductSection(productId, data) {
    const section = document.createElement("section")
    section.innerHTML = `
        <img src = "${data.thumbnail}" />
        <span>${data.title}</span>
    `
    section.id = `productSection${productId}`
    container.appendChild(section)
    return section
};


// Function to handle the return button
function handleReturnBtn(productId, section) {
    returnBtn.addEventListener("click", function() {
        section.id = `productSection${productId}`
        container.appendChild(section)
        deletedBox.style.display = ""
        deletedProductsTitle.textContent = ""
    }
)};


// Function to fetch data for a product
function fetchData(productId) {
    fetch(`https://dummyjson.com/products/${productId}`)
        .then(res => res.json())
        .then(data => {
            
            const section = createProductSection(productId, data)

            section.addEventListener("click", function() {
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
                    
                    <button id="closeBtn">დახურვა</button>
                    <button id="deleteBtn">წაშლა</button>
                `;

                const closeBtn = document.getElementById("closeBtn")
                const deleteBtn = document.getElementById("deleteBtn")

                closeBtn.addEventListener("click", function() {
                    modalBox.style.display = "none";
                    mainPage.style.backgroundColor = "";
                })
                
                deleteBtn.addEventListener("click", function() {
                    const sectionToRemove = document.getElementById(`productSection${productId}`)
                    container.removeChild(sectionToRemove);
                    mainPage.style.backgroundColor = ""
                    modalBox.style.display = "none"
                    deletedBox.style.display = "flex"
                    deletedProductsTitle.textContent += `${data.title + ", "}`
                    modal.innerHTML = ""
                });
                
                handleReturnBtn(productId, section)
            });
        })
    };
    
    // Function to initialize the app
    function initializeApp() {
        for(let i = 1; i <= 5; i++) {
            fetchData(i)
        }
    }

    initializeApp();


