//OPCION 1
// const products = [
//   {
//       id: 1,
//       name: "Producto 1",
//       image: "./img/Suplementos/WheyProtein/WheyProtein_1-removebg-preview.png",
//       price: 10.99
//   },
//   {
//       id: 2,
//       name: "Producto 2",
//       image: "./img/Suplementos/WheyProtein/WheyProtein_2-removebg-preview.png",
//       price: 15.99
//   },
//   // Agrega más productos aquí
// ];

// const productGrid = document.getElementById("product-grid");

// products.forEach(product => {
//   const productCard = document.createElement("div");
//   productCard.classList.add("col-md-4", "mb-4");

//   productCard.innerHTML = `
//       <div class="card">
//           <img src="${product.image}" class="card-img-top" alt="${product.name}">
//           <div class="card-body">
//               <h5 class="card-title">${product.name}</h5>
//               <p class="card-text">$${product.price.toFixed(2)}</p>
//               <button class="btn btn-primary" onclick="addToCart(${product.id})">Agregar al carrito</button>
//           </div>
//       </div>
//   `;

//   productGrid.appendChild(productCard);
// });

// function addToCart(productId) {
//   // Aquí puedes implementar la lógica para agregar el producto al carrito
//   console.log(`Producto con ID ${productId} agregado al carrito.`);
// }

const products = [
  {
      image: '../img/Suplementos/WheyProtein/WheyProtein_1-removebg-preview.png',
      title: 'Producto 1',
      description: 'Descripción del Producto 1',
      price: 19.99
  },
  {
      image: '../img/Suplementos/WheyProtein/WheyProtein_2-removebg-preview.png',
      title: 'Producto 2',
      description: 'Descripción del Producto 2',
      price: 24.99
  },
  {
      image: '../img/Suplementos/WheyProtein/WheyProtein_3-removebg-preview.png',
      title: 'Producto 3',
      description: 'Descripción del Producto 3',
      price: 29.99
  },
  // Agrega más productos aquí
];

const productGrid = document.getElementById('productGrid');

products.forEach((product, index) => {
  const productCard = document.createElement('div');
  productCard.className = 'col-md-4 mb-4';

//   productCard.innerHTML = `
//       <div class="card">
//           <img src="${product.image}" class="card-img-top" alt="${product.title}">
//           <div class="card-body">
//               <h5 class="card-title">${product.title}</h5>
//               <p class="card-text">${product.description}</p>
//               <p class="card-text">$${product.price.toFixed(2)}</p>
//               <div class="input-group mb-3">
//                   <input type="number" class="form-control" value="1" min="1" id="quantity${index}">
//                   <button class="btn btn-primary" onclick="addToCart(${index})">Agregar al carrito</button>
//               </div>
//           </div>
//       </div>
//   `;

    productCard.innerHTML = `
        <div class="card">
            <img src="${product.image}" class="card-img-top" alt="${product.title}">
            <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">${product.description}</p>
                <p class="card-text">$${product.price.toFixed(2)}</p>
                <div class="input-group mb-3">
                    <input type="number" class="form-control" value="1" min="1" id="quantity${index}">
                    <button class="btn btn-primary" onclick="addToCart(${index})">Agregar al carrito</button>
                </div>
            </div>
        </div>
    `;


  productGrid.appendChild(productCard);
});

const cart = [];

function addToCart(index) {
  const quantity = parseInt(document.getElementById(`quantity${index}`).value);
  if (quantity > 0) {
      cart.push({
          product: products[index],
          quantity
      });
      alert(`Se agregó ${quantity} ${products[index].title}(s) al carrito`);
      document.getElementById(`quantity${index}`).value = 1;
  }
}