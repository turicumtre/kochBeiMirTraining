function toggleActive(menuNo) {
	var menu1ClassList = document.getElementById("menu1").classList;
	var menu2ClassList = document.getElementById("menu2").classList;
	var menu3ClassList = document.getElementById("menu3").classList;

	if (menuNo === 1) menu1ClassList.add("active");
	else menu1ClassList.remove("active");
	if (menuNo === 2) menu2ClassList.add("active");
	else menu2ClassList.remove("active");
	if (menuNo === 3) menu3ClassList.add("active");
	else menu3ClassList.remove("active");
}
