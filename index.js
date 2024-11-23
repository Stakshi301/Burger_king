async function getMenu() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json');
        const menuItems = await response.json();
        
        const menuContainer = document.getElementById('menu-container'); // Ensure you have a div with this ID
        menuItems.forEach(item => {
            const itemCard = `
                <div class="menu-item">
                    <h3>${item.name}</h3>
                    <p>Price: $${item.price}</p>
                    <img src="${item.imgSrc}" alt="${item.name}" />
                </div>
            `;
            menuContainer.innerHTML += itemCard;
        });
    } catch (error) {
        console.error("Error fetching menu:", error);
    }
}

window.onload = getMenu;

function TakeOrder() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const burgers = ["Cheeseburger", "Veggie Burger", "Chicken Burger", "Fish Burger", "BBQ Burger"];
            const randomBurgers = [];
            while (randomBurgers.length < 3) {
                const randomBurger = burgers[Math.floor(Math.random() * burgers.length)];
                if (!randomBurgers.includes(randomBurger)) {
                    randomBurgers.push(randomBurger);
                }
            }
            resolve({ order: randomBurgers });
        }, 2500);
    });
}

function orderPrep() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ order_status: true, paid: false });
        }, 1500);
    });
}

function payOrder() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ order_status: true, paid: true });
        }, 1000);
    });
}

function thankyouFnc() {
    alert("Thank you for eating with us today!");
}

getMenu(); // Load menu on screen load

TakeOrder()
    .then(order => {
        console.log("Order Placed:", order);
        return orderPrep();
    })
    .then(preparation => {
        console.log("Order Preparation Status:", preparation);
        return payOrder();
    })
    .then(payment => {
        console.log("Payment Status:", payment);
        if (payment.paid) {
            thankyouFnc();
        }
    })
    .catch(error => {
        console.error("An error occurred:", error);
    });

async function getMenu() {
    try {
        const response = await fetch('...');
        // Logic for fetching and displaying menu
    } catch (error) {
        console.error("Failed to load menu:", error);
        alert("Failed to load menu. Please try again later.");
    }
}