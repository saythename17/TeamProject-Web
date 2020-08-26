<?php

    header('Content-Type:text/html; charset=utf-8');


    //create connection
    $conn= mysqli_connect("localhost","suhyun2963","ksh296300!","suhyun2963");
    mysqli_query($conn, "set names utf8");
    $sql= 'SELECT * FROM fanLetterDB';
    $result= mysqli_query($conn, $sql);
    $row_num= mysqli_num_rows($result);


    $arr= array();  //배열로
    for($i=0; $i<$row_num; $i++){
        $row= mysqli_fetch_array($result, MYSQLI_ASSOC);
        
        // echo $row['name']."<br>"; 
        // echo $row['title']."<br>";
        // echo $row['msg']."<br>";
        // echo $row['tag']."<br>";
        // echo $row['file']."<br>";
        $arr[$i]= $row;
    }

    echo json_encode($arr);  //제이슨으로 인코딩

    mysqli_close($conn);



    // header('Content-Type:text/html; charset=utf-8');

    // $conn= mysqli_connect("localhost","suhyun2963","ksh296300!","suhyun2963");
    // mysqli_query($conn, "set names utf8");
    // if($conn-> connect_error){
    //     die("Connection failed: " . $conn-> connect_error);
    // }
   
    // $name= mysqli_real_escape_string($conn, $_POST['name']);
    // $sql= 'SELECT * FROM fanLetterDB WHERE name ="'. $name.'"';

    // $result= mysqli_query($conn, $sql);
    // $response= array();

    // if($result-> num_rows> 0){
    //     while($row= $result-> fetch_assoc()){
    //         $response['name']= $row["name"];
    //         $response['title']= $row["title"];
    //         $response['msg']= $row["msg"];
    //         $response['tag']= $row["tag"];
    //     }
    //     echo json_encode($response);
    // }else{
    //     echo " 0 results";
    // }
    // mysqli_close($conn);
    

?>