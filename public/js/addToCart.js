//ADD to Cart
const addToCart = (productId) => {
    fetch('/api/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ product_id: productId })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data.message);
        alert(`Added 1 item to cart`);
    })
    .catch(error => console.error('Error adding to cart:', error));
};