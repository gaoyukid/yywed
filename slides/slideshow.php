<!DOCTYPE html>

<html>
  <head>
    <title>Wedding Photo</title>

    <meta charset='utf-8'>
    <script
      src='../js/google/slides.js'></script>
  </head>
  
  <style>
    
  </style>

  <body style='display: none'>

    <section class='slides layout-regular template-default'>
      
		<?php
		for ($row = 0; $row < 9; $row++) {
			for ($img = 0; $img < 9; $img++) {
				#$id = 10*$row+$img;
				echo "<section class='slides layout-regular template-default'>\n";
				echo "<article >\n";
				echo "<p>\n";
				echo "<img style='height: 600px' src='../photo/row" . $row . "/img" . $img . ".jpg'>\n";
				echo "</p>\n";
				echo "</article>\n";
				echo "</section>\n";
			}
		}
		?>
      
	  
	</section>

  </body>
</html>