import Vue from "vue";
import App from "./App.vue";
import "bootstrap"; // Bootstrap JS, Vue imports bootstrap's depedencies autmatically (jQuery and Popper)
import "bootstrap/dist/css/bootstrap.css"; // Bootstrap CSS has to be imported manually

import {library} from "@fortawesome/fontawesome-svg-core";
import {faCheck, faTools} from "@fortawesome/free-solid-svg-icons";

library.add(faCheck, faTools);

Vue.config.productionTip = false;

new Vue({
	render: h => h(App)
}).$mount("#app");
