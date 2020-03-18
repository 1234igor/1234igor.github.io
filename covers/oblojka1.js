var bg;

var name = "";
var author = "";

let backgroundH;
let backgroundS;
let backgroundB;


w = 1600;
h = 2560;

function setup() {
  
    bg = createGraphics(w, h);
  bg.noStroke();
    bg.background("#FF0000");

  
    scl = 5;
    var canvas = createCanvas(w/scl, h/scl);
  
    addFrontEnd();
    
    canvas.parent('sketch-holder');

  btn.click();

}

function draw() {
  
}

function addFrontEnd() {
    nameTextField = document.getElementById('name_text_box');
    nameTextField.setAttribute("type", "text");
    nameTextField.value = "WAR AND PEACE"
  
  
  authorTextField = document.getElementById('author_text_box');
    authorTextField.setAttribute("type", "text");
  authorTextField.value = "LEO TOLSTOY"

  
  btn = document.getElementById('generate_button');
    btn.onclick = e => {
      create(nameTextField.value, authorTextField.value);
    };
}

function create(name, author) {
  
  

  setStrings(name, author);
  
  bg.colorMode(HSB, 100);
  
  
   backgroundH = random(0,100);
  backgroundS = random(100,100);
 backgroundB = random(100,100);
  bg.background(backgroundH, backgroundS, backgroundB);

  let illustrationH = (backgroundH+random(20,40))%100;
  let illustrationS = random(60,60);
  let illustrationB = random(100,100);
  bg.fill(illustrationH, illustrationS, illustrationB);
  
  let diceDrop = int(random(0, 6))
  switch (diceDrop) {
    case 0:
      drawSquares();
      break;
    case 1:
      drawCircles();
      break;
     case 2:
      drawTriangles();
      break;
      case 3:
      drawRoundedSquares();
      break;
      case 4:
      drawRandomSquares();
      break;
      case 5:
      drawRandomCircles();
      break;
  }
  
  
  bg.fill((illustrationH+random(20,40))%100, 100, 100);
  addText();
  
  

  
  

  image(bg, 0, 0, width, height);
}


function drawRandomSquares(){
  let iCount = random(0,5);
  let jCount = random(0,5);
  let kalWidth = random(w/2, w*7/8);
  let kalHeight = random(h/2, h*5/6);
  let iGap = random(kalWidth/iCount/15, kalWidth/iCount);
  let jGap = random(kalHeight/jCount/15, kalHeight/jCount/2);
  let rectWidth = (kalWidth - iCount*iGap)/iCount;
  let rectHeight = (kalHeight - jCount*jGap)/jCount;
  let xStart = random(0,w-kalHeight/2);
  let yStart = random(0,h-kalWidth/2);
  
  let roundedness = random(0,min(kalWidth,kalHeight)/16)
  
  for (let i = 0; i<iCount; i++) {
    for (let j = 0; j<jCount; j++) {
    bg.rect(xStart+i*rectWidth+i*iGap+random(kalWidth/2), yStart+j*rectHeight+j*jGap+random(kalHeight/2), random(rectWidth/2,rectWidth), random(rectHeight/2, rectHeight), roundedness); 
  }
  }
  
}

function drawRandomCircles(){
  let iCount = random(0,5);
  let jCount = random(0,5);
  let kalWidth = random(w/2, w*7/8);
  let kalHeight = random(h/2, h*5/6);
  let iGap = random(kalWidth/iCount/15, kalWidth/iCount);
  let jGap = random(kalHeight/jCount/15, kalHeight/jCount);
  let rectWidth = (kalWidth - iCount*iGap)/iCount;
  let rectHeight = (kalHeight - jCount*jGap)/jCount;
  let xStart = random(0,w-kalHeight/2);
  let yStart = random(0,h-kalWidth/2);
  
 
  
  for (let i = 0; i<iCount; i++) {
    for (let j = 0; j<jCount; j++) {
    bg.ellipse(xStart+i*rectWidth+i*iGap+random(kalWidth/2), yStart+j*rectHeight+j*jGap+random(kalHeight/2), random(rectWidth/2,rectWidth), random(rectHeight/2, rectHeight)); 
  }
  }
  
}

function drawRoundedSquares(){
  let iCount = random(10);
  let jCount = random(10);
  let kalWidth = random(w/3, w*7/8);
  let kalHeight = random(h/6, h*5/6);
  let iGap = random(kalWidth/iCount/15, kalWidth/iCount);
  let jGap = random(kalHeight/jCount/15, kalHeight/jCount);
  let rectWidth = (kalWidth - iCount*iGap)/iCount;
  let rectHeight = (kalHeight - jCount*jGap)/jCount;
  let xStart = random(0,w-kalHeight/2);
  let yStart = random(0,h-kalWidth/2);
  let roundedness = random(0,min(kalWidth,kalHeight)/16)
  
  for (let i = 0; i<iCount; i++) {
    for (let j = 0; j<jCount; j++) {
    bg.rect(xStart+i*rectWidth+i*iGap, yStart+j*rectHeight+j*jGap, rectWidth, rectHeight, roundedness); 
  }
  }
  
}

