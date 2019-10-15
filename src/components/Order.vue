<template>
<div>
	<hr>
	<h1>Menu Konfigurator</h1>
	<div class="row">
		<div class="col-9">
		<div class="row">
			<div v-for="course in selectedMenuCourses" :key="course.id" :class="numSelectedMenuCourses===1?'col-12':numSelectedMenuCourses===2?'col-6':numSelectedMenuCourses===3?'col-4':'col-3'" >
			<h2>{{course.courseType}}</h2>
				<img 
					:src="require('../../img/coursePictures/'+course.id+'.jpg')"
					:alt="'Picture of '+course.id"
					height="100px"/>
				<br/>
				{{course.nameGerman}}
			</div>
		</div>
		</div>
		<div class="col-3">
			<h2>Du benötigst</h2>
			<ul>
				<li v-for="required in allRequired" :key="required">
					<img 
						:src="require('../../img/mustHaveIcons/'+required+'.svg')"
						height="20px"/>
					{{required}}
				</li>
			</ul>
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
  OVEN: "Ofen",
  STEAMER: "Steamer",
  STOVE: "Herd",
  BLENDER: "Mixer",
  SALADSPINNER: "Salatschleuder",
  MICROWAVE: "Mikrowelle"
});

class Course{
	constructor(id, nameGerman, DescrGerman, preisProPersCHF, isVegetarian, isVegan, courseTypes, mustHaves){
		this.id = id
		this.nameGerman = nameGerman
		this.DescrGerman = DescrGerman
		this.preisProPersCHF = preisProPersCHF
		this.isVegetarian = isVegetarian
		this.isVegan = isVegan
		this.courseTypes = courseTypes
		this.mustHaves = mustHaves
	}
}

const COURSES = Object.freeze({
  _19AVOCADOSALAD: new Course("19avocadoSalad", "Salat mit Avocado", "Lorem ipsum Avocado", 10, true, true,[CourseType.STARTER], [Required.SALADSPINNER]),
  _19PIZZA: new Course("19pizza", "Pizza", "Pizza Giovanni nach dem Rezept seiner Ur-Grossmutter", 15, true, false,[CourseType.MAIN], [Required.OVEN]),
  _19CREMEFRUECHTE: new Course("19cremeBerries", "Vanille-Crème mit frischen Beeren","Lore Impsum Dessert", 8, true, false, [CourseType.DESSERT], [])
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
  PIZZATRAUM: new Menu("Pizza Traum", new CourseSequence(COURSES._19AVOCADOSALAD, COURSES._19PIZZA, COURSES._19CREMEFRUECHTE))
});

var data = function(){
	return {
		COURSES,
		MENUS,
		selectedMenu: MENUS.PIZZATRAUM
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
	}
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
</style>
