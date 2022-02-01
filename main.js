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

function handle_element(main_element, first_anti_element, second_anti_element) {
	main_element.addEventListener('change', e => {
		remaining_points = total_perks - main_element.value - first_anti_element.value - second_anti_element.value;
		first_anti_element.setAttribute('max', total_perks - main_element.value - second_anti_element.value);
		second_anti_element.setAttribute('max', total_perks - main_element.value - first_anti_element.value);
		perks_element.innerText = remaining_points;
	});
}

handle_element(attack_element, defence_element, life_element);
handle_element(defence_element, life_element, attack_element);
handle_element(life_element, attack_element, defence_element);
