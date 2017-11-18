console.log('index.js');

function count() {
	var r1 = document.getElementById('r1');
	var r2 = document.getElementById('r2');
	var r3 = document.getElementById('r3');
	var r4 = document.getElementById('r4');
	var r5 = document.getElementById('r5');
	var r6 = document.getElementById('r6');
	var r7 = document.getElementById('r7');
	var r8 = document.getElementById('r8');
	var r9 = document.getElementById('r9');
	var r10 = document.getElementById('r10');
	var r11 = document.getElementById('r11');
	var r12 = document.getElementById('r12');
	var r13 = document.getElementById('r13');
	var r14 = document.getElementById('r14');
	var r15 = document.getElementById('r15');
	var r16 = document.getElementById('r16');
	var r17 = document.getElementById('r17');
	var r18 = document.getElementById('r18');
	var r19 = document.getElementById('r19');
	var r20 = document.getElementById('r20');

	var c1 = document.getElementsByClassName('c1')[0];
	var c2 = document.getElementsByClassName('c2')[0];
	var c3 = document.getElementsByClassName('c3')[0];
	var c4 = document.getElementsByClassName('c4')[0];
	var c5 = document.getElementsByClassName('c5')[0];
	var c6 = document.getElementsByClassName('c6')[0];
	var c7 = document.getElementsByClassName('c7')[0];
	var c8 = document.getElementsByClassName('c8')[0];
	var c9 = document.getElementsByClassName('c9')[0];
	var c10 = document.getElementsByClassName('c10')[0];
	var c11 = document.getElementsByClassName('c11')[0];
	var c12 = document.getElementsByClassName('c12')[0];
	var c13 = document.getElementsByClassName('c13')[0];
	var c14 = document.getElementsByClassName('c14')[0];
	var c15 = document.getElementsByClassName('c15')[0];
	var c16 = document.getElementsByClassName('c16')[0];

	r1.innerText = Number(c1.innerText) + Number(c6.innerText) + Number(c11.innerText) + Number(c16.innerText);
	r20.innerText = Number(c1.innerText) + Number(c6.innerText) + Number(c11.innerText) + Number(c16.innerText);

	r6.innerText = Number(c4.innerText) + Number(c7.innerText) + Number(c10.innerText) + Number(c13.innerText);
	r15.innerText = Number(c4.innerText) + Number(c7.innerText) + Number(c10.innerText) + Number(c13.innerText);

	r7.innerText = Number(c1.innerText) + Number(c2.innerText) + Number(c3.innerText) + Number(c4.innerText);
	r8.innerText = Number(c1.innerText) + Number(c2.innerText) + Number(c3.innerText) + Number(c4.innerText);

	r9.innerText = Number(c5.innerText) + Number(c6.innerText) + Number(c7.innerText) + Number(c8.innerText);
	r10.innerText = Number(c5.innerText) + Number(c6.innerText) + Number(c7.innerText) + Number(c8.innerText);

	r11.innerText = Number(c9.innerText) + Number(c10.innerText) + Number(c11.innerText) + Number(c12.innerText);
	r12.innerText = Number(c9.innerText) + Number(c10.innerText) + Number(c11.innerText) + Number(c12.innerText);

	r13.innerText = Number(c13.innerText) + Number(c14.innerText) + Number(c15.innerText) + Number(c16.innerText);
	r14.innerText = Number(c13.innerText) + Number(c14.innerText) + Number(c15.innerText) + Number(c16.innerText);

	r2.innerText = Number(c1.innerText) + Number(c5.innerText) + Number(c9.innerText) + Number(c13.innerText);
	r16.innerText = Number(c1.innerText) + Number(c5.innerText) + Number(c9.innerText) + Number(c13.innerText);

	r3.innerText = Number(c2.innerText) + Number(c6.innerText) + Number(c10.innerText) + Number(c14.innerText);
	r17.innerText = Number(c2.innerText) + Number(c6.innerText) + Number(c10.innerText) + Number(c14.innerText);

	r4.innerText = Number(c3.innerText) + Number(c7.innerText) + Number(c11.innerText) + Number(c15.innerText);
	r18.innerText = Number(c3.innerText) + Number(c7.innerText) + Number(c11.innerText) + Number(c15.innerText);

	r5.innerText = Number(c4.innerText) + Number(c8.innerText) + Number(c12.innerText) + Number(c16.innerText);
	r19.innerText = Number(c4.innerText) + Number(c8.innerText) + Number(c12.innerText) + Number(c16.innerText);
}

(() => {
	count();
})();