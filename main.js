const points = document.getElementById('point')
const attack = document.getElementById('attack')
const defence = document.getElementById('defence')
const life = document.getElementById('life')

const total_points = 100;

points.innerText = total_points;
attack.setAttribute('max', total_points)
defence.setAttribute('max', total_points)
life.setAttribute('max', total_points)

let remaining_points = 0;

attack.addEventListener('change', e => {
	if (remaining_points <= total_points) {
		remaining_points = total_points - attack.value - defence.value - life.value;
		defence.setAttribute('max', total_points - attack.value - life.value)
		life.setAttribute('max', total_points - attack.value - defence.value)
		points.innerText = remaining_points;
	}
})

defence.addEventListener('change',  e => {
	if (remaining_points <= total_points) {
		remaining_points = total_points - attack.value - defence.value - life.value;
		attack.setAttribute('max',  total_points - defence.value - life.value)
		life.setAttribute('max',  total_points - attack.value - defence.value)
		points.innerText = remaining_points;
	}
})

life.addEventListener('change',  e => {
	if (remaining_points <= total_points) {
		remaining_points = total_points - attack.value - defence.value - life.value;
		attack.setAttribute('max', total_points - life.value - defence.value)
		defence.setAttribute('max', total_points - attack.value - life.value)
		points.innerText = remaining_points;
	}
})

/* copyright Axel MITSCHI */

