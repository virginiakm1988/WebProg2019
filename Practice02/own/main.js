var pictures = ['video','./images/meme01.jpg','./images/meme02.jpg','./images/meme03.jpg','./images/meme04.jpg','./images/meme05.jpg']
        var index = -1;
        
        function changeBtn(){
            document.getElementById('nextBtn').className = "newBtn";
            document.getElementById('backBtn').className = "newBtn";
        }

        function pending(){
            var picture = document.getElementById("display");
            picture.innerHTML = "<img src='./images/loading.gif'>";
            setTimeout('changeBtn()',1000);
           
        };

    
        function nextIMG(){
            if(index == pictures.length-1){
                index = 0;
            } 
            else{
                index = index+1;
            }
            pending();
            setTimeout('changeIMG(index)',1300);            
        }
        function backIMG(){
            if(index <= 0){
                index = pictures.length-1;
            }
            else{
                index = index-1;
            }
            pending();
            setTimeout('changeIMG(index)',1300);
                        
        };

        function changeIMG(index){
            document.getElementById('nextBtn').className = "image-viewer__button";
            document.getElementById('backBtn').className = "image-viewer__button";
            var picture = document.getElementById("display");

            console.log(index,pictures[index])
            if (pictures[index] == 'video') {
                picture.innerHTML = '<video id = "display" autoplay src="./images/go blah.mp4" controls="controls">';
            }
            else{
                picture.innerHTML = '<img src='+pictures[index]+'>';
            }

        }

        