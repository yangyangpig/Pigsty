#!/bin/bash

base_dir=$(cd "$(dirname "$0")";pwd)
pro_dir=$(dirname $base_dir)
echo $base_dir
echo $pro_dir

cd $pro_dir
npm run build:prod

if [[ $? -ne 0 ]]; then
echo "npm build fail"
fi

cur_sec=`date '+%s'`
# 获取纳秒
cur_ns=`date '+%N'`
# 合并为时间戳
suffix=$((`date '+%s'`*1000+`date '+%N'`/1000000))

docker build -t pigeno:${suffix} -f ./ci/Dockerfile-packing .

if [[ $? -ne 0 ]]; then
echo "docker build fail"
fi




