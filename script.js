

let image1 = document.querySelector(".img1");

console.log(image1);

let image_Array = ["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];

let player1 = Math.floor(Math.random()*6);
image1.setAttribute("src",image_Array[player1]);


let image2 = document.querySelector(".img2");

let player2 = Math.floor(Math.random()*6)
image2.setAttribute("src",image_Array[player2]);


if(player1 > player2)
{
    document.querySelector("h1").innerHTML= "Player1 🚩";
}
else if(player1==player2)
{
    document.querySelector("h1").innerHTML = "Draw";
}
else
{
    document.querySelector("h1").innerHTML= "Player2 🚩";
}
