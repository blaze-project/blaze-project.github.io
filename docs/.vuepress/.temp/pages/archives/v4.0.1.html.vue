<template><div><h2 id="new-feature" tabindex="-1"><a class="header-anchor" href="#new-feature"><span>New Feature</span></a></h2>
<ul>
<li>Initial supports to ORC input file format.</li>
<li>Initial supports to RSS framework and Apache Celeborn shuffle service.</li>
</ul>
<h2 id="improvement" tabindex="-1"><a class="header-anchor" href="#improvement"><span>Improvement</span></a></h2>
<ul>
<li>Optimize AggExec by supporting Implement columnar-based aggregation.</li>
<li>Use custom implemented hashmap implement for aggregation.</li>
<li>Supports specialized count(0).</li>
<li>Optimize bloom filter by reusing same bloom filter in the same executor.</li>
<li>Optimize bloom filter by supporting shrinking.</li>
<li>Optimize reading parquet files by supporting parallel reading.</li>
<li>Improve spill file deletion logics.</li>
</ul>
<h2 id="bug-fixes" tabindex="-1"><a class="header-anchor" href="#bug-fixes"><span>Bug fixes</span></a></h2>
<ul>
<li>Fix file not found for path with url encoded character.</li>
<li>Fix Hashaggregate convert job throwing ScalaReflectionException.</li>
<li>Fix pruning error while reading parquet files with multiple row groups.</li>
<li>Fix incorrect number of tasks due to missing shuffleOrigin.</li>
<li>Fix record batch creating error when hash joining with empty input.</li>
</ul>
<h2 id="other" tabindex="-1"><a class="header-anchor" href="#other"><span>Other</span></a></h2>
<ul>
<li>Upgrade datafusion/arrow dependency to v42/v53.</li>
<li>Replace gxhash with foldhash for better compatibility on some hardwares.</li>
<li>Other minor improvement &amp; fixes.</li>
</ul>
<h2 id="download" tabindex="-1"><a class="header-anchor" href="#download"><span>Download</span></a></h2>
<table class="my-table">
  <tr>
    <th>Version</th>
    <th>Date</th>
    <th>Source</th>
    <th>Binary</th>
    <th>Release Notes</th>
  </tr>
  <tr>
    <td>4.0.1</td>
    <td>Dec 10 2024</td>
    <td>
        <a href="https://github.com/kwai/blaze/archive/refs/tags/v4.0.1.zip" target="_blank">v4.0.1.zip</a> <br>
        <a href="https://github.com/kwai/blaze/archive/refs/tags/v4.0.1.tar.gz" target="_blank">v4.0.1.tar.gz</a> 
    </td>
    <td>
        <a href="https://github.com/kwai/blaze/releases/download/v4.0.1/blaze-engine-spark-3.0-release-4.0.1-SNAPSHOT.jar" target="_blank">blaze-engine-spark-3.0-release-4.0.1-SNAPSHOT.jar</a> <br>
        <a href="https://github.com/kwai/blaze/releases/download/v4.0.1/blaze-engine-spark-3.1-release-4.0.1-SNAPSHOT.jar" target="_blank">blaze-engine-spark-3.1-release-4.0.1-SNAPSHOT.jar</a> <br>
        <a href="https://github.com/kwai/blaze/releases/download/v4.0.1/blaze-engine-spark-3.2-release-4.0.1-SNAPSHOT.jar" target="_blank">blaze-engine-spark-3.2-release-4.0.1-SNAPSHOT.jar</a> <br>
        <a href="https://github.com/kwai/blaze/releases/download/v4.0.1/blaze-engine-spark-3.3-release-4.0.1-SNAPSHOT.jar" target="_blank">blaze-engine-spark-3.3-release-4.0.1-SNAPSHOT.jar</a> <br>
        <a href="https://github.com/kwai/blaze/releases/download/v4.0.1/blaze-engine-spark-3.4-release-4.0.1-SNAPSHOT.jar" target="_blank">blaze-engine-spark-3.4-release-4.0.1-SNAPSHOT.jar</a> <br>
        <a href="https://github.com/kwai/blaze/releases/download/v4.0.1/blaze-engine-spark-3.5-release-4.0.1-SNAPSHOT.jar" target="_blank">blaze-engine-spark-3.5-release-4.0.1-SNAPSHOT.jar</a> 
    </td>
    <td><a href="https://github.com/kwai/blaze/releases/tag/v4.0.1" target="_blank">release notes</a> </td>
  </tr>
</table>
</div></template>


