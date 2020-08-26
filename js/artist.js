
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
