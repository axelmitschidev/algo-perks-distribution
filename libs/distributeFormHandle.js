function distribute_form_handle(total_points, display_element, ...input_elements) {
	display_element.textContent = total_points;
	input_elements.forEach(element => {
		element.setAttribute('max', total_points);
	});
	associating_elements(0, total_points, display_element, ...input_elements);
}

function associating_elements(remaining_points, total_points, display_element, ...arr_elements) {
	arr_elements.forEach((element, i) => {
		const arr_buff = [...arr_elements];
		arr_buff.splice(i, 1);
		console.log(...arr_buff);
		handle_element(remaining_points, total_points, display_element, element, ...arr_buff);
	});
}

function handle_element(remaining_points, total_points, display_element, main_element, ...anti_elements) {
	main_element.addEventListener('change', () => {
		const sum = anti_elements.reduce((acc, element) => acc + parseInt(element.value), 0);
		remaining_points = total_points - main_element.value - sum;
		main_element.setAttribute('max', total_points - sum);
		anti_elements.forEach(element => {
			element.setAttribute('max', total_points - main_element.value - (sum - element.value));
		});
		display_element.textContent = remaining_points;
	});
}

export default distribute_form_handle;
