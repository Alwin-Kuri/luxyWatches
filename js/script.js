//slider for home page
let slideIndex = 1;
showSlides(slideIndex);

// Next/Previous Controls
function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Dot Controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Display Slides
function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Autoplay Slider
setInterval(() => {
    changeSlide(1);
}, 5000);

/*Slider for home page watch display*/
function moveSlide(section, direction) {
    const slider = document.getElementById(`${section}-slider`);
    const sliderWidth = slider.clientWidth;
    slider.scrollLeft += sliderWidth * direction;
}

//validation for review submit form
function validateReviewForm() {
    // Get form elements
    const reviewText = document.getElementById("reviewText").value.trim();
    const reviewName = document.getElementById("reviewName").value.trim();
    const errorMessage = document.getElementById("errorMessage");

    // Validate fields
    if (reviewText === "" || reviewName === "") {
        // Show error message if fields are empty
        errorMessage.style.display = "block";
        return false; // Prevent form submission
    }

    //alert message if submission is done
    if (reviewText != "" || reviewName != "") {
        // Show alert message
        alert(`Thank you for your response!`)
    }
        
    // Hide error message if all fields are valid
    errorMessage.style.display = "none";
    return true; // Allow form submission
}


// Search functionality
function performSearch() {
    const query = document.getElementById('search').value;
    alert(`Searching for: ${query}`);
}

// Add to cart functionality
function addTooCart(name, price) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push({ name, price });
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    // Update cart count
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cartItems.length;
    
    alert('Item added to cart!');
}

// Cart functionality with remove button
let cart = [];

function loadCartItems() {
    const cartTable = document.getElementById('cart-items');
    cartTable.innerHTML = ''; // Clear existing table

    cart.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td>$${item.price}</td>
            <td>${item.quantity}</td>
            <td>$${(item.price * item.quantity).toFixed(2)}</td>
            <td><button class="remove-btn" onclick="removeItem(${index})">Remove</button></td>
            `;
        cartTable.appendChild(row);
    });

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    document.getElementById('total-price').textContent = `$${totalPrice.toFixed(2)}`;
}

function removeItem(index) {
    cart.splice(index, 1);
    loadCartItems();
}

//payment popup when clicking buy now
const productButton = document.querySelector(".buyButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

//validation for payment form
function validatePurchaseForm() {
    // Get form elements
    const name = document.getElementById("nameInput").value.trim();
    const phone = document.getElementById("phoneInput").value.trim();
    const address = document.getElementById("addressInput").value.trim();
    const cardNumber = document.getElementById("cardNumberInput").value.trim();
    const month = document.getElementById("monthInput").value.trim();
    const year = document.getElementById("yearInput").value.trim();
    const cvv = document.getElementById("cvvInput").value.trim();

    // Check for empty fields
    if (!name || !phone || !address || !cardNumber || !month || !year || !cvv) {
        alert("All fields are required!");
        return false;
    }

    // Validate Name
    const nameInt = parseInt(name, 20)
    if (nameInt<=1){
        alert("Please enter a valid name");
        return true;
    }

    // Validate phone number
    if (phone < 10) {
        alert("Please enter a valid phone number!");
        return false;
    }

    // Validate card number
    if (cardNumber < 16) {
        alert("Please enter a valid 16-digit card number.");
        return false;
    }

    // Validate month (1-12)
    const monthInt = parseInt(month, 10);
    if (isNaN(monthInt) || monthInt < 1 || monthInt > 12) {
        alert("Please enter a valid month (01-12).");
        return false;
    }

    // Validate year (e.g., >= current year)
    const currentYear = new Date().getFullYear();
    const yearInt = parseInt(year, 10);
    if (isNaN(yearInt) || yearInt < currentYear) {
        alert("Please enter a valid year.");
        return false;
    }

    // Validate CVV (3 digits) learnt from youtube to make it exactly 3 digits
    const cvvRegex = /^\d{3}$/;
    if (!cvvRegex.test(cvv)) {
        alert("Please enter a valid 3-digit CVV.");
        return false;
    }

    // If everything is valid
    alert("Purchase confirmed!");
    return true; // Allow form submission
}

// Add to cart function
let cartCount = 0; // Track cart items

// Increase quantity function
const decreaseButton = document.querySelector('.decrease-quantity');
const increaseButton = document.querySelector('.increase-quantity');
const quantityInput = document.querySelector('.quantity-input');

decreaseButton.addEventListener('click', () => {
let currentValue = parseInt(quantityInput.value);
if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
}
});

increaseButton.addEventListener('click', () => {
let currentValue = parseInt(quantityInput.value);
quantityInput.value = currentValue + 1;
});
const thumbnails = document.querySelectorAll('.thumbnail-images img');
const mainImage = document.querySelector('.main-image');

thumbnails.forEach(thumbnail => {
thumbnail.addEventListener('click', () => {
    mainImage.src = thumbnail.src;
});
});

function addToCart() {
let quantity = parseInt(document.getElementById("quantity").value);
    cartCount += quantity;
    document.getElementById("cart-count").innerText = cartCount; // Update cart count
    alert(quantity + " item(s) added to cart!");
}

//Go back or Return back button function
function goBack() {
    window.history.back();
}
document.addEventListener('DOMContentLoaded', function() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cartItems.length;
});