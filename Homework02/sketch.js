let cvsWrapper = null;
let bgImg;
let bgScale;
var bird;
var pipes = [];
let wave_sound;
let die_sound;
let hit_sound;
let baseImg;
let framecount = 0;
let angle = 0.0;
let jitter = 0.0000000000001;
let backgrounds = ['day','night'];
let bgIndex = getRandomInt(0,1);
let game_over ;
let isDead = false;



// assets from: https://github.com/sourabhv/FlapPyBird/tree/master/assets

function preload() {
    bgImg = loadImage(`./assets/sprites/background-${backgrounds[bgIndex]}.png`)
    baseImg = loadImage("./assets/sprites/base.png");
    wave_sound = loadSound("./assets/audio/wing.wav");
    die_sound = loadSound("./assets/audio/die.wav");
    hit_sound = loadSound("./assets/audio/hit.wav");
    game_over = loadImage("./assets/sprites/gameover.png");

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
    image(baseImg,width-baseImg.width*bgScale,height-baseImg.height,width*bgScale);






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
   //     if(pipes[i].offscreen()){
     //       pipes.splice(i,1);
       // }
     //   console.log(pipes[i].hits(bird));
        if(pipes[i].hits(bird)){
            console.log("hit");
            bird.isAlive = false;
            if(!bird.isAlive&& !isDead){
                hit_sound.play();
            }
        }

        if(!bird.isAlive){
            bird.gravity+=0.001;
            image(game_over,width/2-game_over.width/2,height/2-game_over.height/2);
            if(!isDead){
                die_sound.play();
                isDead = true;
            }
        }
    }
}

function keyPressed() {
    if(keyCode === 32){
        if(bird.isAlive){
            bird.up();
        }
        
    }
};

const color = ['red', 'blue', 'yellow'];
const flap = ['downflap','midflap', 'upflap'];  
let colorIndex =getRandomInt(0,2);
function Bird(){
    
    this.isAlive = true;
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
    this.hit_ground= function(){
        if(this.y > height/2-game_over){
            this.isAlive = false;
        }
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
    
    this.x = width;
    
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
   // this.top = this.img.height;//random(height/2);
    this.bottom = random(height/2);
    this.show = function(){     //pipe-green-lower.png
        //console.log("pipe",width   , bgScale);
       
        image(this.img ,this.x,this.y);
    }
    this.update = function(){
        
        this.x += this.velocity;
        
    }
    this.offscreen = function(){
        if(this.x < -60){
            return true;
        }
        else {
            return false;
        }
    }
    this.hits = function(bird){
        //the hir function
       // die_sound.play();
       //return false;
     //  console.log( bird.x ,this.x,this.x +this.img.width,this.img.width);
       if(bird.x>this.x && (bird.x < this.x +this.img.width)){
    //       console.log("area")
            if(this.direction == false){
    //            console.log("lower")
                if(bird.y>  this.y){
     //               console.log("yessss")
                    this.colorIndex = 1;
                    return true;
                }
            }
            else{
    //            console.log("upper")
                if(bird.y < this.y+this.img.height)
                {
    //                console.log("git");
                    return true;
                }
            }
           
       }  
       return false;
    
    }

       
        
    
}    



