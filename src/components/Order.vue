<template>
<div>
	<div>
		<h1 class="mt-5 display-4">Dein Menu</h1>
		<div class="row">
			<div class="pointer m-3 col-6 col-md-3 menu-suggestion" v-for="menu in MENUS" :key="menu.id" @click="selectedMenu=menu">
				<div class="row">
					<img
						v-for="course in menu.courseSequence.courses"
						:key="course.id"
						:src="require('../../img/coursePictures/'+course.id+'.jpg')"
						class="object-fit-cover"
						:alt="'Picture of '+course.id"
						height="100"
						:width="100/menu.courseSequence.courses.length+'%'"/>
				</div>
				<div class="row invert">
					<div class="col-12 py-1">
						<small>Menu </small><b>{{menu.name}}</b>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-9">
			<div class="row">
				<div v-for="course in selectedMenu.courseSequence.courses" :key="course.id" class="pt-3" :class="numSelectedMenuCourses===1?'col-6 col-md-12':numSelectedMenuCourses===2?'col-6 col-md-6':numSelectedMenuCourses===3?'col-6 col-md-4':'col-6 col-md-3'" >
				<h2>{{course.courseType}}</h2>
					<img 
						:src="require('../../img/coursePictures/'+course.id+'.jpg')"
						class="object-fit-cover"
						:alt="'Picture of '+course.id"
						height="140"
						width="100%"/>
					<br/>
					<div class="mt-2">
						<b>{{course.name}} ({{course.pricePerPerson}}.-)</b>
						<p class="menudescription pl-3 pr-3">
							{{course.descr}}
						</p>
						<b-button size="sm" v-show="course.isVegetarian && !course.isVegan" variant="dark" pill :id="course.id+'vegi'">
							<img 
								class="svginvert"
								src="../../img/static/vegetarian.svg"
								height="15px"/>
						</b-button>
						<b-tooltip class="btn-sm" :target="course.id+'vegi'" placement="bottom">
							Vegetarisch
						</b-tooltip>
						<b-button size="sm" v-show="course.isVegan" variant="dark" pill :id="course.id+'vegan'">
							<img 
								class="svginvert"
								src="../../img/static/vegan.svg"
								height="15px"/>
						</b-button>
						<b-tooltip class="btn-sm" :target="course.id+'vegan'" placement="bottom">
							Vegan
						</b-tooltip>
					</div>
				</div>
			</div>
		</div>
		<div class="col-3 invert py-4 px-5">
			<h2>Du benötigst</h2>
			<ul class="p-0 m-0"> 
				<li v-for="required in allRequired" :key="required" class="left-align p-0 m-0">
					<img 
						class="svginvert"
						:src="require('../../img/mustHaveIcons/'+required+'.svg')"
						height="20px"/>
					&nbsp;&nbsp;{{required}}
				</li>
				<li class="left-align p-0 m-0 mt-3" style="color: gray">
					<i>Dein koch bringt den Rest</i>
				</li>
			</ul>
			<h2 class="mt-4">Gäste</h2>
			<div class="row">
				<div class="col-6 left-align">
					{{numPers}} Gäste
				</div>
				<div class="col-6">
					<b-form-input v-model="numPers" type="range" min="2" max="15"></b-form-input>
				</div>
			</div>
			<small v-if="numPers==15"><a style="color:white" href="mailto:info@kochbeimir.ch?subject=Offerte für mehr als 15 Gäste&body=Bei mehr als 15 Gäste sind mehrere Köche erforderlich. Wir erstellen gerne eine Offerte Für Dich.">Mehr als 15 Gäste?</a></small>

			<h2 class="mt-4">Preis</h2>
			<table class="table table-borderless">
				<tbody class="table table-sm" style="color:white">
					<tr>
						<td class="left-align p-0">Dein Koch</td>
						<td class="right-align p-0">200.-</td>
					</tr>
					<tr v-for="course in selectedMenu.courseSequence.courses" :key="course.id">
						<td class="left-align p-0">{{course.name}}</td>
						<td class="right-align p-0">{{numPers*course.pricePerPerson}}.-</td>
					</tr>
					<tr>
						<td class="left-align p-0 pt-3"><b>TOTAL <small style="color: gray">({{numPers}} Personen)</small></b></td>
						<td class="right-align p-0 pt-3"><b>{{totalPriceCHF}}.-</b></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</div>
</template>

<script>

