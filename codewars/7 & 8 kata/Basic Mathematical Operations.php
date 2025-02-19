<?php 
function basicOp($op, $val1, $val2)
{
  return match($op) {
    '+' => $val1 + $val2,
    '-' => $val1 - $val2,
    '*' => $val1 * $val2,
    '/' => $val1 / $val2
  };
}

echo(basicOp('+', 4, 7));
?>