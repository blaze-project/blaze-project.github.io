<template><div><h1 id="getting-started-with-blaze-for-apache-spark" tabindex="-1"><a class="header-anchor" href="#getting-started-with-blaze-for-apache-spark"><span>Getting Started with Blaze for Apache Spark</span></a></h1>
<h2 id="build-from-source" tabindex="-1"><a class="header-anchor" href="#build-from-source"><span>Build from source</span></a></h2>
<p>To build Blaze, please follow the steps below:</p>
<ol>
<li>Install Rust</li>
</ol>
<p>The native execution lib is written in Rust. So you're required to install Rust (nightly) first for
compilation. We recommend you to use <a href="https://rustup.rs/" target="_blank" rel="noopener noreferrer">rustup</a>.</p>
<ol start="2">
<li>Install Protobuf</li>
</ol>
<p>Ensure <code v-pre>protoc</code> is available in PATH environment. protobuf can be installed via linux system package
manager (or Homebrew on mac), or manually download and build from https://github.com/protocolbuffers/protobuf/releases .</p>
<ol start="3">
<li>Install JDK+Maven</li>
</ol>
<p>Blaze has been well tested on jdk8 and maven3.5, should work fine with higher versions.</p>
<ol start="4">
<li>Check out the source code.</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">git</span> clone git@github.com:kwai/blaze.git</span>
<span class="line"><span class="token builtin class-name">cd</span> blaze</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>Build the project.</li>
</ol>
<p>Specify shims package of which spark version that you would like to run on.</p>
<p>Currently we have supported these shims:</p>
<ul>
<li>spark-3.0 - for spark3.0.x</li>
<li>spark-3.1 - for spark3.1.x</li>
<li>spark-3.2 - for spark3.2.x</li>
<li>spark-3.3 - for spark3.3.x</li>
<li>spark-3.4 - for spark3.4.x</li>
<li>spark-3.5 - for spark3.5.x.</li>
</ul>
<p>You could either build Blaze in pre mode for debugging or in release mode to unlock the full potential of
Blaze.</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token assign-left variable">SHIM</span><span class="token operator">=</span>spark-3.3 <span class="token comment"># or spark-3.0/spark-3.1/spark-3.2/spark-3.3/spark-3.4/spark-3.5</span></span>
<span class="line"><span class="token assign-left variable">MODE</span><span class="token operator">=</span>release <span class="token comment"># or pre</span></span>
<span class="line">mvn package -P<span class="token string">"<span class="token variable">${SHIM}</span>"</span> -P<span class="token string">"<span class="token variable">${MODE}</span>"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After the build is finished, a fat Jar package that contains all the dependencies will be generated in the <code v-pre>target</code>
directory.</p>
<h2 id="build-with-docker" tabindex="-1"><a class="header-anchor" href="#build-with-docker"><span>Build with docker</span></a></h2>
<p>You can use the following command to build a centos-7 compatible release:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token assign-left variable">SHIM</span><span class="token operator">=</span>spark-3.3 <span class="token assign-left variable">MODE</span><span class="token operator">=</span>release ./release-docker.sh</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="run-spark-job-with-blaze-accelerator" tabindex="-1"><a class="header-anchor" href="#run-spark-job-with-blaze-accelerator"><span>Run Spark Job with Blaze Accelerator</span></a></h2>
<p>This section describes how to submit and configure a Spark Job with Blaze support.</p>
<ol>
<li>
<p>move blaze jar package to spark client classpath (normally <code v-pre>spark-xx.xx.xx/jars/</code>).</p>
</li>
<li>
<p>add the follow confs to spark configuration in <code v-pre>spark-xx.xx.xx/conf/spark-default.conf</code>:</p>
</li>
</ol>
<div class="language-properties line-numbers-mode" data-highlighter="prismjs" data-ext="properties" data-title="properties"><pre v-pre><code><span class="line"><span class="token key attr-name">spark.blaze.enable</span> <span class="token value attr-value">true</span></span>
<span class="line"><span class="token key attr-name">spark.sql.extensions</span> <span class="token value attr-value">org.apache.spark.sql.blaze.BlazeSparkSessionExtension</span></span>
<span class="line"><span class="token key attr-name">spark.shuffle.manager</span> <span class="token value attr-value">org.apache.spark.sql.execution.blaze.shuffle.BlazeShuffleManager</span></span>
<span class="line"><span class="token key attr-name">spark.memory.offHeap.enabled</span> <span class="token value attr-value">false</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># suggested executor memory configuration</span></span>
<span class="line"><span class="token key attr-name">spark.executor.memory</span> <span class="token value attr-value">4g</span></span>
<span class="line"><span class="token key attr-name">spark.executor.memoryOverhead</span> <span class="token value attr-value">4096</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>submit a query with spark-sql, or other tools like spark-thriftserver:</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">spark-sql <span class="token parameter variable">-f</span> tpcds/q01.sql</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


