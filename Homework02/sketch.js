let cvsWrapper = null;
let bgImg;
let bgScale;
var bird;
var pipes = [];
let wave_sound;
let die_sound;
let baseImg;
let framecount = 0;



// assets from: https://github.com/sourabhv/FlapPyBird/tree/master/assets

function preload() {
    bgImg = loadImage("./assets/sprites/background-night.png")
    baseImg = loadImage("assets/sprites/base.png");
    wave_sound = loadSound("./assets/audio/wing.wav");
    die_sound = loadSound("./assets/audio/wing.wav");

}

function setup() {
    // Game basic setup.
    // Mounting canvas onto div for convenient styling.
    cvsWrapper = document.getElementById("canvasWrapper");
    const myCanvas = createCanvas(
        cvsWrapper.offsetWidth,
        cvsWrapper.offsetHeight
    );
    myCanvas.parent("canvasWrapper");

    // setup code below
    bgScale = width/bgImg.width;
    bird = new Bird();
    pipes.push(new Pipe());
    

}

function draw() {
    // Render function (called per frame.)
    background(0);
    image(bgImg,0,0,bgImg.width*bgScale,bgImg.height*bgScale);
    image(baseImg);
    bird.show();  
    bird.update();
   
    if(framecount % 20 == 0){
        pipes.push(new Pipe());
        framecount ++;
        
    }
    else{
        framecount++;
    }
    //console.log("length", pipes.length)
    for (var i = 0; i < pipes.length; i++){
        pipes[i].show();
        pipes[i].update();
        if(pipes[i].offscreen()){
            pipes.splice(i,1);
        }

        if(pipes[i].hits(bird)){
            console.log("hit");
        }
    }
}

function keyPressed() {
    if(keyCode === 32){
        
        bird.up();
    }
};

const color = ['red', 'blue', 'yellow'];
const flap = ['downflap','midflap', 'upflap'];  
let colorIndex =getRandomInt(0,2);
function Bird(){

    this.imgPath = `./assets/sprites/${color[colorIndex]}bird-${flap[0]}.png`;
    this.y = height/2;
    this.x = 64;
    this.img = loadImage(this.imgPath);
    this.gravity = 0.1;
    this.velocity = 0;
    this.lift = -7;

    this.show = function(){
        let flapIndex = getRandomInt(0,2);
       //imgPath = `./assets/sprites/${color[colorIndex]}bird-${flap[flapIndex]}.png`;
       // this.img = loadImage(imgPath);
        image(this.img ,this.x,this.y );

    }
    this.update = function()
    {
        this.velocity += this.gravity;
        this.y += this.velocity;
        this.velocity *=0.99;
        let flapIndex = getRandomInt(0,2);
        this.imgPath =  `./assets/sprites/${color[colorIndex]}bird-${flap[flapIndex]}.png`;
        this.img = loadImage(this.imgPath);
        if(this.y > height){
            
        
        //    this.y = bgImg.height+(height-bgImg.height);
        //    this.velocity = 0;
        }
    }
    this.up=function(){
        wave_sound.play();
        this.velocity+= this.lift;
    }   
}

/*
colorbird−{flap}.png`", where ${color} = [‘red’, ‘blue’, ‘yellow’], and ${flap} = [‘downflap’, ‘midflap’, ‘upflap’]
*/ 


function getRandomInt(min,max) {
    return Math.floor(Math.random() * Math.floor(max-min+1)+min);
  }
  
const pipeColor = ['red', 'green'];
const directions = ['lower','upper'];  
function Pipe(){
    this.top = random(height/2);
    this.bottom = random(height/2);
    this.x = width;//0;
    
    this.y = getRandomInt(450,700);// 450; //range == 450 or up
    this.velocity = -3;
    this.direction = getRandomInt(0,1);
    this.colorIndex = 0;// getRandomInt(0,1);
    if (this.direction == 0){
        this.y = getRandomInt(450,800);
    }
    else{  
        this.y = getRandomInt(-200,0);
    }
    this.imgPath =  `./assets/sprites/pipe-${pipeColor[this.colorIndex]}-${directions[this.direction]}.png`;
    this.img = loadImage(this.imgPath);
    this.w = this.img.width;
    this.show = function(){     //pipe-green-lower.png
        //console.log("pipe",width, bgScale);
       
        image(this.img ,this.x,this.y);
    }
    this.update = function(){
        this.x += this.velocity;
    }
    this.offscreen = function(){
        if(this.x < -3*this.w){
            return true;
        }
        else {
            return false;
        }
    }
    this.hits = function (bird){
        //the hir function
       // die_sound.play();
       console.log(directions[this.direction],bird.y, this.top, this.bottom );
        if(bird.y > this.top || bird.y< this.bottom){
            if(bird.x > this.x && bird.x < this.x - this.w){
                console.log("yessss")
                this.colorIndex = 1;
                return true;
            }
        }
        return false;
    }
}    



