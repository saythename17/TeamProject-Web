

// 데이터 서버에서 보내기
// write_page.html 에서 확인버튼을 누르면 실행/  
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






//fanLetter_page.html 페이지를 열면 받아오는 데이터
//fanLetter_page 목록에 받아지는 데이터
 function loadData(){
    
    var req= new XMLHttpRequest();
    req.onreadystatechange= function(){       
        if(req.readyState==4 && req.status==200){
            //alert(req.responseText);    //4번째까지 응답받았을때/ 성공했을때 실행됨
            js_arr=JSON.parse(req.responseText);   //JSON.parse()를 사용하여 객체로 변환  //이미 배열
            
            //alert(js_arr.length);
            var table=document.getElementById('aa');

            for(i=0; i<js_arr.length; i++){
                // alert(js_arr.length);
                // table.innerHTML += "<tr>";
                // table.innerHTML += "<td>";
                // table.innerHTML += js_arr[i].no;
                // table.innerHTML += "</td>";

                // table.innerHTML += "<td>";
                // table.innerHTML += '<a href="./post.html?no="'+js_arr[i].no+'>';
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

                //속성추가
                var id1= document.createAttribute('class');
                id1.value= "td_no";
                td1.setAttributeNode(id1);

                var id2= document.createAttribute('class');
                id2.value= "td_title";
                td2.setAttributeNode(id2);
                
                var id3= document.createAttribute('class');
                id3.value= "td_name";
                td3.setAttributeNode(id3);

                var id4= document.createAttribute('class');
                id4.value= "td_date";

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
 






//fanLetter_page.html 에서 post.html 데이터로 데이터 전달받아오기 (location 에 저장되어있음)
 function getDatafromLocal(){
    

    var locat= location.href;  //문자열  
    alert(locat);  //http://suhyun2963.dothome.co.kr/TeamProject/post.html?no=29
    
    var index= locat.split("=");
    //var parse= js_arr[1].parse.
    //alert(typeof js_arr);
    
    alert(index[1]);   //ex= 29  // = 항상 1번째방에는 전달받은 no값(index 번호)가 저장되어 있음
    var n=index[1];     //혹시 이걸로 오류뜨면 index[1]를 Number형으로 변환하기!(구글링)


    var req= new XMLHttpRequest();
    req.onreadystatechange= function() {
        if(req.readyState==4 &&  req.status==200){  
            //alert("if 문 실행"); 
            //alert(req.responseText);
            var jsonarr=JSON.parse(req.responseText);  //json 문자열을 객체로 만들기 -> json parse하면알아서 객체로 만들어줌 =>배열
            var title= document.getElementById('title');
            title.innerHTML=jsonarr[n].title;
        }
    }
    req.open('GET', './loadData.php?no='+n, true);
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
 
