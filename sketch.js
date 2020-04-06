
var img;
var imgClone;
 
var mk;
var drawMode
var formRefX
var formRefY
var formMouseX
var formMouseY
function setup() {
  createCanvas(max(windowWidth,800),max(windowHeight,445));
  img = createGraphics(width, height);
  mk = createGraphics(width, height);
  
  sel = createSelect();
  
  sel.option('Pincel');
  sel.option('Goma');
  sel.option('Linea');
  sel.option('Elipse');
  sel.selected('Pincel');
  sel.changed(drawMode);
  sel.position(530,10);

  clearButton = createButton('Limpiar lienzo');
  clearButton.mousePressed(() => img.clear());
  clearButton.position(670,10)
  
  brushSizeSlider = createSlider(1,50,10,0.5);
  brushSizeSlider.position(80,10);
  
  brushColorTable = createColorPicker('#000000');
  brushColorTable.position(250,10);
  
  backgroundColorTable = createColorPicker('#ffffff');
  backgroundColorTable.position(380,10);
  backgroundColorTable.changed(backgroundChange);
  background(backgroundColorTable.color())
  drawMode = 1
  formRefX = -1
  formRefY = -1
  formMouseX = -1
  formMouseY = -1
  
}


function draw() {
  if(drawMode === 1){
    mk.clear()
    drawPencil()     
  }
  if(drawMode === 2){ 
    mk.clear()
    drawEraser()
  }
  if(drawMode ===3 ){
    mk.clear()
    drawPointer()
    if(formRefX != -1)drawTempLine();
  }
  if(drawMode ===4 ){
    mk.clear()
    drawPointer()
    if(formRefX != -1)drawTempCircle();
    
  }
   if(keyIsPressed && key === '+'){
    if(brushSizeSlider.value() <= 45.5)brushSizeSlider.value(brushSizeSlider.value() +  0.5)
  }
  if(keyIsPressed && key === '-'){
    if(brushSizeSlider.value() >= 1.5)brushSizeSlider.value(brushSizeSlider.value() -  0.5)
  }
  
  background(backgroundColorTable.color())
  
  //( imgClone = img.get() ).mask( mk.get() );
  image(img, 0, 0);
  image(mk,0,0)
  drawInterface();

}

function drawInterface() {
  fill(200)
  rect(0,0,width,45)
  fill(0)
  text('Pincel       -',15,25)
  text('+',220,25)
  line(310,0,310,45)
  text('Fondo',330,25)
  line(450,0,450,45)
  text('Modo :',480,25)
  line(660,0,660,45)
}

function backgroundChange(){
  background(backgroundColorTable.color());
}

function mousePressed(){
  if(mouseY < 45) return
  if(mouseButton === LEFT && drawMode === 1) drawBrush(0);
  if(mouseButton === LEFT && drawMode === 2) drawBrush(2);
  if(mouseButton === LEFT  && (drawMode === 3 || drawMode === 4)){
    formRefX = mouseX
    formRefY = mouseY
  }
}

function mouseDragged() {
  if(mouseY < 45) return
  if(mouseButton === LEFT && drawMode === 1) drawBrush(1);
  if(mouseButton === LEFT && drawMode === 2) drawBrush(3);
  if(mouseButton === LEFT && (drawMode === 3 || drawMode === 4) ){
    /*if(formRefX === -1){
      formRefX = mouseX
      formRefY = mouseY
    }*/
  }
}

function mouseReleased(){
  mk.clear()
  if(drawMode === 3 && formRefX != -1){
    drawLine()
  }
  if(drawMode === 4 && formRefX != -1){
    drawCircle()
  }
  formRefX = -1
  formRefY = -1
  
}

function drawBrush(mode){
  if(mouseY > 0){
    push();
    switch(mode){
      case 0:
        img.fill(brushColorTable.color());
        img.strokeWeight(0)
        img.circle(mouseX,mouseY,brushSizeSlider.value())
        break;
      case 1:
        img.stroke(brushColorTable.color());
        img.strokeWeight(brushSizeSlider.value())
        img.line(pmouseX,pmouseY,mouseX,mouseY);
        break;
      case 2:
        img.erase()
        //img.fill(backgroundColorTable.color());
        
        img.strokeWeight(0)
        img.stroke(brushColorTable.color());
        img.circle(mouseX,mouseY,brushSizeSlider.value())
        img.noErase()
        break;
      case 3:
        img.erase()
        img.stroke(backgroundColorTable.color());
        img.strokeWeight(brushSizeSlider.value())
        img.line(pmouseX,pmouseY,mouseX,mouseY);
        img.noErase()
        break;
    }
    pop();
  }
}

function drawEraser(){
  mk.strokeWeight(1)
  mk.stroke(0);
  mk.fill(backgroundColorTable.color())
  mk.circle(mouseX,mouseY,brushSizeSlider.value())
}

function drawPencil(){
  mk.strokeWeight(0)
  mk.stroke(0);
  mk.fill(brushColorTable.color())
  mk.circle(mouseX,mouseY,brushSizeSlider.value())
}

function drawPointer(){
  mk.strokeWeight(1)
  mk.stroke(0);
  mk.line(mouseX-4,mouseY,mouseX + 4, mouseY)
  mk.line(mouseX,mouseY-4,mouseX , mouseY+ 4)
}

function drawTempLine(){
    mk.stroke(brushColorTable.color())
    mk.strokeWeight(brushSizeSlider.value())
    mk.line(formRefX,formRefY,mouseX,mouseY)
}

function drawLine(){
  img.stroke(brushColorTable.color())
  img.strokeWeight(brushSizeSlider.value())
  img.line(formRefX,formRefY,mouseX,mouseY)
}

function drawTempCircle(){
  mk.ellipseMode(CORNER)
  mk.strokeWeight(0)
  mk.stroke(0);
  var posX = formRefX
  var posY = formRefY
  if(formRefX - mouseX > 0)posX = mouseX
  if(formRefY - mouseY > 0)posY = mouseY
  mk.fill(brushColorTable.color())
  mk.ellipse(posX,posY,formRefX - mouseX ,formRefY - mouseY  )
}
function drawCircle(){
  img.ellipseMode(CORNER)
  img.strokeWeight(0)
  img.stroke(0);
  var posX = formRefX
  var posY = formRefY
  if(formRefX - mouseX > 0)posX = mouseX
  if(formRefY - mouseY > 0)posY = mouseY
  img.fill(brushColorTable.color())
  img.ellipse(posX,posY,formRefX - mouseX ,formRefY - mouseY  )
}

function keyReleased() {
  mk.clear()
  if(keyCode === BACKSPACE) img.clear()
  if(key === ' '){  
      formRefX = -1
      formRefY = -1

  }

}

function drawMode(){
  switch(sel.value()){
  case "Pincel": 
      drawMode = 1;
      mk.ellipseMode(CENTER)
      img.ellipseMode(CENTER)
      break;
    case "Goma": 
      drawMode = 2; 
      mk.ellipseMode(CENTER)
      img.ellipseMode(CENTER)
      break;
    case "Linea": 
      drawMode = 3; 
      mk.ellipseMode(CENTER)
      img.ellipseMode(CENTER)
      break;
    case 'Elipse': 
      drawMode = 4; 
      mk.ellipseMode(CORNER)
      img.ellipseMode(CORNER)
      break;
  }
}
