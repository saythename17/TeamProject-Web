<?php

    header('Content-Type:text/html; charset=utf-8');

    
    $name= $_POST['name'];
    $email= $_POST['email'];
    $title= $_POST['title'];
    $msg= $_POST['msg'];
    $tag= $_POST['tag'];

    $file= $_POST['file'];
    $srcName= $file['name'];
    $tmpName= $file['tmp_name'];
    $fileSize= $file['size'];

    $fileName= date('Ymdhis').$srcName;
    $dstName= "./Uploads/".$fileName;

    echo $dstName;

    if(move_uploaded_file($tmpName, $dstName)){
        echo "이미지 업로드 성공!";
    }else{
        echo "이미지 업로드 실패 :(((";
    }

    echo "<br><br>";
    echo "$name <br>";
    echo "$email <br>";
    echo "$title <br>";
    echo "$msg <br>";
    echo "$tag <br>";
    echo "$dstName <br>";   
    echo "$fileSize <br>";



    $now= date('Y-m-d h:i');

    $conn= mysqli_connect("localhost","suhyun2963","ksh296300!","suhyun2963");
    mysqli_query($conn, "set names utf8");

    $msg= addslashes($msg);

    $sql="INSERT INTO fanLetterDB(name,email,title,msg,tag,file,date)VALUES('$name','$email','$title','$msg','$tag','$dstName','$now')";
    $result= mysqli_query($conn, $sql);
    if($result){
        echo "DB저장 성공";
    }else{
        echo "DB저장 실패 :((";
    }

    mysqli_close($conn);


?>