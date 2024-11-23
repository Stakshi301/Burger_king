// async function getMenu() {
//     try {
//         const response = await fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json');
//         const menuItems = await response.json();

//         console.log("Fetched Menu:", menuItems); // Debug fetched data

//         const menuContainer = document.querySelector('.card');
//         if (!menuContainer) {
//             console.error("Error: Element with class 'card' not found in the DOM.");
//             return;
//         }

//         // Clear any existing content
//         menuContainer.innerHTML = '';

//         // Append new dynamic content
//         menuItems.forEach(item => {
//             const itemCard = `
//                 <div class="item_card" id=${item.id}>
//                     <img src="${item.imgSrc}" alt="${item.name}" class="item_img">
//                     <div class="card_details">
//                         <div class="card_content">
//                             <p class="item_desc">${item.name}</p>
//                             <p class="item_price">Price: $${item.price}</p>
//                         </div>
//                         <div>
//                             <img src="Group 3.png" alt="Add item" class="plus">
//                         </div>
//                     </div>              
//                 </div>
//             `;
//             menuContainer.insertAdjacentHTML('beforeend', itemCard);
//         });
//     } catch (error) {
//         console.error("Failed to load menu:", error);
//         alert("Failed to load menu. Please try again later.");
//     }
// }

// window.onload = getMenu;

// function TakeOrder() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const burgers = ["Cheeseburger", "Veggie Burger", "Chicken Burger", "Fish Burger", "BBQ Burger"];
//             const randomBurgers = [];
//             while (randomBurgers.length < 3) {
//                 const randomBurger = burgers[Math.floor(Math.random() * burgers.length)];
//                 if (!randomBurgers.includes(randomBurger)) {
//                     randomBurgers.push(randomBurger);
//                 }
//             }
//             resolve({ order: randomBurgers });
//         }, 2500);
//     });
// }

// function orderPrep() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ order_status: true, paid: false });
//         }, 1500);
//     });
// }

// function payOrder() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ order_status: true, paid: true });
//         }, 1000);
//     });
// }

// function thankyouFnc() {
//     alert("Thank you for eating with us today!");
// }

// getMenu(); // Load menu on screen load

// TakeOrder()
//     .then(order => {
//         console.log("Order Placed:", order);
//         return orderPrep();
//     })
//     .then(preparation => {
//         console.log("Order Preparation Status:", preparation);
//         return payOrder();
//     })
//     .then(payment => {
//         console.log("Payment Status:", payment);
//         if (payment.paid) {
//             thankyouFnc();
//         }
//     })
//     .catch(error => {
//         console.error("An error occurred:", error);
//     });

// async function getMenu() {
//     try {
//         const response = await fetch('...');
//         // Logic for fetching and displaying menu
//     } catch (error) {
//         console.error("Failed to load menu:", error);
//         alert("Failed to load menu. Please try again later.");
//     }
// }
// const api = async () => {
//     const url = "https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json";
//     try {
//         const res = await fetch(url);
//         const data = await res.json();
//         return data; // Return the fetched data
//     } catch (e) {
//         console.error('Error fetching API:', e, url);
//         return [];
//     }
// };

// const createCard = (item) => {
//     // Returns a string of HTML for a single card
//     return `
//         <div class="card" id="${item.id}">
//             <img src="${item.imgSrc}" alt="${item.name}" class="item_img">
//             <div class="card_details">
//                 <div class="card_content">
//                     <p class="item_desc">${item.name}</p>
//                     <p class="item_price">Price: $${item.price}</p>
//                 </div>
//                 <div>
//                     <img src="Group 3.png" alt="Add item" class="plus">
//                 </div>
//             </div>              
//         </div>
//     `;
// };

// const loadCards = async () => {
//     const data = await api(); // Fetch data from the API
//     const menuContainer = document.querySelector('.main_container_items'); // Ensure this container exists in your HTML

//     if (!menuContainer) {
//         console.error("Error: Element with class 'main_container_items' not found in the DOM.");
//         return;
//     }

//     menuContainer.innerHTML = ''; // Clear any pre-existing content

//     // Loop through the data and create cards dynamically
//     data.forEach(item => {
//         const cardHTML = createCard(item);
//         menuContainer.insertAdjacentHTML('beforeend', cardHTML); // Append card to the container
//     });
// };

// // Load the cards on window load
// window.onload = loadCards;



async function getMenu() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json');
        const menuItems = await response.json();

        console.log("Fetched Menu:", menuItems);

        const menuContainer = document.querySelector('.main_container_items');
        if (!menuContainer) {
            console.error("Error: Element with class 'main_container_items' not found in the DOM.");
            return;
        }

        // Clear any existing content
        menuContainer.innerHTML = '';

        // Append new dynamic content
        menuItems.forEach(item => {
            const itemCard = `
                <div class="card" id=${item.id}>
                    <img src="${item.imgSrc}" alt="${item.name}" class="item_img">
                    <div class="card_details">
                        <div class="card_content">
                            <p class="item_desc">${item.name}</p>
                            <p class="item_price">Price: $${item.price}</p>
                        </div>
                        <div class="plus_image">
                            <img src="Group 3.png" alt="Add item" class="plus">
                        </div>
                    </div>              
                </div>
            `;
            menuContainer.insertAdjacentHTML('beforeend', itemCard);
        });
    } catch (error) {
        console.error("Failed to load menu:", error);
        alert("Failed to load menu. Please try again later.");
    }
}

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
    alert("Thank you for eating with us today!");
}

// Main Execution
async function restaurantWorkflow() {
    try {
        console.log("Fetching menu...");
        await getMenu();

        console.log("Taking order...");
        const order = await TakeOrder();
        console.log("Order Placed:", order);

        console.log("Preparing order...");
        const preparation = await orderPrep();
        console.log("Order Preparation Status:", preparation);

        console.log("Processing payment...");
        const payment = await payOrder();
        console.log("Payment Status:", payment);

        if (payment.paid) {
            thankyouFnc();
        }
    } catch (error) {
        console.error("An error occurred during the restaurant workflow:", error);
    }
}

window.onload = restaurantWorkflow;
