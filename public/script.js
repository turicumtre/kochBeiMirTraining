function toggleActive(selectedItem) {
	for (var i = 1; i <= 3; i++) {
		document.getElementById("menu" + i).classList.remove("active");
	}

	selectedItem.classList.add("active");
}
