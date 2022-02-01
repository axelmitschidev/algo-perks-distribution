const perks_element = document.getElementById('perks-input');
const attack_element = document.getElementById('attack-input');
const defence_element = document.getElementById('defence-input');
const life_element = document.getElementById('life-input');

const total_perks = 10;

perks_element.innerText = total_perks;

attack_element.setAttribute('max', total_perks);
defence_element.setAttribute('max', total_perks);
life_element.setAttribute('max', total_perks);

let remaining_points = 0;

attack_element.addEventListener('change', e => {
	remaining_points = total_perks - attack_element.value - defence_element.value - life_element.value;
	defence_element.setAttribute('max', total_perks - attack_element.value - life_element.value);
	life_element.setAttribute('max', total_perks - attack_element.value - defence_element.value);
	perks_element.innerText = remaining_points;
});

defence_element.addEventListener('change', e => {
	remaining_points = total_perks - attack_element.value - defence_element.value - life_element.value;
	attack_element.setAttribute('max',  total_perks - defence_element.value - life_element.value)
	life_element.setAttribute('max',  total_perks - attack_element.value - defence_element.value)
	perks_element.innerText = remaining_points;
});

life_element.addEventListener('change', e => {
	remaining_points = total_perks - attack_element.value - defence_element.value - life_element.value;
	attack_element.setAttribute('max', total_perks - life_element.value - defence_element.value)
	defence_element.setAttribute('max', total_perks - attack_element.value - life_element.value)
	perks_element.innerText = remaining_points;
});
