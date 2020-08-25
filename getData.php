<?php

    header('Content-Type:text/html; charset=utf-8');

    $conn= mysqli_connect("localhost","suhyun2963","ksh296300!","suhyun2963");
    mysqli_query($conn, "set names utf8");
    $sql= "SELECT * FROM fanLetterDB";
    $result= mysqli_query($conn, $sql);
    $row_num= mysqli_num_rows($result);

    for($i=0; $i<$row_num; $i++){
        $row= mysqli_fetch_array($result, MYSQLI_ASSOC);

        echo $row['name']."<br>"; 
        echo $row['title']."<br>";
        echo $row['msg']."<br>";
        echo $row['tag']."<br>";
        echo $row['file']."<br>";
    }

    mysqli_close($conn);
    

?>