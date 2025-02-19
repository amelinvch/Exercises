<?php 
// https://www.codewars.com/kata/526571aae218b8ee490006f4/train/php

function countBits($num) {
  $count = 0;
  while ($num > 0) {
    $count += ($num % 2) == 1 ? 1 : 0;
    $num = intdiv($num,2);
  }
  return $count;
}

print_r("1) " . countBits(1234) . "\n");
print_r("2) ". countBits(0) . "\n");
?>