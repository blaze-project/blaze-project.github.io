<template><div><h2 id="features" tabindex="-1"><a class="header-anchor" href="#features"><span>Features</span></a></h2>
<ul>
<li>Supports using spark.io.compression.codec for shuffle/broadcast compression</li>
<li>Supports date type casting</li>
<li>Refactor join implementations to support existence joins and BHJ building hash map on driver side</li>
</ul>
<h2 id="performance" tabindex="-1"><a class="header-anchor" href="#performance"><span>Performance</span></a></h2>
<ul>
<li>Fixed performance issues when running on spark3 with default configurations</li>
<li>Use cached parquet metadata</li>
<li>Refactor native broadcast to avoid duplicated broadcast jobs</li>
<li>Supports spark333 batch shuffle reading</li>
</ul>
<h2 id="bugfix" tabindex="-1"><a class="header-anchor" href="#bugfix"><span>Bugfix</span></a></h2>
<ul>
<li>Fix in_list conversion in from_proto.rs</li>
</ul>
<table class="my-table2">
  <tr>
    <th>Version</th>
    <th>Date</th>
    <th>Download</th>
  </tr>
  <tr>
    <td>3.0.0 [yanked]</td>
    <td>Jul 1 2024</td>
    <td><a href="https://github.com/kwai/blaze/releases/tag/v3.0.0" target="_blank">download</a> </td>
  </tr>
</table>
</div></template>


