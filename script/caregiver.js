let products = {
    data: [
      {
        productName: "Laxmi Kumari",
        category: "BabyCare",
        image: "https://img.freepik.com/premium-photo/women-beautiful-fashion-dress_953724-3410.jpg",
        buy: "View Profile",
        url: "doctors/ananyahealthcare.html",
      },
      {
        productName: "Aditya Sharma",
        category: "ElderCare",
        image: "https://img.freepik.com/premium-photo/photo-young-man-wearing-casual-clothes-with-happy-cool-smile-face_1058215-16.jpg",
        buy: "View Profile",
        url: "doctors/draadarsh.html",

      },
      {
        productName: "Prabhat Kumar",
        category: "24X7|Care",
        image: "https://img.freepik.com/premium-photo/portrait-smiling-young-man_1048944-16925927.jpg",
        buy: "View Profile",
        url: "doctors/drsumit.html",

      },
    ],
  };
  
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    image.setAttribute("alt", i.productName);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
   
    //price
    let price = document.createElement("h6");
    price.classList.add("product-price");
    price.innerText =  i.category;
    container.appendChild(price);
   // button
    // Assuming you have a container and card already defined
let btn = document.createElement("a"); // Create the <a> element
btn.setAttribute("href", i.url); // Set the link URL

// Create the <button> element
let btns = document.createElement("button");
btns.classList.add("sty-byn");
btns.innerText = i.buy;

// Append the <button> to the <a>
btn.appendChild(btns);

// Append the <a> element to the container
container.appendChild(btn);

// Append the container to the card
card.appendChild(container);

// Append the card to the products container
document.getElementById("products").appendChild(card);

  }

  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }

  //Search button click
  document.getElementById("searching").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    

    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };