let img = document.getElementById("imgcarousel");
window.onload = () => {
  setInterval(() => {
    index++;
    if (index == 4) {
      index = 1;
    }
    img.src = `./assets/img/hinh${index}.jpg`;
  }, 4000);
};

let index = 2;

const prevIMG = () => {
  index--;
  if (index == 0) {
    index = 3;
  }
  return (img.src = `./assets/img/hinh${index}.jpg`);
};

const nextIMG = () => {
  index++;
  if (index == 4) {
    index = 1;
  }
  return (img.src = `./assets/img/hinh${index}.jpg`);
};