const CourseType = Object.freeze({
  STARTER: 1,
  MAIN: 2,
  DESSERT: 3,
});


const Required = Object.freeze({
  OVEN: "Backofen",
  STEAMER: "Steamer",
  STOVE: "Herd",
  BLENDER: "Mixer",
  SALADSPINNER: "Salatschleuder",
  MICROWAVE: "Mikrowelle",
  FRYINGPAN: "Bratpfanne",
});

class Course{
	constructor(id, name, descr, pricePerPerson, isVegetarian, isVegan, courseTypes, mustHaves){
		this.id = id
		this.name = name
		this.descr = descr
		this.pricePerPerson = pricePerPerson
		this.isVegetarian = isVegetarian
		this.isVegan = isVegan
		this.courseTypes = courseTypes
		this.mustHaves = mustHaves
	}
}

const COURSES = Object.freeze({
  _19AVOCADOSALAD: new Course("19avocadoSalad", "Avocadosalat", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.", 10, true, true,[CourseType.STARTER], [Required.SALADSPINNER]),
  _19PIZZA: new Course("19pizza", "Pizza", "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.", 15, false, false,[CourseType.MAIN], [Required.OVEN]),
  _19CREMEFRUECHTE: new Course("19cremeBerries", "Beeren Creme","At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.", 11, true, false, [CourseType.DESSERT], []),
  _19TIRAMISU: new Course("19tiramisu","Mango Tiramisu","sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",9,true, false,[CourseType.DESSERT], [Required.BLENDER]),
  _19LACHS: new Course("19lachsteller", "Lachs", "sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.", 18, false, false, [CourseType.MAIN], [Required.STEAMER, Required.STOVE, Required.FRYINGPAN])
});

class Menu{
	constructor(name, courseSequence){
		this.name = name
		this.courseSequence = courseSequence
	}
}

class CourseSequence{
	constructor(Vorspeise, Hauptgang, Dessert){
		this.courses = []
		
		this.Vorspeise = Vorspeise
		if (Vorspeise != null){
			this.Vorspeise.courseType = "Vorspeise"
			this.courses.push(Vorspeise)
		}
		
		this.Hauptgang = Hauptgang
		if (Hauptgang != null){
			this.Hauptgang.courseType= "Hauptgang"
			this.courses.push(Hauptgang)
		}

		this.Dessert = Dessert
		if(Dessert != null){
			this.Dessert.courseType = "Dessert"
			this.courses.push(Dessert)
		}		
	}
}

const MENUS = Object.freeze({
	_19EXAMPLE2: new Menu("Kaiser Alexander", new CourseSequence(null, COURSES._19LACHS, COURSES._19TIRAMISU)),
	_19EXAMPLE1: new Menu("Julius Caesar", new CourseSequence(COURSES._19AVOCADOSALAD, COURSES._19PIZZA, COURSES._19CREMEFRUECHTE)),
});

var data = function(){
	return {
		COURSES,
		MENUS,
		selectedMenu: MENUS._19EXAMPLE1,
		numPers: 2,
	};
}

var computed = {
	allRequired: function(){
		var set = new Set();
		for (var course of this.selectedMenu.courseSequence.courses)
			for(var mustHave of course.mustHaves)
				set.add(mustHave);
		return set;
	},
	numSelectedMenuCourses: function(){
		return this.selectedMenu.courseSequence.courses.length;
	},
	totalPriceCHF: function(){
		var sum=200;
		for (var course of this.selectedMenu.courseSequence.courses)
			sum += this.numPers*course.pricePerPerson;
		return sum;
	},
}

export default {
	data,
	computed
}
</script>


<style scoped>
.bg-gray{
	color:white;
	background-color: darkgrey
}

ul {
  list-style-type: none;
}

.svginvert{
	-webkit-filter:invert(1);
        filter:invert(1);
}

.left-align{
  text-align: left;
}

.right-align{
  text-align: right;
}

.menudescription{
	font-size: small;
}

.menu-suggestion{
	/* object-fit: cover; */
	-webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  	filter: grayscale(100%);
	transition:0.5s;
}

.menu-suggestion:hover{
	-webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
  	filter: grayscale(0%);
	transition:0.5s;
	transform: scale(1.2);
}

/** numPers Slider */
.custom-range::-webkit-slider-thumb {
  background: gray;
}
.custom-range::-moz-range-thumb {
  background: gray;
}
.custom-range::-ms-thumb {
  background: gray;
}
</style>
