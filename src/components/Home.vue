<template>
  <!-- The template must have exactly one tag -->
  <div>
    <div class="container text-center sticky-top background-white">
      <nav id="navbarSite" class="navbar navbar-light bg-light navbar-expand-sm">
        <div class="container">
          <a href="#" class="navbar-brand">
            <img src="../../img/Logo_gray.jpeg" height="25px" alt="Logo">
          </a>

          <!-- Hamburger Button -->
          <button
            class="navbar-toggler"
            type="btn"
            data-toggle="collapse"
            data-target="#toggledNavigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="navbar-nav collapse navbar-collapse" id="toggledNavigation">
            <a href="#menus" class="nav-item nav-link">Menus</a>
            <a href="#book" class="nav-item nav-link">Buchen</a>
          </div>
        </div>
      </nav>
    </div>

    <article class="container">
      <img src="../../img/7cooks.png" class="img-fluid w-100" id="top" alt="Titelbild">

      <div class="text-center mt-5">
        <h1 class="display-4">Dein Koch...</h1>
      </div>      <div class="row mt-5">
        <div class="text-center col-6 col-md-3">
          <img src="../../img/static/deinkoch2.jpg" height="300px" class="center-img dein-koch-img" alt="Kocht">
          <h2 class="h3 font2">Kauft ein</h2>
        </div>
        <div class="text-center col-6 col-md-3">
          <img src="../../img/static/deinkoch3.jpg" height="300px" class="center-img dein-koch-img" alt="Serviert">
          <h2 class="h3 font2">Deckt den Tisch</h2>
        </div>
        <div class="text-center col-6 col-md-3">
          <img src="../../img/static/deinkoch4.jpg" height="300px" class="center-img dein-koch-img" alt="Räumt auf">
          <h2 class="h3 font2">Kocht</h2>
        </div>
        <div class="text-center col-6 col-md-3">
          <img src="../../img/static/deinkoch6.jpg" height="300px" class="center-img dein-koch-img" alt="Räumt auf">
          <h2 class="h3 font2">Räumt auf</h2>
        </div>
      </div>
    </article>

    <article class="container" id="menus">
      <div class="text-center mt-5">
        <h1 class="display-4">1. Stelle ein Menu zusammen</h1>
      </div>

      <div class="d-inline-flex justify-content-between mt-5">
        <div class="row">
          <div class="col col-sm-4 col-6 mt-2">
            <section class="card border-0">
              <div class="card-body text-center">
                <img src="../../img/ehrlich_square.jpg" class="card-img rounded-circle">
                <h2 class="card-title mt-3 font2">Ehrlich</h2>
                <p class="card-text d-none d-md-block">
                  Orientalischer 5-Gänger mit
                  <br>italienischem Dessert.
                </p>
                <b>70 Fr. / Pers.</b>
                <button
                  class="ml-2 mt-2 mt-sm-0 btn btn-dark"
                  data-toggle="modal"
                  data-target="#modalmenu1"
                >Details</button>
              </div>
            </section>
          </div>

          <div class="col col-sm-4 col-6 mt-2">
            <section class="card border-0">
              <div class="card-body text-center">
                <img src="../../img/raffiniert.png" class="card-img rounded-circle">
                <h2 class="card-title mt-3 font2">Raffiniert</h2>
                <p class="card-text d-none d-md-block">
                  Bresaola Carpaccio mit Rucola, Pistazien und roten
                  Zwiebeln.
                </p>
                <b>90 Fr. / Pers.</b>
                <button
                  class="ml-2 mt-2 mt-sm-0 btn btn-dark"
                  data-toggle="modal"
                  data-target="#modalmenu2"
                >Details</button>
              </div>
            </section>
          </div>

          <div class="col col-sm-4 col-6 mt-2">
            <section class="card border-0">
              <div class="card-body text-center">
                <img src="../../img/chefschoice.png" class="card-img rounded-circle">
                <h2 class="card-title mt-3 font2">Chef's Choice</h2>
                <p class="card-text d-none d-md-block">
                  Meh fancy alles.
                  <br>Und huere tüür.
                </p>
                <b>150 Fr. / Pers.</b>
                <button
                  class="ml-2 mt-2 mt-sm-0 btn btn-dark"
                  data-toggle="modal"
                  data-target="#modalmenu3"
                >Details</button>
              </div>
            </section>
          </div>
        </div>
      </div>

      <img src="../../img/meatballs.jpg" class="img-fluid w-100 mt-3">

      <div class="text-center mt-5" id="book">
        <h1 class="display-4">Buchungsanfrage</h1>
      </div>

      <form
        class="container mt-5"
        style="min-width: 300px; max-width: 700px"
        onsubmit="sendForm(this)"
      >
        <fieldset id="requestform" class="form-group">
          <div class="form-group form-row">
            <label
              class="col-form-label text-md-right col-md-2 d-none d-md-inline"
              for="ownername"
            >Name</label>
            <div class="col-md-5 col-6">
              <input class="form-control" type="text" id="ownername" placeholder="Vorname">
            </div>
            <div class="col-md-5 col-6">
              <input class="form-control" type="text" id="ownername" placeholder="Nachname">
            </div>
          </div>

          <div class="form-group form-row">
            <label
              class="col-form-label text-md-right col-md-2 d-none d-md-inline"
              for="street"
            >Addresse</label>
            <div class="col-md-10">
              <input class="form-control" type="text" id="street" placeholder="Strasse / Nr.">
            </div>
            <div class="col-6 col-md-5 offset-md-2 mt-1">
              <input class="form-control" type="text" id="zip" placeholder="PLZ">
            </div>
            <div class="col-6 col-md-5 mt-1">
              <input class="form-control" type="text" id="city" placeholder="Ort">
            </div>
          </div>

          <div class="form-group form-row">
            <label
              class="col-form-label text-md-right col-md-2 d-none d-md-inline"
              for="street"
            >Menu</label>
            <div class="col-md-10">
              <div class="btn-group btn-block">
                <button
                  type="button"
                  id="menu1"
                  onclick="toggleActive(this)"
                  class="btn btn-outline-dark active"
                >Ehrlich</button>
                <button
                  type="button"
                  id="menu2"
                  onclick="toggleActive(this)"
                  class="btn btn-outline-dark"
                >Raffiniert</button>
                <button
                  type="button"
                  id="menu3"
                  onclick="toggleActive(this)"
                  class="btn btn-outline-dark"
                >Chef's Choice</button>
              </div>
            </div>
          </div>
          <div class="form-group form-row">
            <div class="col-md-10 offset-md-2">
              <div class="form-check form-check-inline">
                <label class="form-check-label">
                  <input type="checkbox" class="form-check-input"> Laktosefrei
                </label>
              </div>
              <div class="form-check form-check-inline">
                <label class="form-check-label">
                  <input type="checkbox" class="form-check-input"> Glutenfrei
                </label>
              </div>
              <div class="form-check form-check-inline">
                <label class="form-check-label">
                  <input type="checkbox" class="form-check-input"> Vegetarisch
                </label>
              </div>
            </div>
          </div>

          <button
            class="btn btn-dark float-right"
            id="formsendbutton"
            type="submit"
          >Anfrage absenden</button>
        </fieldset>
        <header id="formthankyou" class="jumbotron d-none">
          <div class="row">
            <div class="col-3 text-center">
              <font-awesome-icon icon="laugh-wink" class="fa-4x"></font-awesome-icon>
            </div>
            <div class="col-9 pt-4">
              <p>Vielen Dank für Deine Anfrage. Wir melden uns bald.</p>
            </div>
          </div>
        </header>
      </form>
    </article>
    <footer style="height: 250px" class="mt-5 bg-foooter text-gray">
      <div class="row m-0 p-0">
        <div class="m-0 p-0 col col-md-3 d-none d-md-block">
          <img
            src="../../img/footer_left.png"
            style="height: 250px"
            class="p-0 m-0 img-fluid float-left"
          >
        </div>
        <div class="col-5 offset-1 offset-md-0 col-md-3 px-3 py-5">
          <span class="h3">KOCH BEI MIR</span>
          <br>
          <br>8000 Zürich
          <br>info@kochbeimir.ch
          <br>+41 (0)79 350 63 36
        </div>
        <div class="col-5 col-md-3 px-3 py-5">
          <a
            style="color: inherit; cursor: pointer"
            data-toggle="modal"
            data-target="#notimplemented"
          >Über Uns</a>
          <br>
          <a
            style="color: inherit; cursor: pointer"
            data-toggle="modal"
            data-target="#notimplemented"
          >Impressum</a>
          <br>
          <a
            style="color: inherit; cursor: pointer"
            data-toggle="modal"
            data-target="#notimplemented"
          >Disclaimer Website</a>
          <br>
          <a
            style="color: inherit; cursor: pointer"
            data-toggle="modal"
            data-target="#notimplemented"
          >Datenschutz</a>
          <br>
          <p class="pt-2">&copy; 2019</p>
        </div>
        <div class="p-0 m-0 col-md-3 d-none d-md-block">
          <img
            src="../../img/footer_right.png"
            style="height: 250px"
            class="p-0 m-0 img-fluid float-right"
          >
        </div>
      </div>
    </footer>

    <!-- MODAL -->
    <div class="modal fade" id="modalmenu1">
      <div class="modal-dialog">
        <div class="modal-content text-center">
          <div class="modal-header bg-dark text-light">
            <h2 class="modal-title font2">Ehrlich</h2>
            <button type="button" class="close text-light" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body">
            <img class="p-0 m-0 img-fluid rounded" src="../../img/ehrlich_wide.jpg">
            <div class="mt-2 mb-5" style="  font-family: 'Trebuchet MS', Helvetica, sans-serif">
              <br>Lauwarmer Babyspinat Salat mit Feta, Feigen und Granatäpfeln
              <br>
              <b>***</b>
              <br>Mais-Chillisuppe mit Knoblauchbrot
              <br>
              <b>***</b>
              <br>Marokkanischer Couscous Salat mit Dörrobst
              <br>
              <b>***</b>
              <br>Gemüseeintopf mit Linsen und Kichererbsen
              <br>
              <b>***</b>
              <br>Saisonales Tiramisu (Bsp. Zwetschgen, Erdbeere)
              <br>
            </div>
            <span class="font-weight-bold">
              <font-awesome-icon icon="check"></font-awesome-icon>&nbsp;Vegetarisch
            </span>
            <hr>
            <span class="h3">
              <b>70</b> Fr. / Pers.
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="modalmenu2">
      <div class="modal-dialog">
        <div class="modal-content bg-dark text-light">
          <div class="modal-header">
            <h2 class="modal-title">Raffiniert</h2>
            <button type="button" class="close text-light" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body text-center">
            <img class="my-4" src="../../img/raffiniert.png">
            <div class="mt-2 mb-5">
              Bresaola Carpaccio mit Rucola, Pistazien und roten Zwiebeln
              <br>* * *
              <br>Thaicurry Suppe mit Zitronengrasschaum
              <br>* * *
              <br>Mit Feigensenf glasierte Entenbrust auf Orangen-Fenchel-Salat
              <br>* * *
              <br>Thunfischsteak im Sesammantel mit schwarzem Venere Reis, Kurkumafenchel und Datteltomaten
              <br>* * *
              <br>Tarte Tatin mit Zimtrahm
            </div>
            <span class="h3">
              <b>90</b> Fr. / Pers.
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="modalmenu3">
      <div class="modal-dialog">
        <div class="modal-content bg-dark text-light">
          <div class="modal-header">
            <h2 class="modal-title">Chef's Choice</h2>
            <button type="button" class="close text-light" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body text-center">
            <img class="my-4" src="../../img/chefschoice.png">
            <div class="mt-2 mb-5">
              Papaya Salat mit gebratenen Jakobsmuscheln
              <br>* * *
              <br>Rindsbouillon mit Einlage
              <br>* * *
              <br>Geräucherter Balik-Lachs mit Schnittlauch Crème fraîche, Brotchips und Zitrone
              <br>* * *
              <br>Rindsfilet im Dattelspeck-Mantel mit dreierlei Stock (Süsskartoffeln, Randen, Sellerie), Jus und
              Gemüse Sticks
              <br>* * *
              <br>Schokoladen Soufflé mit Mangocoulis
            </div>
            <span class="h3">
              <b>150</b> Fr. / Pers.
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="notimplemented">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title">Im Aufbau</h2>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body text-center">
            <font-awesome-icon icon="tools" class="fa-4x"></font-awesome-icon>
            <p class="mt-5 h3">Hier fehlt noch was ;)</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-dark" data-dismiss="modal">Schliessen</button>
          </div>
        </div>
      </div>
    </div>
    <!-- closing div of template -->
  </div>
</template>

<script>
// function toggleActive(selectedItem) {
//   for (var i = 1; i <= 3; i++) {
//     document.getElementById("menu" + i).classList.remove("active");
//   }

//   selectedItem.classList.add("active");
// }

// function sendForm(e) {
//   return false;
// }

// $("#formsendbutton").click(function(e) {
//   document.getElementById("formthankyou").classList.toggle("d-none");
//   document.getElementById("requestform").classList.toggle("d-none");
//   e.preventDefault();
//   // e.stopPropagation();
// });

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "Home",
  props: {
    msg: String
  },
  components: { FontAwesomeIcon }
};
</script>

<style>
/* General */
html {
  scroll-behavior: smooth;
}
.float-clear {
  clear: both;
}

/* Navigation */
.background-white {
  background: white;
}

/* Footer */
.dividor {
  height: 5vh;
  background: url(../../img/holiday.jpg) center center;
}

.bg-foooter {
  background: #030303;
  color: #7f7f7f;
}

.font2 {
  font-family: "Leckerli One", cursive;
}

.dein-koch-img {
	  -webkit-filter: grayscale(20%); /* Safari 6.0 - 9.0 */
	  filter: grayscale(20%) brightness(80%);
	    border-radius: 10%;
}
</style>