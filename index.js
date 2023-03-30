var imagem = document.querySelectorAll("img")[0];
var btn = document.querySelector("#btn");

btn.addEventListener("click", function(){

                var i = 0;
                var intervalId = setInterval(function (){
                        console.log(i);
                        if(i == 21)
                        clearInterval(intervalId)
                        i++;      
                        var imgChosed = "ArmatureEstrela" + i + ".png";
                        var imageFont = "AnimEstrela/" + imgChosed;
                        imagem.setAttribute("src", imageFont );  
                      
                }, 80);
             
                
});

