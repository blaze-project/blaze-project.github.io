<template><div><h1 id="benchmarks" tabindex="-1"><a class="header-anchor" href="#benchmarks"><span>Benchmarks</span></a></h1>
<h2 id="benchmark-result" tabindex="-1"><a class="header-anchor" href="#benchmark-result"><span>Benchmark Result</span></a></h2>
<p>Here is the benchmark result of TPC-DS 1TB Dataset, running under Spark-3.5 and Blaze-4.0.1-preview.</p>
<BenchmarkChart /><p>Below is a brief introduction of how we run TPC-DS benchmark with Spark/Blaze.</p>
<h2 id="generate-tpc-ds-dataset" tabindex="-1"><a class="header-anchor" href="#generate-tpc-ds-dataset"><span>Generate TPC-DS dataset</span></a></h2>
<p>Compile datagen tool (derived from <a href="https://github.com/maropu/spark-tpcds-datagen%5D" target="_blank" rel="noopener noreferrer">maropu/spark-tpcds-datagen</a>).</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token builtin class-name">cd</span> tpcds/datagen</span>
<span class="line">mvn package <span class="token parameter variable">-DskipTests</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>Generate 1TB dataset with spark.</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># use correct SPARK_HOME and output data location</span></span>
<span class="line"><span class="token comment"># --use-double-for-decimal and --use-string-for-char are optional, see dsdgen usage</span></span>
<span class="line"></span>
<span class="line"><span class="token assign-left variable">SPARK_HOME</span><span class="token operator">=</span><span class="token environment constant">$HOME</span>/software/spark ./bin/dsdgen <span class="token punctuation">\</span></span>
<span class="line">    --output-location /user/hive/data/tpcds-1000 <span class="token punctuation">\</span></span>
<span class="line">    --scale-factor <span class="token number">1000</span> <span class="token punctuation">\</span></span>
<span class="line">    <span class="token parameter variable">--format</span> parquet <span class="token punctuation">\</span></span>
<span class="line">    <span class="token parameter variable">--overwrite</span> <span class="token punctuation">\</span></span>
<span class="line">    --use-double-for-decimal <span class="token punctuation">\</span></span>
<span class="line">    --use-string-for-char</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="run-benchmark" tabindex="-1"><a class="header-anchor" href="#run-benchmark"><span>Run benchmark</span></a></h2>
<p>Compile benchmark tool (derived from <a href="https://github.com/databricks/spark-sql-perf" target="_blank" rel="noopener noreferrer">databricks/spark-sql-perf</a>).</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token builtin class-name">cd</span> tpcds/benchmark-runner</span>
<span class="line">mvn package <span class="token parameter variable">-DskipTests</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>Edit your <code v-pre>$SPARK_HOME/conf/spark-default.conf</code> to enable/disable Blaze (see the following conf), then launch benchmark runner.
If benchmarking with Blaze, ensure that the Blaze jar package is correctly built and moved into <code v-pre>$SPARK_HOME/jars</code>. (<a href="https://github.com/kwai/blaze/#build-from-source" target="_blank" rel="noopener noreferrer">How to build Blaze?</a>)</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># use correct SPARK_HOME and data location</span></span>
<span class="line"><span class="token assign-left variable">SPARK_HOME</span><span class="token operator">=</span><span class="token environment constant">$HOME</span>/software/spark ./bin/run <span class="token punctuation">\</span></span>
<span class="line">    --data-location /user/hive/data/tpcds-1000 <span class="token punctuation">\</span></span>
<span class="line">    <span class="token parameter variable">--format</span> parquet <span class="token punctuation">\</span></span>
<span class="line">    --output-dir ./benchmark-result</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Monitor benchmark status:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">tail</span> <span class="token parameter variable">-f</span> ./benchmark-result/YYYYMMDDHHmm/log</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Summarize query times of all cases:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">./bin/stat ./benchmark-result/YYYYMMDDHHmm</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="benchmark-configuration" tabindex="-1"><a class="header-anchor" href="#benchmark-configuration"><span>Benchmark configuration</span></a></h2>
<p>here is a simple configuration used for benchmarking, please notice that the benchmark result will slight differ when running on different environments.</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">spark.master <span class="token function">yarn</span></span>
<span class="line">spark.yarn.stagingDir.list hdfs://blaze-test/home/spark/user/</span>
<span class="line"></span>
<span class="line">spark.eventLog.enabled <span class="token boolean">true</span></span>
<span class="line">spark.eventLog.dir hdfs://blaze-test/home/spark-eventlog</span>
<span class="line">spark.history.fs.logDirectory hdfs://blaze-test/home/spark-eventlog</span>
<span class="line"></span>
<span class="line">spark.externalBlockStore.url.list hdfs://blaze-test/home/platform</span>
<span class="line">spark.driver.extraJavaOptions <span class="token parameter variable">-XX:+HeapDumpOnOutOfMemoryError</span> <span class="token parameter variable">-XX:HeapDumpPath</span><span class="token operator">=</span>/media/disk1/spark/ <span class="token parameter variable">-Djava.io.tmpdir</span><span class="token operator">=</span>/media/disk1/tmp <span class="token parameter variable">-Dlog4j2.formatMsgNoLookups</span><span class="token operator">=</span>true</span>
<span class="line">spark.local.dir /media/disk1/spark/localdir</span>
<span class="line"></span>
<span class="line">spark.shuffle.service.enabled <span class="token boolean">true</span></span>
<span class="line">spark.shuffle.service.port <span class="token number">7337</span></span>
<span class="line"></span>
<span class="line">spark.driver.memory 20g</span>
<span class="line">spark.driver.memoryOverhead <span class="token number">4096</span></span>
<span class="line"></span>
<span class="line">spark.executor.instances <span class="token number">10000</span></span>
<span class="line">spark.dynamicallocation.maxExecutors <span class="token number">10000</span></span>
<span class="line">spark.executor.cores <span class="token number">5</span></span>
<span class="line"></span>
<span class="line">spark.io.compression.codec zstd</span>
<span class="line">spark.sql.parquet.compression.codec zstd</span>
<span class="line"></span>
<span class="line"><span class="token comment"># benchmark without blaze</span></span>
<span class="line"><span class="token comment">#spark.executor.memory 6g</span></span>
<span class="line"><span class="token comment">#spark.executor.memoryOverhead 2048</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># benchmark with blaze</span></span>
<span class="line">spark.executor.memory 4g</span>
<span class="line">spark.executor.memoryOverhead <span class="token number">4096</span></span>
<span class="line">spark.blaze.enable <span class="token boolean">true</span></span>
<span class="line">spark.sql.extensions org.apache.spark.sql.blaze.BlazeSparkSessionExtension</span>
<span class="line">spark.shuffle.manager org.apache.spark.sql.execution.blaze.shuffle.BlazeShuffleManager</span>
<span class="line">spark.memory.offHeap.enabled <span class="token boolean">false</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># spark3.3+ disable char/varchar padding</span></span>
<span class="line"><span class="token comment">#spark.sql.readSideCharPadding false</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># enable shuffled hash join</span></span>
<span class="line"><span class="token comment">#spark.sql.join.preferSortMergeJoin false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


