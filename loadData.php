<?php

    header('Content-Type:text/html; charset=utf-8');
    $no= $_GET['no'];

    $conn= mysqli_connect("localhost", "suhyun2963", "ksh296300!", "suhyun2963");
    mysqli_query($conn, "set names utf8");
    $sql= "SELECT * FROM fanLetterDB WHERE no='$no'";
    $result= mysqli_query($conn, $sql);

    $row_num= mysqli_num_rows($result);
    
    

    echo json_encode($rows);
    mysqli_close($conn);

?>