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
            <a href="#cooks" class="nav-item nav-link">Köche</a>
            <a href="#order" class="nav-item nav-link">Menus</a>
          </div>
        </div>
      </nav>
    </div>

    <article class="container">
      <a class="anchor" id="cooks"></a>
		<Cooks/>
      <div class="text-center mt-5">
        <h1 class="display-4">Dein Koch...</h1>
        <DeinKoch/>
      </div>
    </article>

    <article class="container">
      <a class="anchor" id="order"></a>
      <Order/>
    </article>

	<ImAufbau title="Im Aufbau" msg1="Die Webseite befindet sich noch im Aufbau." msg2="Wenn Sie buchen möchten senden Sie bitte eine E-Mail an info[at]kochbeimir.ch"/>
    <Footer/>

    <!-- MODAL -->
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
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Cooks from "./Cooks.vue";
import DeinKoch from "./DeinKoch.vue";
import Order from "./Order.vue";
import Footer from "./Footer.vue";
import ImAufbau from "./ImAufbau.vue";
export default {
  name: "Home",
  props: {
    msg: String
  },
  components: {
	FontAwesomeIcon,
	Cooks,
    DeinKoch,
    Order,
	Footer,
	ImAufbau
  }
};
</script>

<style>
	h1 {
	font-family: "Leckerli One", cursive;
	}

	h2, figcaption {
	font-family: "Leckerli One", cursive;
	}

	html {
	scroll-behavior: smooth;
	}
</style>

<style scoped>
	a.anchor {
	display: block;
	position: relative;
	top: -100px;
	visibility: hidden;
	}
</style>