var timeout;
var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-content");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}


function circleFlatten(){
    var xscale=1;
    var yscale=1;
    
    var xprev=0;
    var yprev=0;

    window.addEventListener("mousemove", function(dets){

        clearTimeout(timeout);
        
        xscale=gsap.utils.clamp(.8, 1.2, dets.clientX-xprev);
        yscale=gsap.utils.clamp(.8, 1.2, dets.clientY-yprev);

        xprev=dets.clientX;
        yprev=dets.clientY;
        
        circleMouseFollower(xscale, yscale);
        
        timeout=this.setTimeout(function(){
            document.querySelector("#circle").style.transform=`translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
        }, 100);
    });
}

circleFlatten();

function circleMouseFollower(xscale, yscale){
    window.addEventListener("mousemove", function(dets){
        document.querySelector("#circle").style.transform=`translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    })
}

circleMouseFollower();