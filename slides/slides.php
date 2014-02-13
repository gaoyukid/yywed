
<!DOCTYPE html>
<!--
  Copyright 2011 Google Inc.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.

  Original slides: Marcin Wichary (mwichary@google.com)
  Modifications: Chrome DevRel Team (chrome-devrel@googlegroups.com)
                 Alex Russell (slightlyoff@chromium.org)
                 Brad Neuberg
-->
<html >
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=Edge;chrome=1" />
    <title>HTML5 Presentation</title>
    <link href="http://fonts.googleapis.com/css?family=Droid+Sans|Droid+Sans+Mono" rel="stylesheet" type="text/css" />
    <link id="prettify-link" href="src/prettify/prettify.css" rel="stylesheet" disabled />
    <link href="styles/fonts.css" rel="stylesheet" type="text/css" media="screen" />
    <link href="styles/presentation.css" rel="stylesheet" type="text/css" media="screen" />
    <link href="styles/common.css" rel="stylesheet" type="text/css" media="screen" />
    <link class="theme" href="styles/default.css" rel="stylesheet" type="text/css" media="screen" />
    <link class="theme" href="styles/moon.css" rel="stylesheet" type="text/css" media="screen" />
    <link class="theme" href="styles/sand.css" rel="stylesheet" type="text/css" media="screen"/>
    <link class="theme" href="styles/sea_wave.css" rel="stylesheet" type="text/css" media="screen"/>
  </head>
  <body>
    <div id="flex-container">
    <nav id="helpers">
      <button title="Previous slide" id="nav-prev" class="nav-prev">&#8701;</button>
      <button title="Jump to a random slide" id="slide-no">5</button>
      <button title="Next slide" id="nav-next" class="nav-next">&#8702;</button>
      <menu>
        <button type="checkbox" data-command="toc" title="Table of Contents" class="toc">TOC</button>
        <!-- <button type="checkbox" data-command="resources" title="View Related Resources">&#9734;</button> -->
        <button type="checkbox" data-command="notes" title="View Slide Notes">&#9999;</button>
        <button type="checkbox" data-command="source" title="View slide source">&#8635;</button>
        <button type="checkbox" data-command="help" title="View Help">?</button>
      </menu>
    </nav>
    <div class="slides">
      <div id="presentation-counter">Loading...</div>
        <div class="slide" id="landing-slide">
          <section class="middle">
            <p>This presentation is an HTML5 website</p>
            <div update>This deck was last updated mid-2011. While the basics of HTML5 remain the same,
many newer APIs are available, and a few APIs have changed during the standardization process.
See <a href="http://html5rocks.com">HTML5 Rocks</a> for up-to-date information. <small>~February 2014</small></div>
            <p>Press <span id="left-init-key" class="key">&rarr;</span> key to advance.</p>
            <p id="disclaimer-message">Having issues seeing the presentation? Read the <a href="disclaimer.html">disclaimer</a></p>
          </section>
          <aside class="note">
            <section>
              Welcome! (This field is for speaker notes and commentary.)
            </section>
          </aside>
        </div>
		
		<?php
		for ($row = 0; $row < 9; $row++) {
			for ($img = 0; $img < 9; $img++) {
				#$id = 10*$row+$img;
				echo "<div class=\"slide\" id=\"". "row" . $row . "-img" . $img ."\">\n";
				echo "<section>\n";
				echo "<article >\n";
				echo "<p>\n";
				echo "<img style='height: 600px' src='../photo/row" . $row . "/img" . $img . ".jpg'>\n";
				echo "</p>\n";
				echo "</article>\n";
				echo "</section>\n";
			}
		}
		?>
		
        <div class="slide" id="controls-slide">
          <section>
            <ul>
              <li><span class="key">&larr;</span> and <span class="key">&rarr;</span> to move around.</li>
              <li><span class="key">Ctrl/Command</span> and <span class="key">+</span> or <span class="key">-</span> to zoom in and out if slides don’t fit.</li>
              <li><span class="key">S</span> to view page source.</li>
              <li><span class="key">T</span> to change the theme.</li>
              <li><span class="key">H</span> to toggle syntax highlight.</li>
              <li><span class="key">N</span> to toggle speaker notes.</li>
              <li><span class="key">3</span> to toggle 3D effect.</li>
              <li><span class="key">0</span> to toggle help.</li>
            </ul>
          </section>
        </div>
		
		<aside id="help" class="sidebar invisible" style="display: none;">
          <table>
            <caption>Help</caption>
            <tbody>
              <tr>
                <th>Move Around</th>
                <td>&larr;&nbsp;&rarr;</td>
              </tr>
              <tr>
                <th>Source File</th>
                <td>s</td>
              </tr>
              <tr>
                <th>Change Theme</th>
                <td>t</td>
              </tr>
              <tr>
                <th>Syntax Highlight</th>
                <td>h</td>
              </tr>
              <tr>
                <th>Speaker Notes</th>
                <td>n</td>
              </tr>
              <tr>
                <th>Toggle 3D</th>
                <td>3</td>
              </tr>
              <tr>
                <th>Help</th>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </aside>

    </div> <!-- slides -->
    </div>

    <!--[if lt IE 9]>
    <script
      src="http://ajax.googleapis.com/ajax/libs/chrome-frame/1/CFInstall.min.js">
    </script>
    <script>CFInstall.check({ mode: "overlay" });</script>
    <![endif]-->

    <script src="src/prettify/prettify.js" onload="prettyPrint();" defer></script>
    <script src="js/utils.js"></script>
    <script src="http://maps.google.com/maps/api/js?sensor=true"></script>
    <script>
      // Check if new appcache is available, load it, and reload page.
      if (window.applicationCache) {
        window.applicationCache.addEventListener('updateready', function(e) {
          if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
            window.applicationCache.swapCache();
            if (confirm('A new version of this site is available. Load it?')) {
              window.location.reload();
            }
          }
        }, false);
      }

      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-15028909-5']);
      _gaq.push(['_trackPageview']);
      _gaq.push(['_trackPageLoadTime']);

      (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
      })();
    </script>
  </body>
</html>

<?php
class ConManager{
	function getConnection(){
	  //change to your database server/user name/password
		mysql_connect("localhost","sigmagrid","") or
         die("Could not connect: " . mysql_error());
    //change to your database name
		mysql_select_db("sigmagrid") or 
		     die("Could not select database: " . mysql_error());
	}
}
?>