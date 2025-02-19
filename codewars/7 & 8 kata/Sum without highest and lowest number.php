<?php 
function sumArray($array) {
  if(!$array || count($array) <= 2) { return 0; };
  
  $sum = array_sum($array);
  $minNum = min($array);
  $maxNum = max($array);  
  
  return $sum - ($minNum + $maxNum);
}

echo(sumArray([6, 2, 1, 8, 10]));

?>