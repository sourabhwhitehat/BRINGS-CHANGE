class Form {

    constructor () {

    }
 
    show(){
        var input = createInput("Enter your Name");
        input.position(170,80);
        var button = createButton('Enter');
        button.position(220,140);

        button.mousePressed(function(){
            input.hide();
            button.hide();
        });     
   }
}