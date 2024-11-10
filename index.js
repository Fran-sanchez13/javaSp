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

// ENTREGA NRO 3 NUCBA

// document.getElementById('pizza'). addEventListener('submit', (e)){
//   e.preventDefault();

//   const input = document.getElementById('numberInput').value;
//   const results = document.getElementById('resultsPizza');

//   if(input){
//     results.textContent = `La pizza que buscas es: ${input}`;
//   }
//   else{
//     results.textContent = 'Por favor, ingrese un numero valido',
//   }



// }

document.getElementById('pizzaForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe y recargue la página
  
  const input = document.getElementById('numberInput').value;
  const resultado = document.getElementById('resultsPizza');

  if (input) {
      resultado.textContent = `Resultado de la búsqueda para el número: ${input}`;
  } else {
      resultado.textContent = 'Por favor, introduce un número válido.';
  }
});
