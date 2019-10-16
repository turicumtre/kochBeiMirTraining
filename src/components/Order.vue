<template>
<div>
	<hr>
	<h1>Menu Konfigurator</h1>
	<div class="row">
		<div class="col-9">
		<div class="row">
			<div v-for="course in selectedMenuCourses" :key="course.id" class="pt-3" :class="numSelectedMenuCourses===1?'col-6 col-md-12':numSelectedMenuCourses===2?'col-6 col-md-6':numSelectedMenuCourses===3?'col-6 col-md-4':'col-6 col-md-3'" >
			<h2>{{course.courseType}}</h2>
				<img 
					:src="require('../../img/coursePictures/'+course.id+'.jpg')"
					class="object-fit-cover"
					:alt="'Picture of '+course.id"
					height="140"
					width="100%"/>
				<br/>
				<div class="mt-2">
					<b>{{course.nameGerman}} ({{course.pricePerPerson}}.-)</b>
					<p class="menudescription pl-3 pr-3">
						{{course.descrGerman}}
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
		<div class="col-3 invert pt-4 pb-4 pl-5 pr-5">
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
			<small v-if="numPers==15"><a style="color:white" href="mailto:info@kochbeimir.ch?subject=Buchung&body=Bei mehr als 15 Gäste sind mehrere Köche erforderlich. Wir erstellen gerne eine Offerte Für Dich.">Mehr als 15 Gäste?</a></small>

			<h2 class="mt-4">Preis</h2>
			<table class="table table-borderless">
				<tbody class="table table-sm" style="color:white">
					<tr>
						<td class="left-align p-0">Pauschale</td>
						<td class="right-align p-0">200.-</td>
					</tr>
					<tr v-for="course in selectedMenuCourses" :key="course.id">
						<td class="left-align p-0">{{course.courseType}}</td>
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
  MICROWAVE: "Mikrowelle"
});

class Course{
	constructor(id, nameGerman, descrGerman, pricePerPerson, isVegetarian, isVegan, courseTypes, mustHaves){
		this.id = id
		this.nameGerman = nameGerman
		this.descrGerman = descrGerman
		this.pricePerPerson = pricePerPerson
		this.isVegetarian = isVegetarian
		this.isVegan = isVegan
		this.courseTypes = courseTypes
		this.mustHaves = mustHaves
	}
}

const COURSES = Object.freeze({
  _19AVOCADOSALAD: new Course("19avocadoSalad", "Salat mit Avocado", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.", 10, true, true,[CourseType.STARTER], [Required.SALADSPINNER]),
  _19PIZZA: new Course("19pizza", "Pizza", "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.", 15, false, false,[CourseType.MAIN], [Required.OVEN]),
  _19CREMEFRUECHTE: new Course("19cremeBerries", "Creme Beeren"," At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.", 8, true, false, [CourseType.DESSERT], [])
});

class Menu{
	constructor(name, courses){
		this.name = name
		this.courses = courses
	}
}

class CourseSequence{
	constructor(Vorspeise, Hauptgang, Dessert){
		this.Vorspeise = Vorspeise,
		this.Hauptgang = Hauptgang,
		this.Dessert = Dessert
	}
}

const MENUS = Object.freeze({
  _19PIZZATRAUM: new Menu("Pizza Traum", new CourseSequence(COURSES._19AVOCADOSALAD, COURSES._19PIZZA, COURSES._19CREMEFRUECHTE))
});

var data = function(){
	return {
		COURSES,
		MENUS,
		selectedMenu: MENUS._19PIZZATRAUM,
		numPers: 2,
	};
}

var computed = {
	allRequired: function(){
		var set = new Set();
		for (var key in this.selectedMenu.courses)
			if (this.selectedMenu.courses[key])
				for(var mustHave of this.selectedMenu.courses[key].mustHaves)
					set.add(mustHave);
		return set;
	},
	selectedMenuCourses: function(){
		var definedCourses = {}
		for(var key in this.selectedMenu.courses){
			if(this.selectedMenu.courses[key]!=null){
				definedCourses[key] = this.selectedMenu.courses[key]
				definedCourses[key].courseType = key
			}
		}
		return definedCourses;
	},
	numSelectedMenuCourses: function(){
		return this.selectedMenuCourses?Object.keys(this.selectedMenuCourses).length:null;
	},
	totalPriceCHF: function(){
		var sum=200;
		for (var key in this.selectedMenuCourses)
			sum += this.numPers*this.selectedMenuCourses[key].pricePerPerson;
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

.object-fit-cover {
    object-fit: cover;
}

.menudescription{
	font-size: small;
}

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
