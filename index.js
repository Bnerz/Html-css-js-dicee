var randomNumber1 = Math.ceil(Math.random() * 6);

var randomDiceImg = "dice" + randomNumber1 + ".png";

var randomImgSrc =  "images/" + randomDiceImg;

var image1 =  document.querySelectorAll("img")[0];
image1.setAttribute ("src", randomImgSrc);


var randomNumber2 = Math.ceil(Math.random() * 6);

var randomDiceImg = "dice" + randomNumber2 + ".png";

var randomImgSrc =  "images/" + randomDiceImg;

var image2 =  document.querySelectorAll("img")[1];
image2.setAttribute ("src", randomImgSrc);

if( randomNumber1 > randomNumber2){
document.querySelector("h1").innerHTML = "LADO ESQUERDO GANHOU!!!";
}
else if ( randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "LADO DIREITO GANHOU!!";
}else
document.querySelector("h1").innerHTML = "EMPATOU";
