function toggleActive(selectedItem) {
	for (var i = 1; i <= 3; i++) {
		document.getElementById("menu" + i).classList.remove("active");
	}

	selectedItem.classList.add("active");
}

function sendForm(e) {
	return false;
}

$("#formsendbutton").click(function(e) {
	document.getElementById("formthankyou").classList.toggle("d-none");
	document.getElementById("requestform").classList.toggle("d-none");
	e.preventDefault();
	// e.stopPropagation();
});
