

/* nav principal dibujado con js */
let nav = document.getElementById("nav")
let template_nav = `
    <nav class="navbar navbar-expand-md bg-body-tertiary">
      <div class="container-fluid">
        <button class="navbar-toggler order-2 order-md-1" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse order-3 order-md-2" id="navbar-left">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link" href="./../admin/login_admin.html"><i class="bi bi-house"></i></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#section_2" style="font-size: 1.2rem">Sobre Nosotros</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#section_3" style="font-size: 1.2rem">Contacto</a>
            </li>
          </ul>
        </div>
        <a class="navbar-brand order-1 order-md-3" href="#"><img
            src="./../assets/images/logo.png" alt="logo-D-T" /></a>
        <div class="collapse navbar-collapse order-4 order-md-4" id="navbar-right">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <button type="button" class="btn btn-outline-primary mx-2 my-1">
              <a class="nav-link" href="./login.html">Crea tu cuenta</a></button>
            </li>
            <li class="nav-item">
              <button type="button" class="btn btn-outline-primary mx-2 my-1">
              <a class="nav-link" href="./login.html">Ingresar</a></button>
            </li>
           
            <li class="nav-item">
              <a class="nav-link" href="#"><i class="bi bi-cart"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `

nav.innerHTML = template_nav






/* nav inicio sesión */
if (localStorage.getItem("autenticado") == "si") {
  let name = localStorage.getItem("nombre")
  let template_nav = `
    <nav class="navbar navbar-expand-md bg-body-tertiary">
      <div class="container-fluid">
        <button class="navbar-toggler order-2 order-md-1" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" 
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse order-3 order-md-2" id="navbar-left">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link" href="#section_2">Sobre Nosotros</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#section_3">Contacto</a>
            </li>
          </ul>
        </div>
        <a class="navbar-brand order-1 order-md-3" href="#"><img src="./../assets/images/logo.png" alt="logo-D-T" /></a>
        <div class="collapse navbar-collapse order-4 order-md-4" id="navbar-right">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <h5 style="margin: 1rem 1rem; text-transform: capitalize">${name}</h5>
            </li>
            <li class="nav-item">
              <button type="button" class="btn btn-outline-danger mx-2" id="cerrar" onclick="signOff()">
              <a class="nav-link">Cerrar</a></button>
            </li>
            <li class="nav-item">
              <button type="button" class="btn btn-outline-warning mx-2">
              <a class="nav-link" href="#">Mis compras</a></button>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="buy"><i class="bi bi-cart"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `
  nav.innerHTML = template_nav

  /* salir para usuarios */
  let btn = document.getElementById("cerrar")
  btn.addEventListener("click", signOff)
  function signOff() {
    localStorage.setItem("autenticado", "")
    localStorage.setItem("nombre", "")
    location.href = "./../html/index.html"
  }

  let buy = document.getElementById("buy");
  buy.addEventListener("click", gocar)


  function gocar() {
    var total = 0
    template_cards = ""
    template_precio = ""
    const ID = localStorage.getItem("idUsers")
    fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(data => {
        const usuariosConIdDefinido = data.filter(user => user.id);
        const usuario = usuariosConIdDefinido.find(user => user.id === ID);
        dataArray = usuario.product
        dataArray.forEach((element) => {
          template_cards += `
    <div class="card col-12 col-md-3 g-1 shadow">
      <img src="${element.image}" class="card-img-top w-100" alt="imagen-procesador">
      <div class="card-body">
        <h5 class="card-title">${element.name}</h5>
        <h5>${element.price}</h5>
      </div>
    </div>

  `;

          var valor = element.price
          const precioSinFormato = valor.replace(/\D/g, '');
          const precioEntero = parseInt(precioSinFormato);

          total = total + precioEntero
        });
        var div = document.createElement("div");
        div.id = "miDiv"
        // Crear el elemento p
        var p = document.createElement("p");

        // Agregar texto al elemento p
        var texto = document.createTextNode("el valor de la compra es: $" + total + "pesos");
        p.appendChild(texto);

        // Agregar el elemento p al elemento div
        div.appendChild(p);

        // Agregar el elemento div al body del documento

        cards.innerHTML = template_cards;
        document.body.appendChild(div);
        console.log(total)

      })


  }

}