function drawSquares(){
  let iCount = random(10);
  let jCount = random(10);
  let kalWidth = random(w/3, w*7/8);
  let kalHeight = random(h/6, h*5/6);
  let iGap = random(kalWidth/iCount/15, kalWidth/iCount);
  let jGap = random(kalHeight/jCount/15, kalHeight/jCount);
  let rectWidth = (kalWidth - iCount*iGap)/iCount;
  let rectHeight = (kalHeight - jCount*jGap)/jCount;
  let xStart = random(0,w-kalHeight/2);
  let yStart = random(0,h-kalWidth/2);
  let roundedness = 0;
  
  for (let i = 0; i<iCount; i++) {
    for (let j = 0; j<jCount; j++) {
    bg.rect(xStart+i*rectWidth+i*iGap, yStart+j*rectHeight+j*jGap, rectWidth, rectHeight, roundedness); 
  }
  }
  
}

function drawTriangles(){
  let iCount = random(10);
  let jCount = random(10);
  let kalWidth = random(w/3, w*7/8);
  let kalHeight = random(h/6, h*5/6);
  let iGap = random(-1*kalWidth/iCount/4, kalWidth/iCount/2);
  let jGap = random(-1*kalHeight/jCount/4, kalHeight/jCount/2);
  let rectWidth = (kalWidth - iCount*iGap)/iCount;
  let rectHeight = (kalHeight - jCount*jGap)/jCount;
  let xStart = random(0,w-kalHeight/2);
  let yStart = random(0,h-kalWidth/2);
  
  for (let i = 0; i<iCount; i++) {
    for (let j = 0; j<jCount; j++) {
    bg.triangle(xStart+i*rectWidth+i*iGap, yStart+j*rectHeight+j*jGap+rectHeight, xStart+i*rectWidth+i*iGap+rectWidth/2, yStart+j*rectHeight+j*jGap, xStart+i*rectWidth+i*iGap+rectWidth, yStart+j*rectHeight+j*jGap+rectHeight); 
  }
  }
}


function drawRandomSheps(){
  let iCount = random(10);
  let jCount = random(10);
  let kalWidth = random(w/3, w*7/8);
  let kalHeight = random(h/6, h*5/6);
  let iGap = random(-1*kalWidth/iCount/4, kalWidth/iCount/2);
  let jGap = random(-1*kalHeight/jCount/4, kalHeight/jCount/2);
  let rectWidth = (kalWidth - iCount*iGap)/iCount;
  let rectHeight = (kalHeight - jCount*jGap)/jCount;
  let xStart = random(0,w-kalHeight/2);
  let yStart = random(0,h-kalWidth/2);
  
  
  
  
  for (let i = 0; i<iCount; i++) {
    for (let j = 0; j<jCount; j++) {
    
  }
  }
}


function drawCircles(){
  let iCount = random(10);
  let jCount = random(10);
  let kalWidth = random(w/3, w*7/8);
  let kalHeight = random(h/6, h*5/6);
  let iGap = random(-1*kalWidth/iCount/4, kalWidth/iCount);
  let jGap = random(-1*kalHeight/jCount/4, kalHeight/jCount);
  let rectWidth = (kalWidth - iCount*iGap)/iCount;
  let rectHeight = (kalHeight - jCount*jGap)/jCount;
  let xStart = random(0,w-kalHeight/2);
  let yStart = random(0,h-kalWidth/2);
  
  for (let i = 0; i<iCount; i++) {
    for (let j = 0; j<jCount; j++) {
    bg.ellipse(xStart+i*rectWidth+i*iGap, yStart+j*rectHeight+j*jGap, rectWidth, rectHeight); 
  }
  }
}

function setStrings(name, author) {
    self.author = author;
  while(random(1)>1-(author.length/50)) {
    let pos = author.length/2 + random(author.length/2)
    self.author = self.author.slice(0, pos) + "\n" + author.slice(pos);
  }

  self.name = name;
  while(random(1)>1-(name.length/50)) {
    let pos = name.length/2 + random(name.length/2)
    self.name = self.name.slice(0, pos) + "\n" + name.slice(pos);
  }
}

function addText() {
 
  
  
  bg.textStyle(random([NORMAL, NORMAL, NORMAL, ITALIC, BOLD, BOLD, BOLDITALIC]));
  var tSize = random(100,350);
  bg.textSize(tSize);
  while((bg.textWidth(self.name)>w-100)&&(tSize>100)){
    tSize-=1;
    bg.textSize(tSize);
  }
  bg.text(self.name, random(0,w-bg.textWidth(self.name)), random(0,h))
  
  bg.textStyle(random([NORMAL, NORMAL, NORMAL, ITALIC, BOLD, BOLD, BOLDITALIC]));
  tSize = random(100,300);
  bg.textSize(tSize);
  while((bg.textWidth(self.author)>w-100)&&(tSize>100)){
    tSize-=1;
    bg.textSize(tSize);
  }
  bg.text(self.author, random(0,w-bg.textWidth(self.author)), random(0,h))
}

function randString(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789         ';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}
