<template>
<div>
	<div>
		<h1 class="mt-5 display-md-4">Dein Menu</h1>
		<div class="row">
			<div class="pointer px-4 py-2 col-6 col-md-3 menu-suggestion" v-for="menu in MENUS" :key="menu.id" @click="selectedMenu=menu" :class="menu==selectedMenu?'selected-menu':''">
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
	<div class="row" v-if="!selectedMenu">
		<div class="col-12">Kein Menu ausgewählt</div>
	</div>
	<div class="row justify-content-center" v-if="selectedMenu">
		<div class="col-12 col-md-9">
			<div class="row">
				<div v-for="course in selectedMenu.courseSequence.courses" :key="course.id" class="py-2 px-1" :class="numSelectedMenuCourses===1?'col-12 col-md-12':numSelectedMenuCourses===2?'col-6 col-md-6':numSelectedMenuCourses===3?'col-6 col-md-4':'col-6 col-md-3'" >
					<h2 class="h3">{{course.courseType}}</h2>
					<img 
						:src="require('../../img/coursePictures/'+course.id+'.jpg')"
						class="object-fit-cover"
						:alt="'Picture of '+course.id"
						height="220"
						width="100%"/>
					<br/>
					<div class="mt-2">
						<b>{{course.name}}</b>
						<p class="menudescription px-3">{{course.descr}}</p>
						<span v-for="label in course.labels" :key="label.id">
							<b-button size="sm" class="text-dark label-button" :class="label.hasIcon?'':'border border-dark'" variant="link" pill :id="course.id+label.id">
								<img 
									v-if="label.hasIcon"
									:src="require('../../img/labels/'+label.id+'.svg')"
									height="30px"/>
								<span v-else>{{label.name}}</span>
							</b-button>
							<b-tooltip class="btn-sm" :target="course.id+label.id" placement="bottom">
								{{label.descr?label.descr:label.name}}
								<br>
								<a class="text-white" v-if="label.linkText" :href="label.link" target="_blank">Mehr Informationen</a>
							</b-tooltip>
						</span>
					</div>
				</div>
			</div>
		</div>
		<div class="mt-4 mt-md-0 col-8 col-md-3 invert py-4 px-5 px-md-5 line-height-low">
			<div v-if="allRequired.size>0" class="mb-4">
				<h2>Du benötigst</h2>
				<ul class="p-0 m-0">
					<li class="left-align p-0 m-0">
						<img 
							class="svg-invert"
							src="../../img/mustHaveIcons/Gedeck.svg"
							height="20px"/>
						&nbsp;&nbsp;Gedeck für {{numPers}} Pers.
					</li> 
					<li v-for="required in allRequired" :key="required" class="left-align p-0 m-0">
						<img 
							class="svg-invert"
							:src="require('../../img/mustHaveIcons/'+required+'.svg')"
							height="20px"/>
						&nbsp;&nbsp;{{required}}
					</li>
					<li class="left-align p-0 m-0 mt-1 small-gray-txt">
						Dein Koch bringt den Rest
					</li>
				</ul>
			</div>
			<h2>Gäste</h2>
			<div class="row">
				<div class="col-6 left-align">
					{{numPers}} Gäste
				</div>
				<div class="col-6">
					<b-form-input v-model="numPers" type="range" min="2" max="15"></b-form-input>
				</div>
			</div>
			<small class="m-0 p-0" v-if="numPers==15"><br><a style="color:white" href="mailto:info@kochbeimir.ch?subject=Offerte für mehr als 15 Gäste&body=Bei mehr als 15 Gäste sind mehrere Köche erforderlich. Wir erstellen gerne eine Offerte Für Dich.">Mehr als 15 Gäste?</a></small>

			<h2 class="mt-4">Rechnung</h2>
			<table class="table table-borderless">
				<tbody class="table table-sm" style="color:white">
					<tr>
						<td class="left-align p-0">Pauschale</td>
						<td class="right-align p-0">200.-</td>
					</tr>
					<tr v-for="course in selectedMenu.courseSequence.courses" :key="course.id">
						<td class="left-align p-0">{{course.name}}</td>
						<td class="right-align p-0">{{numPers*course.pricePerPerson}}.-</td>
					</tr>
					<tr>
						<td class="left-align p-0 pt-3"><b>Total </b></td>
						<td class="right-align p-0 pt-3"><b>{{totalPriceCHF}}.-</b></td>
					</tr>
				</tbody>
			</table>
			<span class="small-gray-txt">Preise in CHF für {{numPers}} Pers. inkl. MwSt.</span>
		</div>
	</div>
</div>
</template>

<script>

const CourseType = Object.freeze({
  STARTER: 1,
  MAIN: 2,
  DESSERT: 3,
  BERRIES: 4,
});


const Required = Object.freeze({
  OVEN: "Backofen",
  STEAMER: "Steamer",
  STOVE: "Herd",
  BLENDER: "Mixer",
  SALADSPINNER: "Salatschleuder",
  MICROWAVE: "Mikrowelle",
  FRYINGPAN: "Bratpfanne",
  FREEZER: "Tiefkühler",
});

