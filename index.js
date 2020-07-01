var randomnumber1 = Math.random();
randomnumber1 = randomnumber1 * 6;
randomnumber1 = Math.floor(randomnumber1)+1;
var randonimage = "images/dice"+randomnumber1+".png";
var lol = document.querySelectorAll("img")[0];
lol.setAttribute("src",randonimage);

var randomnumber2 = Math.random();
randomnumber2 = randomnumber2 * 6;
randomnumber2 = Math.floor(randomnumber2)+1;
var nextimg = "images/dice" + randomnumber2 + ".png";
var panda = document.querySelectorAll("img")[1];
panda.setAttribute("src",nextimg);

if(randomnumber1>randomnumber2)
{
  var heading = document.querySelector("h1");
  heading.innerHTML = "🚩Player1 Wins";

}
else if(randomnumber1<randomnumber2)
{
  var heading = document.querySelector("h1");
  heading.innerHTML = "Player2 Wins🚩";
}
else{
  var heading = document.querySelector("h1").innerHTML = "🚩Draw🚩";
}
