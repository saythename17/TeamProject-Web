
// function sendInfo(){
//     var artist=document.getElementsByClassName('actors').value

//     var req=new XMLHttpRequest()
//     req.onreadystatechange=function(){
//         if(req.readyState==4 && req.status == 200){
//         }
//     }
// }
//document.getElementsByClassName('actors').addEventListener('click',function(){alert('actors')})



var artistInfo=a=>{
    
    
    var req=new XMLHttpRequest()
    
    req.onreadystatechange=()=>{
        if(req.readyState==4 && req.status == 200){
            var artists=JSON.parse(req.responseText)

            

            document.getElementById('star').innerHTML = ""+artists[a].name
            document.getElementById('star2').innerHTML = ""+artists[a].name
            document.getElementById('star3').innerHTML = ""+artists[a].name
            document.getElementById('nameunder').innerHTML = ""+artists[a].nameunder
            document.getElementById('nameEng').innerHTML = ""+artists[a].nameunder
            document.getElementById('nameEnp').innerHTML = ""+artists[a].nameunder
            document.getElementById('height').innerHTML = ""+artists[a].height
            document.getElementById('debut').innerHTML = ""+artists[a].debut
            document.getElementById('movie').innerHTML = ""+artists[a].movie
            document.getElementById('drama').innerHTML = ""+artists[a].drama
            document.getElementById('tv').innerHTML = ""+artists[a].tv
            document.getElementById('awards').innerHTML = ""+artists[a].awards
            document.getElementById('mainImg').src = ""+artists[a].mainImg



            document.getElementById('birth').innerText = ""+artists[a].birthday
            document.getElementById('fancafe').href = ""+artists[a].fancafe
            document.getElementById('snspage').href = ""+artists[a].sns
        }
    }
    req.open('POST','./artist.json',true)
    req.send()
}






//change page-profile, photo, video  
var profile=()=>{
    document.getElementById('actor').style.display = "flex"
    document.getElementById('photo').style.display = "none"
    document.getElementById('video').style.display = "none"
    var tabmenu=document.getElementsByClassName('tab')
    for(var t=0;t<tabmenu.length;t++){
        if(t==0) tabmenu[t].style.color='#669933'
    }
}
var photo=()=>{
    document.getElementById('actor').style.display = "none"
    document.getElementById('photo').style.display = "flex"
    document.getElementById('video').style.display = "none"
    var tabmenu=document.getElementsByClassName('tab')
    for(var t in tabmenu){
        if(t==4) tabmenu[t].style.color='#669933'
    }
}
var video=()=>{
    document.getElementById('actor').style.display = "none"
    document.getElementById('photo').style.display = "none"
    document.getElementById('video').style.display = "flex"
    var tabmenu=document.getElementsByClassName('tab')
    for(var t in tabmenu){
        if(t==8) tabmenu[t].style.color='#669933'
    }
}




// function tabsHandler(index) {
//     return function tabClickEvent() {
//         var title=document.getElementsByClassName('video-title')[index]
//         for(var i in title){
//             title[i].style.display ="table-cell"
//         }
//         // title[i].style.display = "table-cell"
//     };
// }

// var tabs = document.getElementsByClassName('thumbnail')
// var i;

// for (i = 0; i < tabs.length; i += 1) {
//     tabs[i].onmouseover = tabsHandler(i);
// }




// video -page youtube bottom list slide
const slideList = document.querySelector('.slide_list'); // Slide parent dom
const slideContents = document.querySelectorAll('.slide_content'); // each slide dom
const slideBtnNext = document.querySelector('.slide_btn_next'); // next button
const slideBtnPrev = document.querySelector('.slide_btn_prev'); // prev button
const slideLen = slideContents.length; // slide length
const slideWidth = 400; // slide width
const slideSpeed = 300; // slide speed
const startNum = 0; // initial slide index (0 ~ 4)
slideList.style.width = slideWidth * (slideLen + 2) + "px";


// Copy first and last slide
let firstChild = slideList.firstElementChild;
let lastChild = slideList.lastElementChild;
let clonedFirst = firstChild.cloneNode(true);
let clonedLast = lastChild.cloneNode(true);



// Add copied Slides
slideList.appendChild(clonedFirst);
slideList.insertBefore(clonedLast, slideList.firstElementChild);
slideList.style.transform = "translate3d(-" + (slideWidth * (startNum + 1)) + "px, 0px, 0px)";
let curIndex = startNum; // current slide index (except copied slide)
let curSlide = slideContents[curIndex]; // current slide dom
curSlide.classList.add('slide_active');


/** Next Button Event */
slideBtnNext.addEventListener('click', function() {
if (curIndex <= slideLen - 1) {
    slideList.style.transition = slideSpeed + "ms";
    slideList.style.transform = "translate3d(-" + (slideWidth * (curIndex + 2)) + "px, 0px, 0px)";
}
if (curIndex === slideLen - 1) {
    setTimeout(function() {
    slideList.style.transition = "0ms";
    slideList.style.transform = "translate3d(-" + slideWidth + "px, 0px, 0px)";
}, slideSpeed);
curIndex = -1;
}
curSlide.classList.remove('slide_active');
curSlide = slideContents[++curIndex];
curSlide.classList.add('slide_active');
});
/** Prev Button Event */
slideBtnPrev.addEventListener('click', function() {
if (curIndex >= 0) {
    slideList.style.transition = slideSpeed + "ms";
    slideList.style.transform = "translate3d(-" + (slideWidth * curIndex) + "px, 0px, 0px)";
}
if (curIndex === 0) {
    setTimeout(function() {
        slideList.style.transition = "0ms";
        slideList.style.transform = "translate3d(-" + (slideWidth * slideLen) + "px, 0px, 0px)";
    }, slideSpeed);
    curIndex = slideLen;
    }
    curSlide.classList.remove('slide_active');
    curSlide = slideContents[--curIndex];
    curSlide.classList.add('slide_active');
});