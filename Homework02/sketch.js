let cvsWrapper = null;
let bgImg;
let bgScale;
var bird;
let wave_sound;
let die_sound;
let baseImg;



// assets from: https://github.com/sourabhv/FlapPyBird/tree/master/assets

function preload() {
    bgImg = loadImage("./assets/sprites/background-day.png")
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
    

}

function draw() {
    // Render function (called per frame.)
    background(0);
    image(bgImg,0,0,bgImg.width*bgScale,bgImg.height*bgScale);
    image(baseImg);
    bird.show();
    bird.update();
}

function keyPressed() {
    if(keyCode === 32){
        console.log("pressed");
        bird.up();
    }
};

const color = ['red', 'blue', 'yellow'];
const flap = ['downflap','midflap', 'upflap'];  
let colorIndex =getRandomInt(3);
function Bird(){

    this.imgPath = `./assets/sprites/${color[colorIndex]}bird-${flap[0]}.png`;
    
    this.y = height/2;
    this.x = 64;
    this.img = loadImage(this.imgPath);
    this.gravity = 0.1;
    this.velocity = 0;
    this.lift = -7;

    this.show = function(){
        let flapIndex = getRandomInt(3);
       //imgPath = `./assets/sprites/${color[colorIndex]}bird-${flap[flapIndex]}.png`;
       // this.img = loadImage(imgPath);
        image(this.img ,this.x,this.y );

    }
    this.update = function()
    {
        this.velocity += this.gravity;
        this.y += this.velocity;
        this.velocity *=0.97;
        let flapIndex = getRandomInt(3);
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


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
