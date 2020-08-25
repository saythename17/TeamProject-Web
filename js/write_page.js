


// document.getElementById('btn_ok').addEventListener('click', function btn_ok(){
//     alert('aaa');
// });



function postMethod(){
    alert('확인을 누르셨습니다.');

    var name= document.getElementById('name').nodeValue;
    var email= document.getElementById('email').nodeValue;
    var title= document.getElementById('title').nodeValue;
    var msg= document.getElementById('msg').nodeValue;
    var file= document.getElementById('file').src;

    var req= new XMLHttpRequest();
    
    req.open('POST', './post_write_page.php', true);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send('name='+name+'&email='+email+'&title='+title+'&msg='+msg+'&file='+file);

}








 function postData(){
     //alert();
        var req= new XMLHttpRequest();
        req.onreadystatechange= function(){
        if(req.readyState==4 && req.status==200){

            //alert(req.responseText);
            alert('aa'); 
        }else{
            alert('fail');
        }
        req.open('POST', './post_write_page.php', true);
        req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        req.send();
    
    }
}




    




    
