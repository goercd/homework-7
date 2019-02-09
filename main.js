(function(){

 
    function recursion() {        
        const child = document.getElementById('ChildBlock');  
        const hypnoticToad = document.querySelector('.hypnoticToad');
          
 

		
        function catchParent(el) {   
            drawGreen(el);             
            const parent = el.parentNode;
            const id = parent.getAttribute('id')                 
            if(!id) {
                setTimeout(() => {
                    drawGreen(parent);
                    catchParent(parent)
                }, 300);        
            } else {
                decorateChildren(parent);
                drawGreen(parent)                      
            };
        }


		
        function decorateChildren(el) {         
            const child = filterChild(el)[0];                   
            
            if(count === attempt) {
                hypnoticToad.appendChild(img);
                return;
            } 

            if(child) {
                setTimeout(() => {
                    drawBlack(child);                
                    decorateChildren(child);
                }, 300)            
            } else {            
                count++;        
                setTimeout(() => {
                    drawBlack(el);
                    catchParent(el);
                }, 300)                        
            }
        }
        
   
    
	console.log(document.querySelector('deepChild')); 
	
	
		console.log(document.querySelector('sibling first')); 
		for(let i = 0; i < 100; i++) {
            div.style.margins = 'red';
          }
		
		console.log(document.querySelector('sibling second')); 
		for(let i = 0; i < 100; i++) {
             div.style.margins = 'green';            
		}
		
		console.log(document.querySelector('deepChild'));
	
	
    }