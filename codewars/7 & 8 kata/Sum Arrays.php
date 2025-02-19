<?php 

function sum(array $a): float {
  return array_sum($a);
}

print_r(sum([1, 5.2, 4, 0, -1]));
?>