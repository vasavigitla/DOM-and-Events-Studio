// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load",function(){
    let rocketImg = document.getElementById("rocket");
    rocketImg.style.position = "absolute";
    rocketImg.style.bottom = "0px";
    rocketImg.style.left = "0px";
    let flightStatus = this.document.getElementById("flightStatus");
    let shuttleBackground = this.document.getElementById("shuttleBackground");
    let takeoff = this.document.getElementById("takeoff");
    let shuttleHeight = this.document.getElementById("spaceShuttleHeight");

    let right = this.document.getElementById("right");
    right.addEventListener("click",function(){
        let movement = perseInt(rocketImg.style.left) + 10 + "px";
        rocketImg.style.left = movement;
    })
    let left= this.document.getElementById("right");
    left.addEventListener("click",function(){
        let movement = perseInt(rocketImg.style.left) - 10  + "px";
        rocketImg.style.left = movement;  

    })
    
    let up = this.document.getElementById("right");
    right.addEventListener("click",function(){
        let movement = perseInt(rocketImg.style.left) + 10 + "px";
        rocketImg.style.bottom = movement;
        shuttleHeight.innerHTML= perseInt(shuttleHeight.innerHeight) + 10000;
     })
    
    let down= this.document.getElementById("right");
    left.addEventListener("click",function(){
        let movement = perseInt(rocketImg.style.left) - 10  + "px";
        rocketImg.style.bottom = movement;  
        shuttleHeight.innerHTML= perseInt(shuttleHeight.innerHeight) - 10000;
    })
    
    

    takeoff.addEventListener("click",function(){
        letconfirmation = window,confirm("Shuttle is ready");
        if (confirmation){
            flightStatus.innerHTML = "Shuttle in Flight" ;
            shuttleHeight.innerHTML = "10000";
            shuttleBackgroung.style.backgroundcolor = "blue";

        }
    });
    let land = this.document.getElementById("landing");
    
    land.addEventListener("click",function(){
         window.alert("The Shuttle is landing. landing gear engaged");
        if (confirmation){
            flightStatus.innerHTML = "The Shuttle has landed" ;
            shuttleHeight.innerHTML = "0";
            shuttleBackgroung.style.backgroundcolor = "green";
        rocketImg.style.bottom = "0px";
    }
});
        let abort = this.document.getElementById("missionAbort");
    
    abort.addEventListener("click",function(){
        letconfirmation = window.confirm("Confirm that you want to abort the mission ");
        if (confirmation){
            flightStatus.innerHTML = "Mission Aborted" ;
            shuttleHeight.innerHTML = "0";
            shuttleBackgroung.style.backgroundcolor = "green";
            rocketImg.style.bottom = "0px";
            rocketImg.style.left 
        }
    });        
});