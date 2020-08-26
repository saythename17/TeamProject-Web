


// document.getElementById('btn_ok').addEventListener('click', function btn_ok(){
//     alert('aaa');
// });



function sendData(){
    alert('확인을 누르셨습니다.');

    var name= document.getElementById('name');
    var email= document.getElementById('email');
    var title= document.getElementById('title');
    var msg= document.getElementById('msg');
    var file= document.getElementById('file').src;

    var req= new XMLHttpRequest();

    req.onreadystatechange=function(){
        //alert(req.responseText);  //4번째까지 응답받았을때/ 성공했을때 실행됨
        //php에서 받아온 데이터가 responseText에 저장

    }
    
    req.open('POST', './post_write_page.php', true);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send('name='+name+'&email='+email+'&title='+title+'&msg='+msg+'&file='+file);

}







//fanLetter_page 목록에 받아지는 데이터
 function loadData(){

    var req= new XMLHttpRequest();
    req.onreadystatechange= function(){       
        if(req.readyState==4 && req.status==200){
            //alert(req.responseText);    //4번째까지 응답받았을때/ 성공했을때 실행됨
            js_arr=JSON.parse(req.responseText);   //JSON.parse()를 사용하여 객체로 변환  //이미 배열
            //document.getElementById("title").innerHTML= 

            
            //alert(js_arr.length);
            var table=document.getElementById('aa');

            for(i=0; i<js_arr.length; i++){
                //alert('bbb');
                // table.innerHTML += "<tr>";
                // table.innerHTML += "<td>";
                // table.innerHTML += js_arr[i].no;
                // table.innerHTML += "</td>";

                // table.innerHTML += "<td>";
                // table.innerHTML += '<a href="./post.html?no='+js_arr[i].no+'">';
                // table.innerHTML += js_arr[i].title;
                // table.innerHTML += "</a>";
                // table.innerHTML += "</td>";

                // table.innerHTML += "<td>";
                // table.innerHTML += js_arr[i].name;
                // table.innerHTML += "</td>";

                // table.innerHTML += "<td>";
                // table.innerHTML += js_arr[i].date;
                // table.innerHTML += "</td>";
                // table.innerHTML += "</tr>";

                var tr = document.createElement('tr');

                var td1 = document.createElement('td');
                td1.innerText = js_arr[i].no;
                var td2 = document.createElement('td');
                td2.innerHTML = '<a href="./post.html?no='+js_arr[i].no+'">' + js_arr[i].title + '</a>';
                var td3 = document.createElement('td');
                td3.innerText = js_arr[i].name
                var td4 = document.createElement('td');
                td4.innerText = js_arr[i].date

                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);
                table.appendChild(tr);
         
            }
        }
    }
    req.open('GET', './getData.php', true);
    req.send();

 }
 







 function getDatafromLocal(){
    //alert('getDatafromLocal 함수 실행');

     var name= document.getElementById('name'); 
    var title= document.getElementById('title');
    //alert(title);
    // var title= document.getElementById('msg');
    // var name= document.getElementById('tag');

     

     var req= new XMLHttpRequest();
     req.onreadystatechange= function(){
         if(req.readyState==4 && req.status==200){
             js_arr= JSON.parse(req.responseText);
             alert(req.responseText);
            //  var temp= location.href.split("=");
            // name.innerHTML=js_arr[temp[1]].name
     }

     req.open('GET', './getData.php', true);
     req.send();

     
 }
    




// function printData(){
 
//     var name= $('#name').val();
//     var title= $('#title').val();
//     //var file= $('#file').val();
//     var msg= $('#msg').val();
//     var tag= $('#tag').val();

//     var data= "name="+name+"&title="+title+"&file="+file+"&msg="+msg+"$tag="+tag;
//     var data_name="name="+name;

//     $.ajax({
//         type:"POST",
//         url:"./getData.php",
//         data: data,
//         success: function(data_name){
//             var s= JSON.parse(data);
//             alert(s[name]);
//             //$('#name').html(data_name);
//             // $('#msg').html(data.title);
//             // $('#msg').html(data.msg);
//             // $('#tag').html(data.tag);
//         }, 
//         error: function(error){
//             alert(error);
//         }
//     })

// }



    // $('#btn_ok').click(function(){
    //     var name= $('#name').val();
        
    //     $.ajax({
    //         type: "POST",
    //         url: "./getData.php",
    //         data: data,
    //         sucess: function(){
    //            $('#name').html(data);
    //         } 
    //     })
    // });

