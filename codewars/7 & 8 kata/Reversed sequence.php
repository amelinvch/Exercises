<?php
  
function reverseSeq (int $n): array {
  $array = [];
  for( $i = $n; $i > 0; $i-- ) {
    $array[] = $i;
  };

  return $array; 
};

function reverseSeqSip (int $n): array {
  return range($n, 1); 
};

print_r(reverseSeq(23));
print_r(value: reverseSeqSip(23));
?>