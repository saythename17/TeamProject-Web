
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
    // alert("함수발동!")
    // var len=document.getElementsByClassName('ccc')
    // for(var i=0;i<len.length;i++){
    //     var list=document.getElementsByClassName('ccc')[i]
    //     list.onmouseover=()=>{
    //         list.style.color="#669933"
    //         list.style.fontWeight="bold"
    //     }
    //     if(i==a){
    //         list.style.color="#669933"
    //         list.style.fontWeight="bold"
            
    //     }else{
    //         list.style.color="#666"
    //         list.style.fontWeight="normal"
    //     }
    // }
    
    
    var req=new XMLHttpRequest()
    
    req.onreadystatechange=()=>{
        if(req.readyState==4 && req.status == 200){
            var artists=JSON.parse(req.responseText)
            

            document.getElementById('star').innerHTML = ""+artists[a].name
            document.getElementById('nameunder').innerHTML = ""+artists[a].nameunder
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
    for(var t in tabmenu){
        if(t==0) tabmenu[t].style.color='#663399'
        tabmenu[t].style.color='#888'
    }
}
var photo=()=>{
    document.getElementById('actor').style.display = "none"
    document.getElementById('photo').style.display = "flex"
    document.getElementById('video').style.display = "none"
    var tabmenu=document.getElementsByClassName('tab')
    for(var t in tabmenu){
        if(t==0) tabmenu[t].style.color='#663399'
        tabmenu[t].style.color='#888'
    }
}
var video=()=>{
    document.getElementById('actor').style.display = "none"
    document.getElementById('photo').style.display = "none"
    document.getElementById('video').style.display = "flex"
    var tabmenu=document.getElementsByClassName('tab')
    for(var t in tabmenu){
        if(t==0) tabmenu[t].style.color='#663399'
        tabmenu[t].style.color='#888'
    }
}




