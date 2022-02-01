const perks_element = document.getElementById('perks-input');
const attack_element = document.getElementById('attack-input');
const defence_element = document.getElementById('defence-input');
const life_element = document.getElementById('life-input');

const total_points = 10;

perks_element.innerText = total_points;

attack_element.setAttribute('max', total_points);
defence_element.setAttribute('max', total_points);
life_element.setAttribute('max', total_points);

let remaining_points = 0;

attack_element.addEventListener('change', e => {
	if (remaining_points <= total_points) {
		remaining_points = total_points - attack_element.value - defence_element.value - life_element.value;
		defence_element.setAttribute('max', total_points - attack_element.value - life_element.value);
		life_element.setAttribute('max', total_points - attack_element.value - defence_element.value);
		perks_element.innerText = remaining_points;
	}
});

defence_element.addEventListener('change', e => {
	if (remaining_points <= total_points) {
		remaining_points = total_points - attack_element.value - defence_element.value - life_element.value;
		attack_element.setAttribute('max',  total_points - defence_element.value - life_element.value)
		life_element.setAttribute('max',  total_points - attack_element.value - defence_element.value)
		perks_element.innerText = remaining_points;
	}
});

life_element.addEventListener('change', e => {
	if (remaining_points <= total_points) {
		remaining_points = total_points - attack_element.value - defence_element.value - life_element.value;
		attack_element.setAttribute('max', total_points - life_element.value - defence_element.value)
		defence_element.setAttribute('max', total_points - attack_element.value - life_element.value)
		perks_element.innerText = remaining_points;
	}
});
