// fetching all selectors id and classes using dom which will be used for further functions
let Boxes=document.querySelectorAll('.boxes .box');
let playbtn = document.querySelector("#color");
let easyBtn = document.querySelector("#easy");
let mediumBtn = document.querySelector("#medium");
let hardBtn = document.querySelector("#hard");
let newGame = document.querySelector("#newgame");
let h1=document.querySelector('.h1');
let colors=generateRandomColors(6);

let pickedColor = colors[Math.floor(Math.random() * 6)];//this will be set the which colour is you choose from all boxes to match with the  new colour generate


let boxCount=6;//this is normal count of boxes
// console.log(boxCount);
// let x=document.getElementsByClassName(".header");
// x.style.background="black";
//it genreate the all boxes when you click on the hard button
hardBtn.addEventListener('click',()=>{
  boxCount=6;
 
  hardBtn.style.background="rgb(147, 147, 213)";
  easyBtn.style.background ="none";
  mediumBtn.style.background ="none";
  colors=generateRandomColors(boxCount);
  console.log(colors);
  pickedColor = colors[Math.floor(Math.random() * 6)];
  console.log(colors.length)
  //required to set all box display block beacause if we set display none for easy than it will be not visible for hard
  for (let i = 0; i < Boxes.length; i++) {
  
    Boxes[i].style.display = "block";
   

}
  for (let i = 0; i < Boxes.length; i++) {
  
          Boxes[i].style.background = colors[i];
         
      
  }
})
mediumBtn.addEventListener('click',()=>{
  boxCount = 5;
  mediumBtn.style.background = "rgb(147, 147, 213)";
  hardBtn.style.background ="none";
  easyBtn.style.background ="none";
  colors=generateRandomColors(boxCount);
  console.log(colors);
  pickedColor = colors[Math.floor(Math.random() * 3)];
  console.log(colors.length)
  for (let i = 0; i < Boxes.length; i++) {
  
    Boxes[i].style.display = "block";
   

}
  for (let i = 0; i < Boxes.length ; i++) {
      if (colors[i]) {
          Boxes[i].style.background = colors[i];
         
      } else {
          Boxes[i].style.display = "none";
      }
  }
});
easyBtn.addEventListener('click',()=>{
  boxCount = 3;
  easyBtn.style.background = "rgb(147, 147, 213)";
  hardBtn.style.background ="none";
  mediumBtn.style.background ="none";
  colors=generateRandomColors(boxCount);
  console.log(colors);
  pickedColor = colors[Math.floor(Math.random() * 3)];
  console.log(colors.length)
  for (let i = 0; i < Boxes.length ; i++) {
      if (colors[i]) {
          Boxes[i].style.background = colors[i];
         
      } else {
          Boxes[i].style.display = "none";
      }
  }
});
playbtn.addEventListener("click",()=>{
  // document.querySelector(".header").style.background = "rgb(233, 119, 119)";

  // statusText.textContent = "Let's Play!!";
  easyBtn.style.background ="none";
  hardBtn.style.background ="none";
  colors =generateRandomColors(boxCount);
  console.log(colors);
  console.log(colors.length);
  pickedColor = colors[Math.floor(Math.random() * boxCount)];
  h1.textContent = pickedColor;
  for (let i = 0; i < Boxes.length; i++) {
      Boxes[i].style.background = colors[i];
  }
});
newGame.addEventListener("click",()=>{
  // document.querySelector(".header").style.background = "rgb(233, 119, 119)";

  // statusText.textContent = "Let's Play!!";
  easyBtn.style.background ="none";
  hardBtn.style.background ="none";
  mediumBtn.style.background ="none";
  colors =generateRandomColors(boxCount);
  console.log(colors);
  console.log(colors.length);
  pickedColor = colors[Math.floor(Math.random() * boxCount)];
  h1.textContent = pickedColor;
  for (let i = 0; i < Boxes.length; i++) {
      Boxes[i].style.background = colors[i];
  }
});

//if we clicked on the box and it match than it will be set the all boxes to same colour 
for(let i=0;i<colors.length;i++){
Boxes[i].style.background=colors[i];
Boxes[i].addEventListener('click',()=>{
  let color=colors[i];
  if(color===pickedColor){
    for(let i=0;i<colors.length;i++){
      Boxes[i].style.background=pickedColor;
    }
   
  }
  else{
    Boxes[i].style.background="none";
  }
})
}

function generateRandomColors(num){
let arr=[];
for(let i=0;i<num;i++){
  arr.push(randomColor());
}
return arr;
console.log(arr);
}
function randomColor(){
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}