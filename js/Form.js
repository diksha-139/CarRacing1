class Form {
  constructor() {
    this.input = createInput("Enter name")
    this.playButton = createButton("play");
    this.titleImg = createImg("assets/title.png");
    this.greeting = createElement("h1")
    
  }

  setElementsPosition(){
    this.titleImg.position(100,60);
    this.input.position(width/2 - 110,height/2 + 50);
    this.playButton.position(width/2 - 90 ,height/2 + 100);
    this.greeting.position(width/2 - 200,height/2 + 20)
  }

  display(){
    this.setElementsPosition();
   this.handleMousePressed()

}

handleMousePressed(){
  this.playButton.mousePressed(()=>{
    this.input.hide();
    this.playButton.hide();
    var message= "Hello    "+this.input.value()+"   Wait for othewrs to join..."
        this.greeting.html(message)
    
    }   )
      }

}