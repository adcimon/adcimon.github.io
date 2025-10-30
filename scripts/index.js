window.addEventListener('load', main);

function main() {
	const params = new URLSearchParams(window.location.search);
	if (params.has('cv')) {
		prepareCV();
	}
}

function prepareCV() {
	const navbar = document.getElementById('navbar');
	if (navbar) {
		navbar.remove();
	}

	const sections = document.getElementById('sections');
	if (sections) {
		sections.classList.remove('col-lg-10');
		sections.classList.add('col-lg-12');
	}
}
