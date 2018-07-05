var dropMenu = document.getElementById('drop-menu');
dropMenu.addEventListener('change', carregaProgramadoras);



// function carregaMenu(){

// };

function carregaProgramadoras(){
	var sede = dropMenu.value;
	var listaProgramadoras = document.getElementById('exibe-programadoras');
	listaProgramadoras.innerHTML = '';
	for (turma in data[sede]) {
		for (i in data[sede][turma]['students']) {
			var img = document.createElement('img');
			img.src = data[sede][turma]['students'][i]['photo'];
			listaProgramadoras.appendChild(img);
		}
	}
};
