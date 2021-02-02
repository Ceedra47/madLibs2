function createParagraph(){
    var wordOne = document.getElementById('adjectiveone').value;
    var wordTwo = document.getElementById('nameone').value;
    var wordThree = document.getElementById('numberone').value;
    var wordFour = document.getElementById('nametwo').value;
    var wordFive = document.getElementById('relativeone').value;
    var wordSix = document.getElementById('namethree').value;
    var wordSeven = document.getElementById('placeone').value;
    var wordEight = document.getElementById('placetwo').value;
    var wordNine = document.getElementById('nountwo').value;
    var wordTen = document.getElementById('adjectivethree').value;
    var wordEleven = document.getElementById('personone').value;
    var wordTwelve = document.getElementById('adjectivefour').value;
  

    
    
    var paragraph= '<p>A new and '+ wordOne  +' fairy princess movie is coming out soon! It will be about snow '+ wordTwo +' and the '+ wordThree +' dwarfs. Snow '+ wordFour +' is a princess whose beauty threatens her '+ wordFive +' , the queen. Snow '+ wordSix +' is forced to flee from '+ wordSeven +' and hides in nearby '+ wordEight +' . But the queen finds her and casts a '+ wordNine +' spell on her. The dwarfs take care of her until the '+ wordTen +' '+ wordEleven +' comes to rescue her, and they all live '+ wordTwelve +' ever after! </p>'
    
    
   
    
    console.log(paragraph);
        document.getElementById('answer').innerHTML = paragraph;
}