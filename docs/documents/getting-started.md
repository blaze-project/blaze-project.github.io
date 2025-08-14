---
title: Getting-Started
---

# Getting Started with Blaze for Apache Spark

## Build from source

To build Blaze, please follow the steps below:

1. Install Rust

The native execution lib is written in Rust. So you're required to install Rust (nightly) first for
compilation. We recommend you to use [rustup](https://rustup.rs/).

2. Install JDK

Blaze has been well tested on jdk8/11/17, should work fine with higher versions.

3. Check out the source code.

```shell
git clone git@github.com:kwai/blaze.git
cd blaze
```

4. Build the project.

Specify shims package of which spark version that you would like to run on.

Currently we have supported these shims:

* spark-3.0 - for spark3.0.x
* spark-3.1 - for spark3.1.x
* spark-3.2 - for spark3.2.x
* spark-3.3 - for spark3.3.x
* spark-3.4 - for spark3.4.x
* spark-3.5 - for spark3.5.x.

You could either build Blaze in pre mode for debugging or in release mode to unlock the full potential of
Blaze.

```shell
SHIM=spark-3.5 # or spark-3.0/spark-3.1/spark-3.2/spark-3.3/spark-3.4/spark-3.5
MODE=release # or pre
JDK=jdk-8
./build/mvn package -P"${SHIM}" -P"${MODE}" -P${JDK}
```

After the build is finished, a fat Jar package that contains all the dependencies will be generated in the `target`
directory.

## Build with docker

You can use the following command to build a centos-7 compatible release:
```shell
SHIM=spark-3.5 MODE=release ./release-docker.sh
```

## Run Spark Job with Blaze Accelerator

This section describes how to submit and configure a Spark Job with Blaze support.

1. move blaze jar package to spark client classpath (normally `spark-xx.xx.xx/jars/`).

2. add the follow confs to spark configuration in `spark-xx.xx.xx/conf/spark-default.conf`:

```properties
spark.blaze.enable true
spark.sql.extensions org.apache.spark.sql.blaze.BlazeSparkSessionExtension
spark.shuffle.manager org.apache.spark.sql.execution.blaze.shuffle.BlazeShuffleManager
spark.memory.offHeap.enabled false

# suggested executor memory configuration
spark.executor.memory 4g
spark.executor.memoryOverhead 4096
```

3. submit a query with spark-sql, or other tools like spark-thriftserver:
```shell
spark-sql -f tpcds/q01.sql
```
