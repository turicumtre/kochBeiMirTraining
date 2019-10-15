<template>
<div class="invert">
	<span v-for="cook in activeCooks">
		<a @mouseover="selectedCook = cook">
		<img v-bind:src="require('../../img/cooks/'+cook.id+'.jpg')" width="20%" >
		</a>
	</span>
	<div v-if="selectedCook" class="pt-5 pb-3 cook-description">
	<h1>{{selectedCook.nameOnPlatform}}</h1>
	<p>{{selectedCook.descrGerman}}</p>
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
			new Cook("gltoffanin",true,"Gian Luca","Toffanin","Gian Luca","At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.","41791234567","a@b.c","Zurich"),
			new Cook("alauchiger",true,"Angela", "Lauchiger", "Angi", "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.", "41791234567", "a@b.c", "Zurich"),
			new Cook("aspumoni",false,"Angelo","Spumoni","Angelo","Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et.","41791234567","a@b.c","Zurich"),
			new Cook("amastali",true,"Ahmed","Mastali","Ahmed","Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et.","41791234567","a@b.c","Zurich"),
			new Cook("ldimasi",true,"Laura","Dimasi","Laura","Tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.","41791234567","a@b.c","Zurich"),
			new Cook("rschuppisser",false,"Rafael","Schupisser","Raffi","Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.","41791234567","a@b.c","Zurich"),
			new Cook("rkuenz",true,"Reto","Kuenz","Reto","Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.","41791234567","a@b.c","Zurich")
			],
		selectedCook: undefined
	}
}

var computed = {
	activeCooks: function(){
		return this.cooks.filter(function(cook) {return cook.available;});
	}
}

export default {
	data,
	computed
}
</script>

<style scoped>
img{
	  /* object-fit: cover; */
	-webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  	filter: grayscale(100%);
	  	transition:1s;
}

img:hover{
	-webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
  	filter: grayscale(0%);
	transition:1s;
	  transform: scale(1.08);
}

a {
	cursor: pointer
}

.invert{
  background-color:#000000cb;
  color:white;
}

.cook-description p{
	-webkit-column-count: 3; /* Old Chrome, Safari and Opera */
	-moz-column-count: 3; /* Old Firefox */
	column-count: 3;
	column-gap: 30px;
}
</style>