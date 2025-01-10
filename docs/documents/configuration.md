---
title: Configurations
---

# Configurations for Blaze

## Blaze Runtime Parameter 

<table class="my-table3">
  <tr>
    <th>Parameters</th>
    <th>Default</th>
    <th>Note</th>
  </tr>
  <tr>
    <td>spark.blaze.enable</td>
    <td>true</td>
    <td>Enable/disable blaze engine.</td>
  </tr>
  <tr>
    <td>spark.blaze.batchSize</td>
    <td>10000</td>
    <td>Suggested batch size for arrow batches.</td>
  </tr>
  <tr>
    <td>spark.blaze.memoryFraction</td>
    <td>0.6</td>
    <td>Suggested fraction of off-heap memory used in native execution. Actual off-heap memory usage is expected to be spark.executor.memoryOverhead * fraction.</td>
  </tr>
  <tr>
    <td>spark.blaze.tokio.num.worker.threads</td>
    <td>1</td>
    <td>Number of worker threads used in tokio runtime, 0 to use default available parallelism value. For CPUs those support hyperthreading, it is recommended to set this value to the number of available physical cores.</td>
  </tr>
  <tr>
    <td>spark.blaze.enableInputBatchStatistics</td>
    <td>true</td>
    <td>Enable extra metrics of input batch statistics.</td>
  </tr>
  <tr>
    <td>spark.blaze.partialAggSkipping.enable</td>
    <td>true</td>
    <td>Enable partial aggregate skipping. (see https://github.com/blaze-init/blaze/issues/327)</td>
  </tr>
  <tr>
    <td>spark.blaze.partialAggSkipping.ratio</td>
    <td>0.8</td>
    <td>Partial aggregate skipping ratio.</td>
  </tr>
  <tr>
    <td>spark.blaze.partialAggSkipping.minRows</td>
    <td>20000</td>
    <td>Minimum number of rows to trigger partial aggregate skipping.</td>
  </tr>
  <tr>
    <td>spark.blaze.parquet.enable.pageFiltering</td>
    <td>false</td>
    <td>Parquet enable page filtering.</td>
  </tr>
  <tr>
    <td>spark.blaze.parquet.enable.bloomFilter</td>
    <td>false</td>
    <td>Parquet enable bloom filter.</td>
  </tr>
  <tr>
    <td>spark.blaze.forceShuffledHashJoin</td>
    <td>false</td>
    <td>Replace all sort-merge join to shuffled-hash join, only used for special benchmarking.</td>
  </tr>
</table>


## Native Operators Switch

<table class="my-table4">
  <tr>
    <th>Parameters</th>
    <th>Default</th>
  </tr>
  <tr>
    <td>spark.blaze.enable.scan</td>
    <td>true</td>
  </tr>
  <tr>
    <td>spark.blaze.enable.project</td>
    <td>true</td>
  </tr>
  <tr>
    <td>spark.blaze.enable.filter</td>
    <td>true</td>
  </tr>
  <tr>
    <td>spark.blaze.enable.sort</td>
    <td>true</td>
  </tr>
  <tr>
    <td>spark.blaze.enable.union</td>
    <td>true</td>
  </tr>
  <tr>
    <td>spark.blaze.enable.smj</td>
    <td>true</td>
  </tr>
  <tr>
    <td>spark.blaze.enable.shj</td>
    <td>true</td>
  </tr>
  <tr>
    <td>spark.blaze.enable.bhj</td>
    <td>true</td>
  </tr>
  <tr>
    <td>spark.blaze.enable.bnlj</td>
    <td>true</td>
  </tr>
  <tr>
    <td>spark.blaze.enable.local.limit</td>
    <td>true</td>
  </tr>
  <tr>
    <td>spark.blaze.enable.global.limit</td>
    <td>true</td>
  </tr>
  <tr>
    <td>spark.blaze.enable.take.ordered.and.project</td>
    <td>true</td>
  </tr>
  <tr>
    <td>spark.blaze.enable.aggr</td>
    <td>true</td>
  </tr>
  <tr>
    <td>spark.blaze.enable.expand</td>
    <td>true</td>
  </tr>
  <tr>
    <td>spark.blaze.enable.window</td>
    <td>true</td>
  </tr>
  <tr>
    <td>spark.blaze.enable.generate</td>
    <td>true</td>
  </tr>
  <tr>
    <td>spark.blaze.enable.local.table.scan</td>
    <td>true</td>
  </tr>
  <tr>
    <td>spark.blaze.enable.data.writing</td>
    <td>false</td>
  </tr>

</table>

## Expression/UDF switch
<table class="my-table3">
  <tr>
    <th>Parameters</th>
    <th>Default</th>
    <th>Note</th>
  </tr>
  <tr>
    <td>spark.blaze.enable.caseconvert.functions</td>
    <td>true</td>
    <td>Enable converting upper/lower functions to native, special cases may provide different outputs from spark due to different unicode versions.</td>
  </tr>
  <tr>
    <td>spark.blaze.udf.brickhouse.enabled</td>
    <td>true</td>
    <td>Enable some native-implemented brickhouse UDFs.</td>
  </tr>
  <tr>
    <td>spark.blaze.udf.UDFJson.enabled</td>
    <td>true</td>
    <td>Enable native implemented get_json_object/json_tuple. May introduce inconsistency in special case (especially with illegal json inputs).</td>
  </tr>
</table>
