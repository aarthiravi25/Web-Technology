// Dessert items for each category
const dessertOptions = {
    "Ice Cream": ["Vanilla", "Chocolate", "Strawberry", "Butterscotch"],
    "Ice Cream Cakes": ["Chocolate Cake", "Vanilla Cake", "Rainbow Cake"],
    "Faluda": ["Royal Faluda", "Rose Faluda", "Mango Faluda", "Chocolate Faluda"],
    "Sundae": ["Hot Chocolate Sundae", "Brownie Sundae", "Caramel Sundae"],
    "Cassata": ["Classic Cassata", "Fruit Cassata"],
    "Fruit Ice Cream": ["Mango", "Lychee", "Pineapple", "Strawberry"],
    "Soda": ["Orange Soda", "Mint Soda", "Lemon Soda"],
    "Ice Cream Shake": ["Chocolate Shake", "Vanilla Shake", "Oreo Shake"],
    "Kulfi": ["Malai Kulfi", "Pista Kulfi", "Mango Kulfi"]
};

// Update items dropdown based on category
function updateItems() {
    const category = document.getElementById("category").value;
    const itemDropdown = document.getElementById("item");
    itemDropdown.innerHTML = '<option value="">-- Select Item --</option>';

    if (category && dessertOptions[category]) {
        dessertOptions[category].forEach(item => {
            const option = document.createElement("option");
            option.value = item;
            option.textContent = item;
            itemDropdown.appendChild(option);
        });
    }
}

// Form validation
function validateForm() {
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let quantity = document.getElementById('quantity').value;
    let address = document.getElementById('address').value.trim();
    let paymentProof = document.getElementById('paymentProof').value;
    let terms = document.getElementById('terms').checked;

    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Enter a valid email address.");
        return false;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        alert("Enter a valid 10-digit phone number.");
        return false;
    }

    if (quantity < 1 || quantity > 10) {
        alert("Quantity must be between 1 and 10.");
        return false;
    }

    if (address.length < 10) {
        alert("Please enter a complete address.");
        return false;
    }

    if (paymentProof === "") {
        alert("Please upload your payment proof.");
        return false;
    }

    if (!terms) {
        alert("You must agree to the terms and conditions.");
        return false;
    }

    alert("Your order has been placed successfully!");
    return true;
}
