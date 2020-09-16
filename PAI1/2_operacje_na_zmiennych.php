<?php
//Wersja PHP'a
echo PHP_VERSION,'<br>';
//phpinfo
// echo phpinfo();
//Interpolacja
echo 'a', 'b', 'c';//show a show b show c
//Konkatenacja
echo 'a'. 'b'. 'c';//add a+b+c show abc

$pow=2^10;
echo $pow;//1024

//operatory bitowe
//and &, or |, not ~, xor ^, <<, >>

$bin = 0b1010;
echo "<br>$bin<br>";

$bin = $bin << 2;//101000
echo $bin;

$bin =$bin >> 3;//101
echo "<br>$bin";
?>