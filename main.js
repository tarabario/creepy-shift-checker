const boxes = document.querySelectorAll('input[type="checkbox"]');

let lastChecked;

const handleCheck = (e) => {
	let inBetween = false;
	if (e.shiftKey && e.target.checked) {

		boxes.forEach(box => {
			if (box === e.target || box === lastChecked) {
				inBetween = !inBetween;
			}
			if (inBetween) box.checked = true;
		})

	}

	lastChecked = e.target;
}

boxes.forEach(box => box.addEventListener('click', handleCheck));