class Course{
	constructor(id, name, pricePerPerson, isVegetarian, isVegan, labels, courseTypes, mustHaves, descr){
		this.id = id
		this.name = name
		this.pricePerPerson = pricePerPerson
		this.isVegetarian = isVegetarian
		this.isVegan = isVegan
		this.labels = labels
		this.courseTypes = courseTypes
		this.mustHaves = mustHaves
		this.descr = descr
	}
}

class Label{
	constructor(id, name, hasIcon, descr, link){
		this.id = id
		this.name = name
		this.hasIcon = hasIcon
		this.descr = descr
		this.link = link
	}
}

const LABELS = Object.freeze({
	VEGI: new Label("vegetarian", "Vegeratisch", true),
	VEGAN: new Label("vegan", "Vegan", true),
	MSC: new Label("msc", "MSC", false, "Fisch mit dem MSC Label stammt aus nachhaltigem Wildfang", "https://de.wikipedia.org/wiki/Marine_Stewardship_Council"),
	ASC: new Label("asc", "ASC", false, "Fisch mit dem ASC Label stammt aus nachhaltiger Zucht", "https://de.wikipedia.org/wiki/Nachhaltige_Fischerei"),
	TERRASUISSE: new Label("terrasuisse", "TerraSuisse", false, "Fleisch mit dem TerraSuisse Label stammt aus tierfreundlicher schweizer Haltung", "https://www.migros.ch/de/einkaufen/migros-marken/terrasuisse.html"),
	BIO: new Label("organic", "Bio", false, "Aus biologischer Landwirtschaft"),
})

const COURSES = Object.freeze({
  _19AVOCADOSALAD: new Course("19avocadoSalad", "Avocadosalat", 10, true, true, [LABELS.VEGAN],[CourseType.STARTER], [Required.SALADSPINNER], "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."),
  _19PIZZA: new Course("19pizza", "Pizza", 15, false, false, [],[CourseType.MAIN], [Required.OVEN], "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."),
  _19CREMEFRUECHTE: new Course("19cremeBerries", "Beeren Creme", 11, true, false, [LABELS.VEGI], [CourseType.DESSERT], [], "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."),
  _19TIRAMISU: new Course("19tiramisu","Mango Tiramisu",9,true, false, [LABELS.VEGI], [CourseType.DESSERT], [Required.BLENDER], "sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."),
  _19LACHS: new Course("19lachsteller", "Lachs", 18, false, false, [LABELS.MSC], [CourseType.MAIN], [Required.STEAMER, Required.STOVE, Required.FRYINGPAN], "sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."),
  _19GREEKSALAD: new Course("19greekSalad", "Griechischer Salat", 14, true, false, [LABELS.VEGI, LABELS.BIO], [CourseType.STARTER], [Required.SALADSPINNER], "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."),
  _19PISTACHENUTS: new Course("19pistacheIceNuts", "Pistazien Glacé", 7, true, false, [LABELS.VEGI], [CourseType.DESSERT], [Required.SALADSPINNER, Required.FREEZER], "Dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."),
  _19BERRIES: new Course("19berries", "Beeren", 5, true, true, [LABELS.VEGAN], [CourseType.BERRIES], [], "Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."),
  _19SURPRISE: new Course("19surprise", "Surprise", 50, false, false, [], [CourseType.MAIN], [], "Lass dich von deinem Koch überraschen. Du erfährst erst am Abend, was es geben wird ;)"),
});

class Menu{
	constructor(name, courseSequence){
		this.name = name
		this.courseSequence = courseSequence
	}
}

class CourseSequence{
	constructor(Vorspeise, Hauptgang, Dessert, Beeren){
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

		this.Beeren = Beeren
		if(Beeren != null){
			this.Beeren.courseType = "Beeren"
			this.courses.push(Beeren)
		}		
	}
}

const MENUS = Object.freeze({
	_19EXAMPLE2GÄNGER: new Menu("Kaiser Alex", new CourseSequence(null, COURSES._19PIZZA, COURSES._19TIRAMISU, null)),
	_19EXAMPLE3GÄNGER: new Menu("Julius Caesar", new CourseSequence(COURSES._19AVOCADOSALAD, COURSES._19LACHS, COURSES._19CREMEFRUECHTE, null)),
	_19EXAMPLE4GÄNGER: new Menu("Kleopatra", new CourseSequence(COURSES._19GREEKSALAD, COURSES._19LACHS, COURSES._19PISTACHENUTS, COURSES._19BERRIES)),
	_19SURPRISE: new Menu("Surprise", new CourseSequence(null, COURSES._19SURPRISE, null,null)),
});

var data = function(){
	return {
		COURSES,
		MENUS,
		selectedMenu: null,
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

.selected-menu{
	-webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
  	filter: grayscale(0%);
	transition:0.5s;
	transform: scale(1.1);
	cursor:default;
	}

.small-gray-txt {
	color: gray;
	font-size:0.7em
}

.line-height-low{
	line-height:1.2
}

.label-button{
	cursor:default;
}

.label-button:hover{
	text-decoration: none;
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
