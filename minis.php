

<?php 

	$video = "views/images/productos/producto_video_6-79.mp4";

	$es = exec("ffmpeg -i $video -ss 00:00:14.000 -vframes 1 captura.jpg 2>&1");

	var_dump($es);

	$rand = range(0,13);
	echo "<pre>";
	var_dump($rand);
	echo "</pre>";
	shuffle($rand);
	echo "<pre>";
	var_dump($rand);
	echo "</pre>";
?>