/* sección sobre nosotros */
let about_us = document.getElementById("about_us")
let template_about_us = `
  <div class="container">
    <div class="row align-items-center">
      <div class="col my-4">
        <p class="h2 mb-3">Nosotros, tu aliado en el mundo tecnológico</p>
        <p class="h5">¿Quiénes somos?</p>
        <p>Somos una empresa apasionada por la tecnología. Nos dedicamos a la venta de hardware para computadores, 
        ofreciendo una amplia gama de productos que se ajustan a las necesidades de cada usuario. En nuestro catálogo encontrarás:
        <p>* Procesadores: Intel, AMD, Ryzen, etc.</p>
        <p>* Boards: ASUS, Gigabyte, MSI, etc.</p>
        <p>* Teclados: gamer, ergonómicos, inalámbricos, etc.</p>
        <p>* Micrófonos: USB, condensador, de diadema, etc.</p>
        <p>* Pantallas: LED, IPS, 4K, gaming, etc.</p>
        <p>* Refrigeraciones: líquidas, por aire, RGB, etc.</p>
        <p>* Fuentes de poder: certificadas, modulares, 80 Plus, etc.</p>
        <p>* Y mucho más: memorias RAM, discos duros, SSD, tarjetas gráficas, etc.</p>
        <p class="h5">Nuestra misión:</p>
        <p>Brindar a nuestros clientes la mejor experiencia de compra en el mundo del hardware. Nos esforzamos por ofrecer 
        productos de alta calidad a precios competitivos, acompañados de un servicio al cliente excepcional.</p>
        <p class="h5">Nuestra visión:</p>
        <p>Ser la tienda de hardware online líder en Latinoamérica, reconocida por su amplia selección de productos, precios competitivos 
        y atención al cliente de primera clase.</p>
      </div>
      <div class="col my-5">
        <p class="h5">¿Por qué elegirnos?</p>
        <p>* Amplia selección de productos: Contamos con un extenso catálogo de productos para que encuentres todo lo que necesitas para tu computador.</p>
        <p>* Precios competitivos: Ofrecemos precios justos y accesibles para que puedas adquirir el hardware que deseas sin gastar de más.</p>
        <p>* Servicio al cliente excepcional: Nuestro equipo de expertos está a tu disposición para ayudarte a elegir los productos adecuados y responder a todas tus preguntas.</p>
        <p>* Garantía de satisfacción: Estamos comprometidos con tu satisfacción. Si no estás satisfecho con tu compra, puedes devolverla sin problemas.</p>
      <div class="text-center my-4">
        <img src="https://www.asus.com/microsite/PCDIY/mx/assets/img/rewards/PBA.jpg" alt="componentes de pc" style="height: 27rem; border-radius: 10px; box-shadow: 5px 5px 10px #602600"></img>
      <div>
      </div>
    </div>
  </div>
`
about_us.innerHTML = template_about_us

/* sección contacto */
let contact = document.getElementById("contact")
let template_contact = `
  <div class="container">
   <div class="container py-5 text-center d-flex justify-content-evenly">
    <row>
      <col class="col-12 col-md-4">
        <img src="./../assets/images/contact.jpg" alt="logo" style="height: 20em; width: auto; border-radius: 50%">
        <p class="h2 pt-4" style="color: #fff; font-size: 3rem">¡Hablemos!</p>
      </col>
      <col class="col-12 col-md-4 descripcion">
        <p style="color: #fff; font-size: 2rem">Contactanos para hacer tu sueño de armar el mejor pc realidad.</p>
      </col>
      <col class="col-12 col-md-4">
        <a href="mailto:contact@derven_technologies.com">
          <button type="button" class="btn btn-success btn-lg" style="font-size: 1.5rem; text-transform: uppercase">
            Contacto
            <i class="bi bi-envelope-check-fill"></i>
          </button>
        </a>
      </col>
    </row>
   </div>
  </div>
`
contact.innerHTML = template_contact





/* petición para mostrar los productos y darle funcionalidad a cartas */
template_cards = ""
fetch("http://localhost:3000/products")
  .then(result => result.json())
  .then(data => {
    let cards = document.getElementById("cards")

    const dataArray = Object.values(data);
    console.log(dataArray)
    dataArray.forEach((element, index) => {
      template_cards += `
    <div class="card col-12 col-md-3 g-1 shadow">
      <img src="${element.image}" class="card-img-top w-100" alt="imagen-procesador">
      <div class="card-body">
        <h5 class="card-title">${element.name}</h5>
        <p class="card-text">${element.description}</p>
        <h5>${element.price}</h5>
        <a href="#" class="btn btn-primary w-100 addToCartBtn" data-index="${index}">Agregar al carrito</a>
      </div>
    </div>
  `;
    });

    // Insertar todas las cartas en el DOM
    cards.innerHTML = template_cards;

    // Agregar event listener a cada botón después de insertar las cartas en el DOM
    const addToCartBtns = document.querySelectorAll('.addToCartBtn');

    addToCartBtns.forEach(btn => {
      btn.addEventListener("click", function () {
        const index = this.getAttribute('data-index');
        addProduct(dataArray[index]);
      });
    });

    function addProduct(element) {
      const ID = localStorage.getItem("idUsers")
      // Obtener los valores de la carta
      const cardid = element.id;
      const cardName = element.name;
      const cardPrice = element.price;
      const cardimage = element.image;


      fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(data => {

          const usuariosConIdDefinido = data.filter(user => user.id);
          const usuario = usuariosConIdDefinido.find(user => user.id === ID);



          if (usuario) {

            if (!usuario.product) {
              usuario.product = [
                {
                  id: cardid,
                  name: cardName,
                  price: cardPrice,
                  image: cardimage
                }
              ]; // Inicializar el array si aún no existe
            }

            else {
              usuario.product.push(
                {
                  id: cardid,
                  name: cardName,
                  price: cardPrice,
                  image: cardimage
                }
              );
            }

            // Ahora puedes enviar el usuario actualizado al servidor
            fetch(`http://localhost:3000/users/${usuario.id}`, {
              method: 'PUT',
              body: JSON.stringify(usuario),
              headers: {
                'Content-Type': 'application/json'
              }
            })

          }
        })

    }
  })




/* final final  petición para mostrar los productos y darle funcionalidad a cartas */












/* petición para mostrar las categorias */
template_categories = ""
fetch("http://localhost:3000/categories")
  .then(result => result.json())
  .then(data => {
    let categories = document.getElementById("tbody_category")
    data.forEach(item => {
      template_categories += `
      <div class="col-md-3">
        <tr>
          <td>${item.name}</td>
        </tr>
      </div>
      `
      categories.innerHTML = template_categories
    })
  })





