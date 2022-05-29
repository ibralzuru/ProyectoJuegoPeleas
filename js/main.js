
//refrescar pantalla


const cleanGame = () => {

  window.location.reload();

  shiftScreen(2);
}

// Funcion que cambia la pantalla

const shiftScreen = (conversion) => {

  let toChoose = "pantalla" + conversion;


  let allScreen = ["pantalla1", "pantalla2", "pantalla3"];

  allScreen = allScreen.filter(val => !toChoose.includes(val));

  document.getElementById(toChoose).style.display = "block";

  for (let sH of allScreen) {
    document.getElementById(sH).style.display = "none";
  }


}

//Funcion numero random
const funcion = {

  random(min, max) {

    return Math.floor(Math.random() * (max - min) + min);
  }

}


//Declaro las class

class jugador {

  constructor(name, id, life, luck) {
    this.name = name;
    this.id = id;
    this.life = 100;
    this.luck = funcion.random(1, 10);
  }

  atack() {

    this.life -= this.luck;

    this.luck = funcion.random(1, 10);

  }
};

//Instanciando de jugadores

let jugador1 = new jugador("jordan", "1", 100, 100, 1);
let jugador2 = new jugador("curry", "2", 100, 100, 1);

//Funcion que genera el juego

const game = () => {

  jugador1.atack();
  jugador2.atack();
  if (jugador1.life < 0) {
  jugador1.life = 0;
  }
  if (jugador2.life < 0) {
  jugador2.life = 0;
  }
  
  
  power1.innerHTML = `<div class="barra-vida-interna"><div id="power1"></div>`;
  power2.innerHTML = `<div class="barra-vida-interna"><div id="power2"></div>`;
  document.getElementById("power1").style.width = `${jugador1.life}` + "%";
  document.getElementById("power2").style.width = `${jugador2.life}` + "%";
  
  
  if (jugador1.life <= 0) {
  shiftScreen(3)
  contenedor3.innerHTML = `<h1>Stephen Curry!</h1>
  <img src="../img/curryW.jpeg" alt="">
  <img src="../img/jordanC.jpeg">`; 
  /* contenedor3.innerHTML = `<img src="../img/curryW.jpeg" alt="">`;
  contenedor4.innerHTML = `<img src="../img/jordanC.jpeg" alt="">`; */
  
  
  }
  if (jugador2.life <= 0) {
  
  shiftScreen(3)
  contenedor3.innerHTML = `<h1>Michael Jordan!</h1><img src="../img/curryC4.jpeg" alt=""><img src="../img/jordanW.jpeg" alt="">`; 
  /* contenedor3.innerHTML = `<img src="../img/curryC4.jpeg" alt="">`; 
  contenedor4.innerHTML = `<img src="../img/jordanW.jpeg" alt="">`; */
  } 
  }












