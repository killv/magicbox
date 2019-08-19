//-- Magicbox

let results = []
let cells = []

function init() {
	results = [
		document.getElementById('r0'),
		document.getElementById('r1'),
		document.getElementById('r2'),
		document.getElementById('r3'),
		document.getElementById('r4'),
		document.getElementById('r5'),
		document.getElementById('r6'),
		document.getElementById('r7'),
		document.getElementById('r8'),
		document.getElementById('r9'),
		document.getElementById('r10'),
		document.getElementById('r11'),
		document.getElementById('r12'),
		document.getElementById('r13'),
		document.getElementById('r14'),
		document.getElementById('r15'),
		document.getElementById('r16'),
		document.getElementById('r17'),
		document.getElementById('r18'),
		document.getElementById('r19')
	];

	updateCells();

	let nCells = Array.prototype.slice.call(document.getElementsByClassName('n-cell'));
	nCells.forEach((cell) => {
		cell.addEventListener('click', function() {
			if (selectBlock) return;

			if (!first) {
				first = this;
				first.classList.add('first');
			} else {
				selectBlock = true
				second = this;
				second.classList.add('second');
				setTimeout(() => {
					replace();
				}, 300);
			}
		});
	});

	let start = document.getElementById('start')
	let startBg = document.getElementById('startBg')
	start.addEventListener('click', function() {
		startBg.classList.add('hidden');
		fillCells();
		count();
	});
}

function updateCells() {
	cells = [
		document.getElementsByClassName('c0')[0],
		document.getElementsByClassName('c1')[0],
		document.getElementsByClassName('c2')[0],
		document.getElementsByClassName('c3')[0],
		document.getElementsByClassName('c4')[0],
		document.getElementsByClassName('c5')[0],
		document.getElementsByClassName('c6')[0],
		document.getElementsByClassName('c7')[0],
		document.getElementsByClassName('c8')[0],
		document.getElementsByClassName('c9')[0],
		document.getElementsByClassName('c10')[0],
		document.getElementsByClassName('c11')[0],
		document.getElementsByClassName('c12')[0],
		document.getElementsByClassName('c13')[0],
		document.getElementsByClassName('c14')[0],
		document.getElementsByClassName('c15')[0]
	];
}

function count() {
	results[0].innerText = results[19].innerText = Num(cells[0]) + Num(cells[5]) + Num(cells[10]) + Num(cells[15]);
	results[5].innerText = results[14].innerText = Num(cells[3]) + Num(cells[6]) + Num(cells[9]) + Num(cells[12]);
	results[6].innerText = results[7].innerText = Num(cells[0]) + Num(cells[1]) + Num(cells[2]) + Num(cells[3]);
	results[8].innerText = results[9].innerText = Num(cells[4]) + Num(cells[5]) + Num(cells[6]) + Num(cells[7]);
	results[10].innerText = results[11].innerText = Num(cells[8]) + Num(cells[9]) + Num(cells[10]) + Num(cells[11]);
	results[12].innerText = results[13].innerText = Num(cells[12]) + Num(cells[13]) + Num(cells[14]) + Num(cells[15]);
	results[1].innerText = results[15].innerText = Num(cells[0]) + Num(cells[4]) + Num(cells[8]) + Num(cells[12]);
	results[2].innerText = results[16].innerText = Num(cells[1]) + Num(cells[5]) + Num(cells[9]) + Num(cells[13]);
	results[3].innerText = results[17].innerText = Num(cells[2]) + Num(cells[6]) + Num(cells[10]) + Num(cells[14]);
	results[4].innerText = results[18].innerText = Num(cells[3]) + Num(cells[7]) + Num(cells[11]) + Num(cells[15]);

	checkResult();
}

function checkResult() {
	let finish = true;
	results.forEach((r) => {
		if (r.innerText == 34) {
			r.classList.add('correct');
		}
		else {
			finish = false;
			r.classList.remove('correct');
		}
	});
	if (finish) {
		console.log('Grats!')
		document.getElementById('start').classList.add('hidden')
		document.getElementById('startBg').classList.remove('hidden')
		document.getElementById('finish').classList.remove('hidden')
	}
}

function Num(cell) {
	return Number(cell.innerText);
}

function replace() {
	let firstPlace = first.classList[2];
	let secondPlace = second.classList[2];

	first.classList.remove(firstPlace);
	first.classList.add(secondPlace);

	second.classList.remove(secondPlace);
	second.classList.add(firstPlace);

	setTimeout(() => {
		first.classList.remove('first');
		second.classList.remove('second');
		first = null;
		second = null;

		updateCells();
		count();
		selectBlock = false;
		let counter = document.getElementById('counter');
		counter.innerHTML = parseInt(counter.innerHTML) + 1;
	}, 200);
}

function fillCells() {
	let nCells = Array.from(document.getElementsByClassName('n-cell'));
	for (let i = 1; i <= 16; i++) {
		index = Math.floor(Math.random() * (nCells.length));
		nCells[index].innerText = i;
		nCells.splice(index, 1);
	}
}

let first;
let second;
let selectBlock = false;

(() => {
	init();
})();