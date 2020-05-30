let imagesArr = [
  "./images/8.jpg",
  "./images/1.jpg",
  "./images/2.jpg",
  "./images/3.jpg",
  "./images/4.jpg",
  "./images/5.jpg",
  "./images/6.jpg",
  "./images/7.jpg"
];
let tableReference = document.querySelector("table");
imagesArr = imagesArr.concat(imagesArr);
function randomizer(imgArr) {
  imgArr.sort((a, b) => {
    if (Math.random() > 0.5) return -1;
    else return 1;
  });
}
function DrawTable(imgArr, img) {
  let mainDiv = document.createElement("div");
  let counter = 0;
  for (let i = 0; i < parseInt(Math.sqrt(imgArr.length)); i++) {
    mainDiv.append(document.createElement("tr"));
    for (let x = 0; x < parseInt(Math.sqrt(imgArr.length)); x++) {
      let intermediateTd = document.createElement("td");
      let imgTagIntermediate = document.createElement("img");
      imgTagIntermediate.src = img;
      imgTagIntermediate.id = counter;
      counter++;
      intermediateTd.append(imgTagIntermediate);
      mainDiv.querySelectorAll("tr")[i].append(intermediateTd);
    }
  }
  return mainDiv;
}
randomizer(imagesArr);
tableReference.append(DrawTable(imagesArr, "./images/0.jpg"));
let count = 1;
let intermediatepicture = [];
tableReference.addEventListener("click", function() {
  if (document.getElementById(`${event.target.id}`).src =="http://127.0.0.1:5500/Day8/GameAssignment/images/0.jpg") {
     intermediatepicture.push(event.target.id);
    document.getElementById(`${event.target.id}`).src =
    imagesArr[event.target.id];
    count++;
    if (count == 3) {
      if (imagesArr[parseInt(intermediatepicture[0])] !=imagesArr[parseInt(intermediatepicture[1])]) {
        setTimeout(() => {
          document.getElementById(`${parseInt(intermediatepicture[0])}`).src ="./images/0.jpg";
          document.getElementById(`${parseInt(intermediatepicture[1])}`).src ="./images/0.jpg";
          count = 1;
          intermediatepicture = [];
        }, 500);
      } else {
        count = 1;
        intermediatepicture = [];
      }
    }
  }
});
