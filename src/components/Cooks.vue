<template>
<div>
	<div class="invert">
		<span v-for="cook in activeCooks" :key="cook.id">
			<a @click="onCookClick(cook)">
			<img class="portrait-img" v-bind:src="require('../../img/cooks/'+cook.id+'.jpg')" :width="100/activeCooks.length+'%'" :class="cook==selectedCook?'selectedCook':''">
			</a>
		</span>
		<div v-if="selectedCook" class="my-4 cook-description">
			<h1 class="display-md-4">{{selectedCook.nameOnPlatform}}</h1>
			<p>{{selectedCook.descrGerman}}</p>
		</div>
		<h1 v-else class="my-4 display-md-4">Dein Koch...</h1>
		<div class="row">
			<figure class="text-center col-3">
				<img src="../../img/static/deinkoch1.svg" width="30%" class="img-fluid dein-koch-img svg-invert" alt="Kauft ein">
				<figcaption class="mt-2 font-weight-bold">Kauft ein</figcaption>
			</figure>
			<figure class="text-center col-3">
				<img src="../../img/static/deinkoch2.svg" width="30%" class="img-fluid dein-koch-img svg-invert" alt="Serviert">
				<figcaption class="mt-2 font-weight-bold">Kocht</figcaption>
			</figure>
			<figure class="text-center col-3">
				<img src="../../img/static/deinkoch3.svg" width="30%" class="img-fluid dein-koch-img svg-invert" alt="Kocht">
				<figcaption class="mt-2 font-weight-bold">Serviert</figcaption>
			</figure>
			<figure class="text-center col-3">
				<img src="../../img/static/deinkoch4.svg" width="30%" class="img-fluid dein-koch-img svg-invert" alt="Räumt auf">
				<figcaption class="mt-2 font-weight-bold">Räumt auf</figcaption>
			</figure>
		</div>
	</div>
</div>
</template>

<script>

class Cook{
	constructor(id, available, firstName, lastName, nameOnPlatform, descrGerman, phone, mail, region){
		this.id = id
		this.available = available
		this.firstName = firstName
		this.lastName = lastName
		this.nameOnPlatform = nameOnPlatform
		this.descrGerman = descrGerman
		this.phone = phone
		this.mail = mail
		this.region = region
	}
}

var data = function(){
	return {
		cooks: [
			new Cook("alauchiger",true,"Angela", "Lauchiger", "Angi", "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.", "41791234567", "a@b.c", "Zurich"),
			new Cook("gltoffanin",true,"Gian Luca","Toffanin","Gian Luca","At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.","41791234567","a@b.c","Zurich"),
			new Cook("aspumoni",true,"Angelo","Spumoni","Angelo","Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et.","41791234567","a@b.c","Zurich"),
			new Cook("amastali",true,"Ahmed","Mastali","Ahmed","Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et.","41791234567","a@b.c","Zurich"),
			new Cook("imentzer",true,"Iris","Mentzer","Iris","Dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.","41791234567","a@b.c","Zurich"),
			new Cook("ldimasi",false,"Laura","Dimasi","Laura","Tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.","41791234567","a@b.c","Zurich"),
			new Cook("rkuenz",true,"Reto","Kuenz","Reto","Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.","41791234567","a@b.c","Zurich"),
			new Cook("rschuppisser",false,"Rafael","Schupisser","Raffi","Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.","41791234567","a@b.c","Zurich"),
			new Cook("ishoukry",false,"Ismail","Shoukry","Ismail","Am bugfixen und Kite surfen. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.","41791234567","a@b.c","Zurich"),
			],
		selectedCook: undefined
	}
}

var computed = {
	activeCooks: function(){
		return this.cooks.filter(function(cook) {return cook.available;});
	}
}

var methods = {
	onCookClick: function(cook){
		if(this.selectedCook==cook)
			this.selectedCook = null
		else
			this.selectedCook = cook
	}
}

export default {
	data,
	computed,
	methods
}
</script>

<style scoped>
.portrait-img{
	/* object-fit: cover; */
	-webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  	filter: grayscale(100%);
	  	transition:1s;
}

.portrait-img:hover, .selectedCook{
	-webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
  	filter: grayscale(0%);
	transition:0.4s;
	  transform: scale(1.1);
}

a {
	cursor: pointer
}

.cook-description p{
	-webkit-column-count: 3; /* Old Chrome, Safari and Opera */
	-moz-column-count: 3; /* Old Firefox */
	column-count: 3;
	column-gap: 30px;
}
</style>