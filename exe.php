<?php
$nowDir=getcwd();
echo "当前目录为：<br>";
echo $nowDir;
echo "<br>";
exec("D:");
exec("cd ".$nowDir);
$testFileName=date('i').date('s');
$outPut;
exec("type nul>".$testFileName.".txt",$outPut);
print_r($outPut);
exec("git add *.*",$outPut);
print_r($outPut);
exec("git commit -m'1'");
exec("git push");
?>