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


//ENTRGA NUCBA_03:

    const form = document.getElementById("pizzaForm");
    const input = document.getElementById("numberInput");
    const resultsContainer = document.getElementById("resultsPizza");

//contenedor vacio
resultsContainer.innerHTML = "";

form.addEventListener("submit", (event) => {
    event.preventDefault();//evita recarga de la pagina


    const pizzaId = parseInt(input.value);
      if(isNaN(pizzaId)){
        renderError("indique un valor del 1 al 10");
        return
      }
    
    const pizza = pizzas.find((p) => p.id === pizzaId);
    if(pizza){
      renderPizza(pizza);
      localStorage.setItem("lastpizza", JSON.stringify(pizza));
    }else{
      renderError("No existe una pizza con ese valor");
    }
});

function renderPizza(pizza){
  resultsContainer.innerHTML = `
    <div class = "pizzaCard">
      <h2>${pizza.nombre}</h2>
      <img src = "${pizza.imagen}" alt = "${pizza.nombre}">
      <p>Precio: $${pizza.precio}</p>
      <p>Ingredientes: ${pizza.ingredientes.join(", ")}</p>
    </div>
  `;
}


function renderError(message){
  resultsContainer.innerHTML = `<p class = "error"> ${message}</p>`;
}