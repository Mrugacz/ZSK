<?php
    $name='Janusz';
    $surname='Nowak';
    echo 'Imie: $name<br>';
    echo "Imie: $name";
    echo "Nazwisko: $surname".'<br>';

    //typy danych
    //boolean

    $prawda=true;
    $fałsz=false;

    echo $prawda;
    echo "$fałsz<br>"; //nic nie wyświetla

    //int
    $bin=0b1011;//11
    $oct=011;//9
    $dec=11;//11
    $hex=0xA;//10

    echo $bin;
    echo $oct;
    echo $dec;
    echo "$hex<br><hr>";

    //składnia heredoc
    $name='Janusz';

    $text = <<<LABEL
    Imie: $name<br>
    Nazwisko: $surname<br>
    <hr>
    LABEL;

    echo $text;

    echo <<<L
    heredoc 2<br>
    Imię: $name<hr>
    L;

    //nowdoc
    echo <<<'L'
    nowdoc<br>
    Imię: $name<hr>
    L;

    //Wyświetlanie nazw zmiennych
    $city="Poznań";
    echo "Nazwa zmiennej: \$city, wartość $city."
?>