TinyTurtle.apply(window, [undefined, 400, 400]);









function square(sideLegnth){
forward(sideLegnth);
right(90);
forward(sideLegnth);
right(90);
forward(sideLegnth);
right(90);
forward(sideLegnth);
right(90);
forward(sideLegnth);
}
function triangle(sideLegnth){
for(
        var i =0; i<3; i =i+1){
        forward(sideLegnth);
        
          right(120);  
            
        }

stamp();
}


// Type your function call below


function hexagon(sideLegnth){
    for(
        var i =0; i<6; i =i+1){
        triangle(sideLegnth)
        right(45)
            
            
        }
        


};

function rectangle(sideLegnth){
forward(sideLegnth/2);
right(90);
forward(sideLegnth);
right(90);
forward(sideLegnth/2);
right(90);
forward(sideLegnth);
    stamp()
}

function pentagon (sideLegnth){
     forward(sideLegnth);
    right(72);
    forward(sideLegnth);
    right(72);
    forward(sideLegnth);
    right(72)
    forward(sideLegnth);
    right(72);
    forward(sideLegnth);
    right(73)
    
}
 
 function house (sideLegnth){
     
     square(sideLegnth);
     right(270)
     triangle(sideLegnth);
     right(90)
     
 }

     function kek (X,Y){
         
          for(
        var i =0; i<15; i =i+1){
        hexagon(X)
        right(Y)
            
            
        }
     }
    kek(200,5)