var dropMenu = document.getElementById("drop-menu");
dropMenu.addEventListener('change', clickEffect);
var takePic = document.querySelectorAll('.thumbs-item'); /*pega todos elementos de classe e retorna um array*/

function clickEffect() {
  takePic.forEach(pic => {
    var effect = dropMenu.value;
    if (effect === 'sepia') {
      pic.classList = 'thumbs-item';
      pic.classList.add('sepia');
    }
    if (effect === 'grayscale') {
      pic.classList = 'thumbs-item';
      pic.classList.add('grayscale');
    }
    if (effect === 'invert') {
      pic.classList = 'thumbs-item';
      pic.classList.add('invert');
    }
    if (effect === '') {
      pic.classList = 'thumbs-item';
    }
  });

}