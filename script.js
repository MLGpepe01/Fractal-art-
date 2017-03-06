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
right(120);
forward(sideLegnth);
right(120);
forward(sideLegnth);
right(120);
forward(sideLegnth);
right(60);
stamp();
}


// Type your function call below


function hexagon(sideLegnth){
triangle(sideLegnth);
triangle(sideLegnth);
triangle(sideLegnth);
triangle(sideLegnth);
triangle(sideLegnth);
triangle(sideLegnth);

}

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

house(90)