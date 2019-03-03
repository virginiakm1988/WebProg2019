function prev(){
    var target = document.querySelector("#display")
    var imageurl = target.src.substr(0,target.src.length-5)
    var curpic = target.src.substr(target.src.length-5,1)
    target.src = imageurl + 'loading.gif'
    if(curpic > 1){
        curpic = eval(curpic) -  1
    }
    else{
        curpic = 3
    }

    target.src = imageurl+curpic + '.jpg'
}
function next(){
    var target = document.querySelector("#display")
    var imageurl = target.src.substr(0,target.src.length-5)
    var curpic = target.src.substr(target.src.length-5,1)
    target.src = imageurl + 'loading.gif'
    if(curpic <3 ){
        curpic = eval(curpic) +  1
    }
    else{
        curpic = 1
    }
    target.src = imageurl+curpic + '.jpg'
}