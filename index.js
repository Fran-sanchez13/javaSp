const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];



//ENTREGA

// Escuchar el envío del formulario
document.getElementById('pizzaForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Obtener el número ingresado y convertirlo a entero
  const input = parseInt(document.getElementById('numberInput').value);
  const pizza = pizzas.find(p => p.id === input);

  // Elementos de resultado
  const pizzaName = document.getElementById('pizzaName');
  const pizzaPrice = document.getElementById('pizzaPrice');
  const pizzaIngredients = document.getElementById('pizzaIngredients');
  const pizzaImg = document.getElementById('pizzaImg');
  const errorMessage = document.getElementById('errorMessage');

  if (pizza) {
    // Mostrar la información de la pizza
    pizzaName.textContent = `Nombre: ${pizza.nombre}`;
    pizzaPrice.textContent = `Precio: $${pizza.precio}`;
    pizzaIngredients.textContent = `Ingredientes: ${pizza.ingredientes.join(', ')}`;
    console.log(pizza.imagen);
    
    pizzaImg.src = pizza.imagen;
    pizzaImg.style.display = 'block'; // Mostrar la imagen

    // Ocultar el mensaje de error
    errorMessage.textContent = '';
  } else {
    // Mostrar mensaje de error si no existe la pizza
    errorMessage.textContent = 'Elige un número del 1 al 5.';
    
    // Limpiar los detalles de la pizza y ocultar la imagen
    pizzaName.textContent = '';
    pizzaPrice.textContent = '';
    pizzaIngredients.textContent = '';
    pizzaImg.style.display = 'none';
  }
});
