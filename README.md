# Store App

- This is a simple web application that displays products on the home page. Users can click on the product to view more details in a modal. The application also allows users to delete a product, which will be temporarily stored in a deleted products box.

## JavaScript Functions

- `createProductSection(productId, data)` : Creates a product section with the provided data and appends it to the container.
- `handleReturnBtn(productId, section)` : Handles the return button in the modal, restoring the deleted product to the main container.
- `fetchData(productId)` : Fetches product data from a dummy API and initiates the creation of product sections.
- `initializeApp()` : Initializes the application by fetching and displaying product data.

### Live Server

- https://kapanadze04.github.io/Store-App/