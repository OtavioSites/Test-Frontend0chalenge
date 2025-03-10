    
    var count = 0;

    document.querySelectorAll(".opcao").forEach((element) => {
        
        let el = 'on';
        
       
        let style = document.querySelector("style");
        style.textContent += `
            .opcao:hover{
                background-color: hsl(25, 97%, 53%);
             `; 
            
        //Quando precisar usar style no javascript, atribua o style por ele mesmo no javascript e depois
        //Usa ele com textContent usando += para acrescentar conteudo
          
        element.addEventListener('click', function(){
           
            
            
            if(el == 'on'){
                
                 element.style.backgroundColor = "hsl(0, 0%, 100%)";
                 element.style.color = "hsl(213, 19%, 18%)";
                  
                
                 count++
                
                 el =  'off';
                
                
                
                 console.log(el);
                 
                 

            }else if(el == 'off'){
                
                
                element.style.backgroundColor = "hsla(215, 18%, 19%, 1)";
                element.style.color = "";
                
               
                count--
                

                el = 'on';
                console.log(el);
                
            }
            
          
            console.log(count);
        });
        

    })
   document.getElementById('EndRate').style.display = "none";
   function submit(){
   let submit = document.getElementById('Submit');
   let div1 =  document.getElementById('EndRate');
   let div2 = document.getElementById('StarterRate');
   let text = document.getElementById('RateCount');

        text.innerHTML = "You selected "+count+" out of 5";
        div1.style.display = "flex";
        div2.style.display = "none";


  }
   

